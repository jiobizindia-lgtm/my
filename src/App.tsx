import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import AcademicPerformance from "./pages/AcademicPerformance";
import Chat from "./pages/Chat";
import Classes from "./pages/Classes";
import Tests from "./pages/Tests";
import ManageProfile from "./pages/ManageProfile";
import RegisterComplaint from "./pages/RegisterComplaint";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import NotFound from "./pages/NotFound";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAev9PzUAbBzchoNPVOm9b8Hxb-O1QwIuY",
  authDomain: "talkingisright.firebaseapp.com",
  projectId: "talkingisright",
  storageBucket: "talkingisright.firebasestorage.app",
  messagingSenderId: "465611317224",
  appId: "1:465611317224:web:0e64fac06a01a259b34e5d",
  measurementId: "G-LCBJ35T3ND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <>{children}</>;
};

const AppRoutes = () => (
  <Routes>
    {/* Welcome route - public landing page */}
    <Route path="/welcome" element={<Welcome />} />
    
    {/* Home route - goes to welcome if not authenticated, dashboard if authenticated */}
    <Route path="/" element={<PublicRoute><Welcome /></PublicRoute>} />
    
    {/* Public routes */}
    <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
    <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
    
    {/* Protected routes */}
    <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/academic" element={<AcademicPerformance />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/tests" element={<Tests />} />
      <Route path="/profile" element={<ManageProfile />} />
      <Route path="/complaint" element={<RegisterComplaint />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
