"use client";

import { type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
  onLinkClick,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
  }[];
  onLinkClick: () => void;
}) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Link to={item.url} key={item.title} onClick={onLinkClick}>
            <SidebarMenuItem
              style={{
                marginBottom: "8px",
              }}
            >
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && (
                  <item.icon
                    style={{
                      width: "18px",
                      height: "18px",
                      marginRight: "8px",
                    }}
                  />
                )}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </Link>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}


