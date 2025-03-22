import * as React from "react";
import {
  Bold,
  BookOpen,
  Compass,
  // FileText,
  Frame,
  HeartHandshake,
  House,
  Map,
  // MessageCircleQuestion,
  PieChart,
  Sparkles,
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
  SidebarSeparator,
} from "@/components/ui/sidebar";

// Import your images
import OpenSidebarLogo from "@/img/SkillEdgeLogo.svg";
import CollapsedSidebarLogo from "@/img/FaviconLogo1.svg";
import { Link } from "react-router-dom";

const data = {
  user: {
    name: "Skill Edge",
    email: "skilledge@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: House,
      isActive: true,
    },
    {
      title: "Roadmap",
      url: "/roadmap",
      icon: Compass,
    },
    // {
    //   title: "Resume Template",
    //   url: "/construction",
    //   url: "/resume-template",
    //   icon: FileText,
    // },
    {
      title: "Skill-X",
      // url: "/construction",
      url: "/skill-x",
      icon: Sparkles,
    },
    {
      title: "Blog",
      // url: "/blog",
      url: "/construction",
      icon: Bold,
    },
    // {
    //   title: "FAQ",
    //   url: "/faq",
    //   icon: MessageCircleQuestion,
    // },
    {
      title: "Notes",
      url: "/notes",
      icon: BookOpen,
    },
    {
      title: "Help & Support",
      url: "/help-feedback",
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

  // Function to handle link click and collapse sidebar on small screens
  const handleLinkClick = () => {
    if (window.innerWidth < 768 && sidebarRef.current) {
      // Add the "collapsed" class to the sidebar
      sidebarRef.current.classList.add("collapsed");
    }
  };

  return (
    <Sidebar ref={sidebarRef} collapsible="icon" {...props}>
      <SidebarHeader>
        <Link to="/">
          <img
            src={isCollapsed ? CollapsedSidebarLogo : OpenSidebarLogo}

            alt={isCollapsed ? "Collapsed Logo" : "Open Logo"}
            style={{
              width:
                window.innerWidth < 768 ? "70%" : isCollapsed ? "50px" : "70%",
              height: "auto",
              marginTop: "4px",
              marginLeft: "2px",
            }}
            onContextMenu={(e) => e.preventDefault()} // Prevent right-click
          />
        </Link>
      </SidebarHeader>
      {/* <hr style={{padding: "0 10px" }} /> */}
      <SidebarSeparator/>
      <SidebarContent style={{ marginTop: "5px" }}>
        <NavMain items={data.navMain} onLinkClick={handleLinkClick} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser/>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}


