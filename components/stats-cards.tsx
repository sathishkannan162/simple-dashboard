"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Earnings",
    value: "$21,568.43",
    bgColor: "bg-cyan-400",
  },
  {
    title: "Commission Earnings",
    value: "$15,565.32",
    bgColor: "bg-cyan-400",
  },
  {
    title: "Total Fee Earning",
    value: "$200.00",
    bgColor: "bg-cyan-400",
  },
  {
    title: "Provider",
    value: "1500",
    bgColor: "bg-cyan-400",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((stat, index) => (
        <Card key={index} className={`${stat.bgColor} text-white border-0`}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm font-medium mb-1">
                  {stat.title}
                </p>
                <h3 className="text-2xl font-bold text-white">
                  {stat.value}
                </h3>
              </div>
              <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}