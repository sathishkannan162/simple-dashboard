"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { ChevronDown, MoreHorizontal } from "lucide-react";

const bookings = [
  {
    id: "BN2025-1234567",
    status: "Pending",
    statusColor: "text-yellow-600 bg-yellow-50",
    amount: "PHP 316.00",
  },
  {
    id: "BN2025-1234567",
    status: "Success",
    statusColor: "text-green-600 bg-green-50",
    amount: "PHP 242.00",
  },
  {
    id: "BN2025-1234567",
    status: "Success",
    statusColor: "text-green-600 bg-green-50",
    amount: "PHP 316.00",
  },
];

export function RecentBookings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Bookings</CardTitle>
        <p className="text-sm text-gray-500">Manage your Payments.</p>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center justify-between">
          <Input 
            placeholder="Filter emails..." 
            className="max-w-sm"
          />
          <Button variant="outline" className="ml-auto">
            Columns
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">
                  <Checkbox />
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Booking No.</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${booking.statusColor}`}>
                      {booking.status}
                    </span>
                  </TableCell>
                  <TableCell className="font-medium">{booking.id}</TableCell>
                  <TableCell className="text-right">{booking.amount}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}