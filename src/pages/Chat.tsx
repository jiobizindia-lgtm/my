// src/pages/Chat.tsx
import React, { useEffect, useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, AlertTriangle, Search, Palette, Paperclip } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { db, storage } from "@/firebase/firebase";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  orderBy,
  serverTimestamp,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  limit,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

type Room = {
  id: string;
  name?: string;
  isGroup?: boolean;
  members: string[];
  lastMessage?: string;
  createdAt?: any;
  createdBy?: string;
};

type Message = {
  id?: string;
  text?: string;
  type?: "text" | "file";
  file?: { name: string; url: string; size: number; mime: string };
  senderId: string;
  senderName?: string;
  createdAt?: any;
};

const Chat = () => {
  const { user, firebaseUser } = useAuth();
  const uid = firebaseUser?.uid || "";
  const [rooms, setRooms] = useState<Room[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageText, setMessageText] = useState("");
  const [creatingRoom, setCreatingRoom] = useState(false);
  const [newRoomName, setNewRoomName] = useState("");
  const [isGroup, setIsGroup] = useState(false);
  const [fileUploading, setFileUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Listen for rooms where the user is a member
  useEffect(() => {
    if (!uid) return;
    const roomsRef = collection(db, "rooms");
    const q = query(roomsRef, where("members", "array-contains", uid), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      const r: Room[] = [];
      snap.forEach((doc) => {
        r.push({ id: doc.id, ...(doc.data() as any) });
      });
      setRooms(r);
      // auto-select first room if none selected
      if (!selectedRoom && r.length > 0) setSelectedRoom(r[0]);
    });
    return () => unsub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid]);

  // Listen for messages in selectedRoom
  useEffect(() => {
    if (!selectedRoom) {
      setMessages([]);
      return;
    }
    const messagesRef = collection(db, "rooms", selectedRoom.id, "messages");
    const q = query(messagesRef, orderBy("createdAt", "asc"));
    const unsub = onSnapshot(q, (snap) => {
      const msgs: Message[] = [];
      snap.forEach((doc) => msgs.push({ id: doc.id, ...(doc.data() as any) }));
      setMessages(msgs);
      // scroll to bottom
      setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
    });
    return () => unsub();
  }, [selectedRoom]);

  const createRoom = async () => {
    if (!uid) return;
    if (!isGroup && !newRoomName) {
      // For 1:1 we will create a room with the logged-in user and a generated placeholder
      // For simplicity, 1:1 rooms are created by name = 'Direct:uid' (you can adapt for real user selection)
    }
    setCreatingRoom(true);
    try {
      const roomsRef = collection(db, "rooms");
      const roomPayload: Partial<Room> = {
        name: isGroup ? newRoomName || "New Group" : `Direct-${Date.now()}`,
        isGroup: isGroup,
        members: [uid], // in a production app you'd allow selecting other members
        createdAt: serverTimestamp(),
        createdBy: uid,
      };
      const docRef = await addDoc(roomsRef, roomPayload);
      // Optionally update to add lastMessage etc.
      setNewRoomName("");
      setIsGroup(false);
      // Select the created room
      setSelectedRoom({ id: docRef.id, ...(roomPayload as any) });
    } catch (err) {
      console.error("Create room error", err);
    } finally {
      setCreatingRoom(false);
    }
  };

  const sendMessage = async (fileData?: { name: string; url: string; size: number; mime: string }) => {
    if (!selectedRoom || !uid) return;
    if (!messageText && !fileData) return;

    const messagesRef = collection(db, "rooms", selectedRoom.id, "messages");
    const payload: any = {
      senderId: uid,
      senderName: user ? `${user.firstName || ""} ${user.surname || ""}`.trim() : "",
      createdAt: serverTimestamp(),
      type: fileData ? "file" : "text",
    };
    if (fileData) payload.file = fileData;
    if (messageText) payload.text = messageText;

    try {
      await addDoc(messagesRef, payload);
      // update lastMessage on room
      const roomRef = doc(db, "rooms", selectedRoom.id);
      await updateDoc(roomRef, {
        lastMessage: fileData ? `${payload.senderName} sent a file` : messageText,
        updatedAt: serverTimestamp(),
      });
      setMessageText("");
    } catch (err) {
      console.error("Send message error", err);
    }
  };

  const onFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files && e.target.files[0];
    if (!f || !selectedRoom || !uid) return;
    const path = `uploads/${selectedRoom.id}/${Date.now()}_${f.name}`;
    const storageRef = ref(storage, path);
    setFileUploading(true);
    const uploadTask = uploadBytesResumable(storageRef, f);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // You can use snapshot to show progress
      },
      (error) => {
        console.error("Upload error", error);
        setFileUploading(false);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        setFileUploading(false);
        await sendMessage({
          name: f.name,
          url,
          size: f.size,
          mime: f.type || "application/octet-stream",
        });
      }
    );
    // reset input
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const openFilePicker = () => fileInputRef.current?.click();

  const formatTime = (ts: any) => {
    if (!ts) return "";
    const d = ts?.toDate ? ts.toDate() : new Date(ts);
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="space-y-4 animate-fade-in h-[calc(100vh-8rem)]">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold">Interact with Students</h1>
        <p className="text-muted-foreground">Connect with your classmates</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 h-[calc(100%-10rem)]">
        {/* Rooms list */}
        <Card className="glass-card lg:col-span-1">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle>Conversations</CardTitle>
              <div className="flex items-center gap-2">
                <Input
                  placeholder="New room name"
                  value={newRoomName}
                  onChange={(e) => setNewRoomName(e.target.value)}
                />
                <Button size="sm" onClick={() => setIsGroup((s) => !s)} aria-pressed={isGroup}>
                  {isGroup ? "Group" : "1:1"}
                </Button>
                <Button size="sm" onClick={createRoom} disabled={creatingRoom}>
                  Create
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            <ScrollArea className="h-[60vh]">
              <div className="divide-y">
                {rooms.length === 0 && <div className="p-4 text-sm text-muted-foreground">No conversations yet.</div>}
                {rooms.map((r) => (
                  <div
                    key={r.id}
                    className={cn(
                      "p-3 cursor-pointer hover:bg-muted rounded-md flex items-center justify-between",
                      selectedRoom?.id === r.id && "bg-muted"
                    )}
                    onClick={() => setSelectedRoom(r)}
                  >
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>{r.name ? r.name[0] : "U"}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{r.name || (r.isGroup ? "Group" : "Direct")}</div>
                        <div className="text-sm text-muted-foreground">{r.lastMessage || "No messages yet"}</div>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">{/* timestamp placeholder */}</div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Messages */}
        <Card className="glass-card lg:col-span-2 flex flex-col">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>{selectedRoom ? selectedRoom.name || "Conversation" : "Select a conversation"}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {selectedRoom ? `${selectedRoom.members.length} member(s)` : "No conversation selected"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input ref={fileInputRef} type="file" className="hidden" onChange={onFileSelected} />
                <Button size="sm" variant="secondary" onClick={openFilePicker} disabled={!selectedRoom || fileUploading}>
                  <Paperclip className="mr-2" /> Attach
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((m) => (
                  <div key={m.id} className={cn("flex gap-3", m.senderId === uid ? "justify-end" : "justify-start")}>
                    {m.senderId !== uid && (
                      <Avatar>
                        <AvatarFallback>{m.senderName ? m.senderName[0] : "U"}</AvatarFallback>
                      </Avatar>
                    )}
                    <div className={cn("max-w-xl px-4 py-2 rounded-lg", m.senderId === uid ? "bg-primary/10" : "bg-muted")}>
                      <div className="text-sm">{m.senderName}</div>
                      {m.type === "text" && <div className="mt-1">{m.text}</div>}
                      {m.type === "file" && m.file && (
                        <div className="mt-1">
                          <a className="text-primary underline" href={m.file.url} target="_blank" rel="noreferrer">
                            {m.file.name}
                          </a>
                          <div className="text-xs text-muted-foreground">{m.file.size ? `${Math.round(m.file.size / 1024)} KB` : ""}</div>
                        </div>
                      )}
                      <div className="text-xs text-muted-foreground mt-1">{formatTime(m.createdAt)}</div>
                    </div>
                    {m.senderId === uid && (
                      <Avatar>
                        <AvatarFallback>{m.senderName ? m.senderName[0] : "U"}</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="border-t p-4 flex items-center gap-2">
              <Input
                placeholder="Type a message..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
              />
              <Button onClick={() => sendMessage()} disabled={!selectedRoom}>
                <Send />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chat;
