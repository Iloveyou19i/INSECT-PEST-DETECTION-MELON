import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

export const getUserPestsCount = async () => {
  try {
    const { user } = await auth();

    if (!user) throw new Error("Unauthorized access");

    const pestsCount = await prisma.detection.count({
      where: {
        userId: user?.id,
      },
    });

    return pestsCount || 0;
  } catch (error) {
    console.error(error.message);
  }
};

export const getUserImagesCount = async () => {
  try {
    const { user } = await auth();

    if (!user) throw new Error("Unauthorized access");

    const imagesCount = await prisma.output.count({
      where: {
        userId: user?.id,
      },
    });

    return imagesCount || 0;
  } catch (error) {
    console.error(error.message);
  }
};

export const getUserRecentImages = async () => {
  try {
    const { user } = await auth();

    if (!user && user?.role !== "admin") throw new Error("Unauthorized access");

    const images = await prisma.output.findMany({
      where: {
        userId: user?.id,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 4,
    });

    return images;
  } catch (error) {
    console.error(error.message);
  }
};

export const getUserPestDistrubtion = async () => {
  try {
    const { user } = await auth();

    if (!user) throw new Error("User unauthorized");

    const detections = await prisma.detection.findMany({
      where: {
        userId: user.id,
      },
    });

    const formattedData = Object.values(
      detections.reduce((acc, { class: className }) => {
        if (!acc[className]) {
          acc[className] = { pest: className, count: 0 };
        }
        acc[className].count += 1;
        acc[className].fill = `var(--color-${className})`;
        return acc;
      }, {})
    );

    return formattedData;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

export const getUserMonthlyPestCountData = async () => {
  try {
    const { user } = await auth();

    if (!user) throw new Error("User unauthorized");

    const yearlyData = [
      { month: "January", pests: 0 },
      { month: "February", pests: 0 },
      { month: "March", pests: 0 },
      { month: "April", pests: 0 },
      { month: "May", pests: 0 },
      { month: "June", pests: 0 },
      { month: "July", pests: 0 },
      { month: "August", pests: 0 },
      { month: "September", pests: 0 },
      { month: "October", pests: 0 },
      { month: "November", pests: 0 },
      { month: "December", pests: 0 },
    ];

    const currentYear = new Date().getFullYear();

    for (let i = 0; i < yearlyData.length; i++) {
      const startDate = new Date(currentYear, i, 1); // First day of the month
      const endDate = new Date(currentYear, i + 1, 0, 23, 59, 59, 999);

      const count = await prisma.detection.count({
        where: {
          userId: user.id,
          createdAt: {
            gte: startDate,
            lte: endDate,
          },
        },
      });

      yearlyData[i].pests = count;
    }

    return yearlyData;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};
