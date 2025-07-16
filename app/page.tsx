import { StatsCards } from "@/components/stats-cards";
import { EarningsChart } from "@/components/earnings-chart";
import { TopProviders } from "@/components/top-providers";
import { RecentBookings } from "@/components/recent-bookings";

export default function Home() {
  return (
    <div className="space-y-6">
      <StatsCards />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <EarningsChart />
        <TopProviders />
      </div>
      
      <RecentBookings />
    </div>
  );
}
