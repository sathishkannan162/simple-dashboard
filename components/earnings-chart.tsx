"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Apr 6', value: 8000 },
  { date: 'Apr 11', value: 12000 },
  { date: 'Apr 16', value: 6000 },
  { date: 'Apr 22', value: 15000 },
  { date: 'Apr 28', value: 18000 },
  { date: 'May 4', value: 22000 },
  { date: 'May 9', value: 14000 },
  { date: 'May 15', value: 25000 },
  { date: 'May 21', value: 8000 },
  { date: 'May 27', value: 20000 },
  { date: 'Jun 2', value: 24000 },
  { date: 'Jun 7', value: 16000 },
  { date: 'Jun 12', value: 28000 },
  { date: 'Jun 18', value: 30000 },
  { date: 'Jun 24', value: 18000 },
  { date: 'Jun 30', value: 26000 },
];

export function EarningsChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold">Earning Statistics</CardTitle>
            <p className="text-sm text-gray-500">Year 2025</p>
          </div>
          <div className="flex gap-8">
            <div className="text-right">
              <p className="text-sm text-gray-500">Total Earnings</p>
              <p className="text-2xl font-bold">24,828</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Admin Commission</p>
              <p className="text-2xl font-bold">25,010</p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis 
                dataKey="date" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6b7280' }}
              />
              <YAxis hide />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#06b6d4" 
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: '#06b6d4' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}