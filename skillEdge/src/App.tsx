import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Import all pages
import Home from "@/pages/Home";
import ResumeTemplate from "@/pages/ResumeTemplate";
import Blog from "@/pages/Blog";
import FAQ from "@/pages/FAQ";
import ScanResume from "./pages/ScanResume";
import HelpSupport from "./pages/HelpSupport";

// Authentication Pages
import { ForgotPassword } from "./pages/authentication/ForgotPassword";
import { SignIn } from "./pages/authentication/Signin";
import { SignUp } from "./pages/authentication/Signup";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { Toaster } from "./components/ui/Toaster";
import Profile from "./pages/Profile";
import RoadMap from "./pages/RoadMap";
import Saved from "./pages/Saved";
import SkillX from "./pages/SkillX";
import Notes from "@/pages/Notes";
import Preloader from "./components/Preloader";
import CareerPage from './pages/CareerPage';
import UnderConstruction from './pages/UnderConstruction';

// Import Toaster

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preloader until the website is completely loaded
    setLoading(false);
  }, []);

  if (loading) return <Preloader />;

  return (
    <AuthProvider>
      <Toaster />
      <Router>
        <Routes>
          {/* Public Authentication Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Redirect users to login if not authenticated */}
          <Route
            path="/*"
            element={
              <RequireAuth>
                <SidebarProvider>
                  <AppSidebar />
                  <SidebarInset>
                    {/* <header className="flex shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"> */}
                    <header className="">
                      <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1 md:hidden" />
                      </div>
                    </header> 
                    <main>
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/roadmap" element={<RoadMap />} />
                        <Route path="/resume-template" element={<ResumeTemplate />} />
                        <Route path="/skill-x" element={<SkillX />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/notes" element={<Notes />} />
                        <Route path="/help-feedback" element={<HelpSupport />} />
                        <Route path="/scanresume" element={<ScanResume />} />
                        <Route path="/career" element={<CareerPage />} />
                        <Route path="/Profile" element={<Profile />} />
                        <Route path="/saved" element={<Saved />} />
                        <Route path="/construction" element={<UnderConstruction />} />
                      </Routes>
                    </main>
                  </SidebarInset>
                </SidebarProvider>
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

// Component to redirect unauthenticated users to /signin
const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();

  if (loading) return <Preloader />;

  return user ? children : <Navigate to="/signin" replace />;
};
