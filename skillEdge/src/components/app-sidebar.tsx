import * as React from "react";
import {
  Bold,
  BookOpen,
  FileText,
  Frame,
  HeartHandshake,
  House,
  Map,
  MessageCircleQuestion,
  PieChart,
  ScrollText,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
// import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// Import your images
import OpenSidebarLogo from "@/img/SkillEdgeLogo.svg"; 
import CollapsedSidebarLogo from "@/img/FaviconLogo1.svg"; 

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: House,
      isActive: true,
    },
    {
      title: "Resume Template",
      url: "#",
      icon: FileText,
    },
    {
      title: "Cover Letter",
      url: "#",
      icon: ScrollText,
    },
    {
      title: "Blog",
      url: "#",
      icon: Bold,
    },
    {
      title: "FAQ",
      url: "#",
      icon: MessageCircleQuestion,
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
    },
    {
      title: "Help & Feedback",
      url: "#",
      icon: HeartHandshake,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [isCollapsed, setIsCollapsed] = React.useState(true); // Set initial state to collapsed
  const sidebarRef = React.useRef<HTMLDivElement>(null);

  // Detect sidebar state using MutationObserver
  React.useEffect(() => {
    const sidebarElement = sidebarRef.current;

    const observer = new MutationObserver(() => {
      if (sidebarElement?.getAttribute("data-state") === "collapsed") {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    });

    // Observe attributes of the sidebar element
    if (sidebarElement) {
      observer.observe(sidebarElement, {
        attributes: true,
        attributeFilter: ["data-state"],
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Sidebar ref={sidebarRef} collapsible="icon" {...props}>
      <SidebarHeader>
        <img
          src={isCollapsed ? CollapsedSidebarLogo : OpenSidebarLogo}
          alt={isCollapsed ? "Collapsed Logo" : "Open Logo"}
          style={{
            width: isCollapsed ? "50px" : "150px",
            height: "auto",
            marginTop: "5px", 
            marginLeft: "3px", 
          }}
        />
      </SidebarHeader>
      <SidebarContent style={{marginTop: '5px' }}>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter> 
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}