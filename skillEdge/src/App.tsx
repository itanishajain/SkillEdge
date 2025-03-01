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
import CoverLetter from "@/pages/CoverLetter";
import Blog from "@/pages/Blog";
import FAQ from "@/pages/FAQ";
import Documentation from "@/pages/Documentation";
import ScanResume from "./pages/ScanResume";
import BuildResume from "./pages/BuildResume";
import HelpSupport from "./pages/HelpSupport";

// Authentication Pages
import { ForgotPassword } from "./pages/authentication/ForgotPassword";
import { SignIn } from "./pages/authentication/Signin";
import { SignUp } from "./pages/authentication/Signup";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { Toaster } from "./components/ui/Toaster";
import Profile from "./pages/Profile";

// Import Toaster


export default function App() {
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
                    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                      <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1 md:hidden" />
                      </div>
                    </header>
                    <main>
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/resume-template" element={<ResumeTemplate />} />
                        <Route path="/cover-letter" element={<CoverLetter />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/documentation" element={<Documentation />} />
                        <Route path="/help-feedback" element={<HelpSupport />} />
                        <Route path="/scanresume" element={<ScanResume />} />
                        <Route path="/buildresume" element={<BuildResume />} />
                        <Route path="/Profile" element={<Profile />} />
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

  if (loading) return <div>Loading...</div>;

  return user ? children : <Navigate to="/signin" replace />;
};
