"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const providers = [
  {
    name: "Emma Cruz",
    email: "me@example.com",
    engagements: "12M Engagements",
    avatar: "/placeholder-avatar.png",
    initials: "EC",
  },
  {
    name: "Jackson Magbago",
    email: "p@example.com",
    engagements: "12M Engagements",
    avatar: "/placeholder-avatar.png",
    initials: "JM",
  },
  {
    name: "Isabella Nguyen",
    email: "i@example.com",
    engagements: "12M Engagements",
    avatar: "/placeholder-avatar.png",
    initials: "IN",
  },
  {
    name: "Sofia Manalo",
    email: "i@example.com",
    engagements: "12M Engagements",
    avatar: "/placeholder-avatar.png",
    initials: "SM",
  },
];

export function TopProviders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Top Providers</CardTitle>
        <p className="text-sm text-gray-500">Invite your team members to collaborate.</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {providers.map((provider, index) => (
            <div key={index} className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={provider.avatar} alt={provider.name} />
                <AvatarFallback className="bg-gray-100 text-gray-600">
                  {provider.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium text-sm">{provider.name}</p>
                <p className="text-xs text-gray-500">{provider.email}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">{provider.engagements}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}