import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, Save, Lock, User, MapPin, Phone, Mail } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

const ManageProfile = () => {
  const { user, updateProfile } = useAuth();
  const [profile, setProfile] = useState(user || {
    firstName: "",
    middleName: "",
    surname: "",
    fatherName: "",
    mobileNumber: "",
    email: "",
    state: "",
    district: "",
    city: "",
  });
  const [passwords, setPasswords] = useState({ current: "", new: "", confirm: "" });

  const displayName = user
    ? `${user.firstName} ${user.middleName ? user.middleName + " " : ""}${user.surname}`.trim()
    : "Guest";

  const initials = user
    ? `${user.firstName[0] || ""}${user.surname[0] || ""}`.toUpperCase()
    : "G";

  const handleSaveProfile = () => {
    if (user) {
      updateProfile(profile);
      toast({ title: "Profile Updated", description: "Your profile has been saved successfully." });
    }
  };

  const handleChangePassword = () => {
    if (passwords.new !== passwords.confirm) {
      toast({ title: "Error", description: "Passwords do not match.", variant: "destructive" });
      return;
    }
    if (passwords.new.length < 6) {
      toast({ title: "Error", description: "Password must be at least 6 characters.", variant: "destructive" });
      return;
    }
    toast({ title: "Password Changed", description: "Your password has been updated successfully." });
    setPasswords({ current: "", new: "", confirm: "" });
  };

  const handleChange = (field: string, value: string) => {
    setProfile((prev: any) => ({ ...prev, [field]: value }));
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">Please login to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in max-w-4xl">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold">Manage Profile</h1>
        <p className="text-muted-foreground">Update your personal information</p>
      </div>

      {/* Profile Photo */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            Profile Photo
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-6">
          <div className="relative">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user.avatar} />
              <AvatarFallback className="text-2xl gradient-primary text-primary-foreground">
                {initials}
              </AvatarFallback>
            </Avatar>
            <Button size="icon" className="absolute bottom-0 right-0 rounded-full h-8 w-8 gradient-primary">
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          <div>
            <p className="font-medium text-lg">{displayName}</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Phone className="h-3 w-3" />
              {user.mobileNumber}
            </p>
            {user.email && (
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Mail className="h-3 w-3" />
                {user.email}
              </p>
            )}
            <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
              <MapPin className="h-3 w-3" />
              {user.city}, {user.district}, {user.state}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label>First Name</Label>
              <Input
                value={profile.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
            </div>
            <div>
              <Label>Middle Name</Label>
              <Input
                value={profile.middleName}
                onChange={(e) => handleChange("middleName", e.target.value)}
              />
            </div>
            <div>
              <Label>Surname</Label>
              <Input
                value={profile.surname}
                onChange={(e) => handleChange("surname", e.target.value)}
              />
            </div>
          </div>

          <div>
            <Label>Father's Name</Label>
            <Input
              value={profile.fatherName}
              onChange={(e) => handleChange("fatherName", e.target.value)}
            />
          </div>

          <Separator />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Mobile Number</Label>
              <Input value={profile.mobileNumber} disabled className="bg-muted" />
              <p className="text-xs text-muted-foreground mt-1">Mobile number cannot be changed</p>
            </div>
            <div>
              <Label>Email (Optional)</Label>
              <Input
                type="email"
                value={profile.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label>State/UT</Label>
              <Select value={profile.state} onValueChange={(value) => handleChange("state", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent className="bg-background border">
                  {indianStates.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>District</Label>
              <Input
                value={profile.district}
                onChange={(e) => handleChange("district", e.target.value)}
              />
            </div>
            <div>
              <Label>City/Town/Village</Label>
              <Input
                value={profile.city}
                onChange={(e) => handleChange("city", e.target.value)}
              />
            </div>
          </div>

          <Button onClick={handleSaveProfile} className="gradient-primary">
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </CardContent>
      </Card>

      {/* Change Password */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-primary" />
            Change Password
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label>Current Password</Label>
              <Input
                type="password"
                value={passwords.current}
                onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
              />
            </div>
            <div>
              <Label>New Password</Label>
              <Input
                type="password"
                value={passwords.new}
                onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
              />
            </div>
            <div>
              <Label>Confirm Password</Label>
              <Input
                type="password"
                value={passwords.confirm}
                onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
              />
            </div>
          </div>
          <Button onClick={handleChangePassword} variant="outline">
            <Lock className="h-4 w-4 mr-2" />
            Update Password
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageProfile;
