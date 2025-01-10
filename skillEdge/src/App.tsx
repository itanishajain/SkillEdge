import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import HelpFeedback from "@/pages/HelpFeedback";

export default function App() {
  return (
    <Router>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1 md:hidden" />
            </div>
          </header>
          <main style={{ marginLeft: "250px", padding: "20px" }}> {/* Adjust for sidebar width */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume-template" element={<ResumeTemplate />} />
              <Route path="/cover-letter" element={<CoverLetter />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/help-feedback" element={<HelpFeedback />} />
            </Routes>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </Router>
  );
}
