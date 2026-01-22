import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle, CheckCircle, Send } from "lucide-react";
import { complaintCategories } from "@/data/studentData";

const RegisterComplaint = () => {
  const [category, setCategory] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [ticketId] = useState(`TKT-${Date.now().toString().slice(-6)}`);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (category && subject && description) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="space-y-6 animate-fade-in max-w-2xl mx-auto">
        <Card className="glass-card text-center py-12">
          <CardContent className="space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-success/10 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            <h2 className="text-2xl font-bold">Complaint Registered Successfully!</h2>
            <p className="text-muted-foreground">Your complaint has been submitted and will be reviewed shortly.</p>
            <div className="p-4 rounded-lg bg-muted inline-block">
              <p className="text-sm text-muted-foreground">Ticket ID</p>
              <p className="text-xl font-bold text-primary">{ticketId}</p>
            </div>
            <p className="text-sm text-muted-foreground">Please save this ticket ID for future reference.</p>
            <Button onClick={() => { setSubmitted(false); setCategory(""); setSubject(""); setDescription(""); }} variant="outline">
              Register Another Complaint
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in max-w-2xl">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold">Register a Complaint</h1>
        <p className="text-muted-foreground">We're here to help. Submit your concerns below.</p>
      </div>

      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-primary" />
            Complaint Form
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Category *</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger><SelectValue placeholder="Select a category" /></SelectTrigger>
                <SelectContent>
                  {complaintCategories.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Subject *</Label>
              <Input placeholder="Brief subject of your complaint" value={subject} onChange={(e) => setSubject(e.target.value)} required />
            </div>
            <div>
              <Label>Description *</Label>
              <Textarea placeholder="Describe your complaint in detail..." rows={6} value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full gradient-primary" disabled={!category || !subject || !description}>
              <Send className="h-4 w-4 mr-2" />Submit Complaint
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterComplaint;
