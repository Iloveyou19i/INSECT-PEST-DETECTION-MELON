import DashboardUsers from "@/components/admin/dashboard/DashboardUsers";
import BarChartCard from "@/components/global/BarChartCard";
import CardComponent from "@/components/global/CardComponent";
import PieChartCard from "@/components/global/PieChartCard";
import RecentImages from "@/components/global/RecentImages";
import { auth } from "@/lib/auth";
import { Bug, Image, ScanSearch, User } from "lucide-react";
import {
  getTotalUsersCount,
  getTotalImagesCount,
  getTotalDetectionsCount,
  getTotalPestsCount,
  getRecentImages,
  getPestDistrubtion,
  getMonthlyPestCountData,
} from "@/lib/getActions/admin/dashboard";

const page = async () => {
  const { user } = await auth();

  if (user?.role !== "admin") redirect("/");

  const pestDistributionData = await getPestDistrubtion();

  const monthlyPestsCount = await getMonthlyPestCountData();

  return (
    <section className="flex flex-col gap-4">
      <h2 className="h2 pb-4">Admin Dashboard</h2>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <CardComponent
            label="Total Users"
            icon={<User />}
            getCount={getTotalUsersCount}
          />
          <CardComponent
            label="Total Images"
            icon={<Image />}
            getCount={getTotalImagesCount}
          />
          <CardComponent
            label="Total Detections"
            icon={<ScanSearch />}
            getCount={getTotalDetectionsCount}
          />
          <CardComponent
            label="Total Pests"
            icon={<Bug />}
            getCount={getTotalPestsCount}
          />
        </div>
        <RecentImages
          getRecentImages={getRecentImages}
          parentLink="/admin/outputs"
        />
        <h3 className="text-lg font-semibold">Analytics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* <PieChartCard />
          <BarChartCard /> */}
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Recent Users</h3>
          <DashboardUsers />
        </div>
      </div>
    </section>
  );
};

export default page;
