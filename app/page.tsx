"use client"

import { 
  Search, 
  MessageCircle, 
  Bell, 
  ChevronDown, 
  Home, 
  Users, 
  Calendar,
  Star,
  Heart,
  UserCheck,
  Briefcase,
  Receipt,
  Settings,
  BarChart3,
  TrendingUp,
  MoreHorizontal,
  ChevronLeft
} from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navigationItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Users, label: "Account Management" },
  { icon: Calendar, label: "Booking Management" },
  { icon: Star, label: "Provider Management" },
  { icon: Heart, label: "Service Management" },
  { icon: UserCheck, label: "Customer Management" },
  { icon: Briefcase, label: "Employee Management" },
  { icon: Receipt, label: "Transaction Management" },
  { icon: Settings, label: "Settings" },
];

const metricCards = [
  { title: "Earnings", value: "$21,568.43", icon: BarChart3 },
  { title: "Commission Earnings", value: "$15,565.32", icon: BarChart3 },
  { title: "Total Fee Earning", value: "$200.00", icon: BarChart3 },
  { title: "Provider", value: "1500", icon: BarChart3 },
];

const topProviders = [
  { name: "Emma Cruz", email: "me@example.com", engagements: "1.2M Engagements" },
  { name: "Jackson Magbago", email: "p@example.com", engagements: "1.2M Engagements" },
  { name: "Isabella Nguyen", email: "i@example.com", engagements: "1.2M Engagements" },
  { name: "Sofia Manalo", email: "i@example.com", engagements: "1.2M Engagements" },
];

const recentBookings = [
  { status: "Pending", bookingNo: "BN2025-1234567", amount: "PHP 316.00" },
  { status: "Success", bookingNo: "BN2025-1234567", amount: "PHP 242.00" },
  { status: "Success", bookingNo: "BN2025-1234567", amount: "PHP 316.00" },
];

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 p-4">
          <div className="w-18 h-8 bg-[#2F455C] rounded-2xl flex items-center justify-center px-3">
            <span className="text-[#1DCDFE] font-medium text-sm">chalo</span>
          </div>
          <ChevronLeft className="w-8 h-8 text-white bg-[#21D0B3] rounded-full p-1" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton 
                    asChild 
                    className={item.active ? "text-[#21D0B3]" : "text-[#2F455C]"}
                  >
                    <a href="#">
                      <item.icon className="w-3 h-3" />
                      <span className="text-xs">{item.label}</span>
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

export default function HomePage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50">
        <AppSidebar />
        
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <h1 className="text-xl font-medium text-black">Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-3 h-3 absolute left-3 top-3 text-[#21D0B3]" />
                <Input
                  placeholder="Search"
                  className="w-70 h-8 pl-9 text-xs bg-white border-[#21D0B3] rounded-full"
                />
              </div>
              <Button variant="ghost" size="icon">
                <MessageCircle className="w-6 h-6 text-[#21D0B3]" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="w-6 h-6 text-[#21D0B3]" />
              </Button>
              <div className="flex items-center gap-2 bg-[#E3F5F2] rounded-full px-3 py-1">
                <Avatar className="w-6 h-6">
                  <AvatarFallback className="bg-gray-300"></AvatarFallback>
                </Avatar>
                <ChevronDown className="w-4 h-4 text-[#21D0B3]" />
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6">
            {/* Metric Cards */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              {metricCards.map((card, index) => (
                <Card key={index} className="bg-gradient-to-b from-[#1ECCFE] to-[#1DCFDA] border-0 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-[#F4F7FE] rounded-full flex items-center justify-center">
                        <card.icon className="w-8 h-8 text-[#21D0B3]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{card.title}</p>
                        <p className="text-2xl font-medium">{card.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Chart Section */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-gray-600" />
                  <span className="text-sm text-gray-600">Line Chart</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-sm font-medium text-[#2F455C] mb-2">Earning Statistics</h3>
                    <p className="text-xs text-[#85909B]">Year 2025</p>
                  </div>
                  <div className="flex gap-8">
                    <div className="text-center border-l border-gray-200 pl-8">
                      <p className="text-xs text-[#85909B] mb-1">Total Earnings</p>
                      <p className="text-3xl font-medium text-[#2F455C]">24,828</p>
                    </div>
                    <div className="text-center border-l border-gray-200 pl-8">
                      <p className="text-xs text-[#85909B] mb-1">Admin Commission</p>
                      <p className="text-3xl font-medium text-[#2F455C]">25,010</p>
                    </div>
                  </div>
                </div>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-gray-500">
                    <svg width="100%" height="200" viewBox="0 0 800 200" className="text-[#21D0B3]">
                      <path
                        d="M0,160 Q50,120 100,140 T200,100 T300,80 T400,120 T500,60 T600,100 T700,80 T800,120"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-[#2F455C] mt-4 px-4">
                  <span>Apr 6</span>
                  <span>Apr 11</span>
                  <span>Apr 16</span>
                  <span>Apr 22</span>
                  <span>Apr 28</span>
                  <span>May 4</span>
                  <span>May 9</span>
                  <span>May 15</span>
                  <span>May 21</span>
                  <span>May 27</span>
                  <span>Jun 2</span>
                  <span>Jun 7</span>
                  <span>Jun 12</span>
                  <span>Jun 18</span>
                  <span>Jun 24</span>
                  <span>Jun 30</span>
                </div>
              </CardContent>
            </Card>

            {/* Bottom Section */}
            <div className="grid grid-cols-3 gap-6">
              {/* Top Providers */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Top Providers</CardTitle>
                  <CardDescription>Invite your team members to collaborate.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {topProviders.map((provider, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback className="bg-gray-300"></AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{provider.name}</p>
                          <p className="text-sm text-muted-foreground">{provider.email}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">{provider.engagements}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Bookings */}
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle className="text-base">Recent Bookings</CardTitle>
                  <CardDescription>Manage your Payments.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex gap-4">
                    <Input placeholder="Filter emails..." className="flex-1" />
                    <Button variant="outline" className="flex items-center gap-2">
                      Columns
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-32">Status</TableHead>
                        <TableHead>Booking No.</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        <TableHead className="w-12"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentBookings.map((booking, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Badge 
                              variant="secondary" 
                              className={
                                booking.status === "Pending" 
                                  ? "bg-yellow-100 text-yellow-800" 
                                  : "bg-green-100 text-green-800"
                              }
                            >
                              {booking.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{booking.bookingNo}</TableCell>
                          <TableCell className="text-right font-medium">{booking.amount}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
