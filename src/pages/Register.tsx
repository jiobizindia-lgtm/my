import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";
import { UserPlus } from "lucide-react";

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    surname: "",
    fatherName: "",
    mobileNumber: "",
    email: "",
    state: "",
    district: "",
    city: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validation
    if (!formData.firstName || !formData.surname || !formData.fatherName || 
        !formData.mobileNumber || !formData.state || !formData.district || 
        !formData.city || !formData.password) {
      toast({
        title: "Error",
        description: "Please fill all required fields.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (formData.mobileNumber.length !== 10) {
      toast({
        title: "Error",
        description: "Please enter a valid 10-digit mobile number.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: "Error",
        description: "Password must be at least 6 characters.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    const { confirmPassword, password, ...userData } = formData;
    const success = register(userData, password);

    if (success) {
      toast({
        title: "Registration Successful!",
        description: "Your account has been created. Welcome to PA Portal!",
      });
      navigate("/");
    } else {
      toast({
        title: "Registration Failed",
        description: "This mobile number is already registered. Please login instead.",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 py-8">
      <Card className="w-full max-w-2xl glass-card">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
            <span className="text-primary-foreground font-bold text-xl">PA</span>
          </div>
          <CardTitle className="text-2xl gradient-text">Create Account</CardTitle>
          <CardDescription>Register to access EduPortal</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="middleName">Middle Name</Label>
                <Input
                  id="middleName"
                  placeholder="Middle Name"
                  value={formData.middleName}
                  onChange={(e) => handleChange("middleName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="surname">Surname *</Label>
                <Input
                  id="surname"
                  placeholder="Surname"
                  value={formData.surname}
                  onChange={(e) => handleChange("surname", e.target.value)}
                />
              </div>
            </div>

            {/* Father's Name */}
            <div className="space-y-2">
              <Label htmlFor="fatherName">Father's Name *</Label>
              <Input
                id="fatherName"
                placeholder="Father's Name"
                value={formData.fatherName}
                onChange={(e) => handleChange("fatherName", e.target.value)}
              />
            </div>

            {/* Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="mobileNumber">Mobile Number *</Label>
                <Input
                  id="mobileNumber"
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={formData.mobileNumber}
                  onChange={(e) => handleChange("mobileNumber", e.target.value.replace(/\D/g, "").slice(0, 10))}
                  maxLength={10}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email (Optional)</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
            </div>

            {/* Location */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="state">State/UT *</Label>
                <Select value={formData.state} onValueChange={(value) => handleChange("state", value)}>
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
              <div className="space-y-2">
                <Label htmlFor="district">District *</Label>
                <Input
                  id="district"
                  placeholder="District"
                  value={formData.district}
                  onChange={(e) => handleChange("district", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City/Town/Village *</Label>
                <Input
                  id="city"
                  placeholder="City/Town/Village"
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                />
              </div>
            </div>

            {/* Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Minimum 6 characters"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleChange("confirmPassword", e.target.value)}
                />
              </div>
            </div>

            <Button type="submit" className="w-full gradient-primary" disabled={isLoading}>
              <UserPlus className="h-4 w-4 mr-2" />
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link to="/login" className="text-primary hover:underline font-medium">
              Login here
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
