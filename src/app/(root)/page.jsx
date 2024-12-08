import CardComponent from "@/components/global/CardComponent";
import { Bug, Image } from "lucide-react";
import PieChartCard from "@/components/global/PieChartCard";
import BarChartCard from "@/components/global/BarChartCard";
import RecentImages from "@/components/global/RecentImages";
import {
  getUserImagesCount,
  getUserMonthlyPestCountData,
  getUserPestDistrubtion,
  getUserPestsCount,
  getUserRecentImages,
} from "@/lib/getActions/user/dashboard";

export default async function Home() {
  const pestDistributionData = await getUserPestDistrubtion();
  const monthlyPestsCountData = await getUserMonthlyPestCountData();

  return (
    <section className="flex flex-col gap-4">
      <h2 className="h2 pb-4">Dashboard</h2>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CardComponent
            label="Total Pests"
            icon={<Bug />}
            getCount={getUserPestsCount}
          />
          <CardComponent
            label="Total Images"
            icon={<Image />}
            getCount={getUserImagesCount}
          />
        </div>
        <RecentImages
          getRecentImages={getUserRecentImages}
          parentLink="/images"
        />
        <h3 className="text-lg font-semibold">Analytics</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <PieChartCard chartData={pestDistributionData} />
          <BarChartCard chartData={monthlyPestsCountData} />
        </div>
      </div>
    </section>
  );
}
