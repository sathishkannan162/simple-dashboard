"use client";

import { 
  BarChart3, 
  Users, 
  Calendar, 
  UserCheck, 
  Headphones, 
  UserCog, 
  Building2, 
  CreditCard, 
  Settings 
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/", icon: BarChart3 },
  { title: "Account Management", url: "/account", icon: Users },
  { title: "Booking Management", url: "/booking", icon: Calendar },
  { title: "Provider Management", url: "/provider", icon: UserCheck },
  { title: "Service Management", url: "/service", icon: Headphones },
  { title: "Customer Management", url: "/customer", icon: UserCog },
  { title: "Employee Management", url: "/employee", icon: Building2 },
  { title: "Transaction Management", url: "/transaction", icon: CreditCard },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2">
          <div className="h-8 w-8 rounded-lg bg-cyan-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <span className="text-xl font-semibold text-gray-900">chalo</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}