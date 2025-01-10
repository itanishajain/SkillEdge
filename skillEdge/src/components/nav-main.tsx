"use client";

import { Link } from "react-router-dom";
import { type LucideIcon } from "lucide-react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Link to={item.url}>
            <SidebarMenuItem
              key={item.title}
              style={{
                marginBottom: "8px",
              }}
            >
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && (
                  <item.icon
                    style={{
                      width: "17px",
                      height: "17px",
                      marginRight: "2px",
                    }}
                  />
                )}
                <Link to={item.url}>
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </Link>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
