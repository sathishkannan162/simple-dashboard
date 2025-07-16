"use client";

import { Search, MessageSquare, Bell, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function Header() {
  return (
    <header className="flex h-16 items-center gap-4 border-b bg-white px-6">
      <SidebarTrigger />
      
      <div className="flex items-center gap-2">
        <span className="text-xl font-semibold text-gray-900">Dashboard</span>
      </div>
      
      <div className="flex-1" />
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search..."
            className="w-80 pl-10"
          />
        </div>
        
        <Button variant="ghost" size="icon">
          <MessageSquare className="h-5 w-5" />
        </Button>
        
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-orange-400 flex items-center justify-center">
            <span className="text-white font-medium text-sm">A</span>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </header>
  );
}