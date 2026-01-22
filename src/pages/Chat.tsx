import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, AlertTriangle, Search, Palette } from "lucide-react";
import { chatUsers, currentStudent } from "@/data/studentData";
import { cn } from "@/lib/utils";

const themes = [
  { name: "Light", class: "bg-background" },
  { name: "Dark", class: "bg-slate-900" },
  { name: "Blue", class: "bg-blue-950" },
  { name: "Exam", class: "bg-amber-50" },
];

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ text: string; sent: boolean; time: string }[]>([
    { text: "Hey! Did you complete the quant assignment?", sent: false, time: "10:30 AM" },
    { text: "Yes, just finished it!", sent: true, time: "10:32 AM" },
    { text: "Can you share your notes for the last chapter?", sent: false, time: "10:33 AM" },
  ]);
  const [theme, setTheme] = useState(0);
  const [showThemes, setShowThemes] = useState(false);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sent: true, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
      setMessage("");
    }
  };

  const selectedChat = chatUsers.find(u => u.id === selectedUser);

  return (
    <div className="space-y-4 animate-fade-in h-[calc(100vh-8rem)]">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold">Interact with Students</h1>
        <p className="text-muted-foreground">Connect with your classmates</p>
      </div>

      {/* Proctor Warning */}
      <div className="flex items-center gap-2 p-3 rounded-lg bg-warning/10 border border-warning/30">
        <AlertTriangle className="h-5 w-5 text-warning flex-shrink-0" />
        <p className="text-sm font-medium">⚠️ This chat is monitored by the Proctor Team. Please maintain academic integrity.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 h-[calc(100%-10rem)]">
        {/* Users List */}
        <Card className="glass-card lg:col-span-1">
          <CardHeader className="pb-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search chats..." className="pl-10" />
            </div>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px]">
              {chatUsers.map((user) => (
                <button key={user.id} onClick={() => setSelectedUser(user.id)}
                  className={cn("w-full flex items-center gap-3 p-3 rounded-lg transition-all text-left",
                    selectedUser === user.id ? "bg-primary/10" : "hover:bg-muted")}>
                  <div className="relative">
                    <Avatar><AvatarFallback className="gradient-primary text-primary-foreground">{user.avatar}</AvatarFallback></Avatar>
                    {user.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-background" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between"><span className="font-medium">{user.name}</span><span className="text-xs text-muted-foreground">{user.time}</span></div>
                    <p className="text-sm text-muted-foreground truncate">{user.lastMessage}</p>
                  </div>
                  {user.unread > 0 && <Badge className="gradient-primary">{user.unread}</Badge>}
                </button>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className={cn("glass-card lg:col-span-2 flex flex-col", themes[theme].class)}>
          {selectedUser ? (
            <>
              <CardHeader className="border-b border-border flex-row items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar><AvatarFallback className="gradient-primary text-primary-foreground">{selectedChat?.avatar}</AvatarFallback></Avatar>
                  <div>
                    <p className="font-medium">{selectedChat?.name}</p>
                    <p className="text-xs text-muted-foreground">{selectedChat?.online ? "Online" : "Offline"}</p>
                  </div>
                </div>
                <div className="relative">
                  <Button variant="ghost" size="icon" onClick={() => setShowThemes(!showThemes)}><Palette className="h-4 w-4" /></Button>
                  {showThemes && (
                    <div className="absolute right-0 top-10 p-2 bg-card border rounded-lg shadow-lg z-10 space-y-1">
                      {themes.map((t, i) => (
                        <button key={t.name} onClick={() => { setTheme(i); setShowThemes(false); }}
                          className={cn("w-full px-3 py-1 text-sm rounded hover:bg-muted text-left", theme === i && "bg-primary/10")}>
                          {t.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </CardHeader>
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((msg, i) => (
                    <div key={i} className={cn("flex", msg.sent ? "justify-end" : "justify-start")}>
                      <div className={cn("max-w-[70%] p-3 rounded-lg", msg.sent ? "bg-primary text-primary-foreground" : "bg-muted")}>
                        <p className="text-sm">{msg.text}</p>
                        <p className={cn("text-xs mt-1", msg.sent ? "text-primary-foreground/70" : "text-muted-foreground")}>{msg.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <Input placeholder="Type a message..." value={message} onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()} />
                  <Button onClick={sendMessage} className="gradient-primary"><Send className="h-4 w-4" /></Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-muted-foreground">
              Select a chat to start messaging
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Chat;
