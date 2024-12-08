import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

export const getTotalUsersCount = async () => {
  try {
    const { user } = await auth();

    if (!user && user?.role !== "admin") throw new Error("Unauthorized access");

    const usersCount = await prisma.user.count();

    return usersCount || 0;
  } catch (error) {
    console.error(error.message);
  }
};

export const getTotalDetectionsCount = async () => {
  try {
    const { user } = await auth();

    if (!user && user?.role !== "admin") throw new Error("Unauthorized access");

    const pestsCount = await prisma.detection.count();

    return pestsCount || 0;
  } catch (error) {
    console.error(error.message);
  }
};

export const getTotalImagesCount = async () => {
  try {
    const { user } = await auth();

    if (!user && user?.role !== "admin") throw new Error("Unauthorized access");

    const imagesCount = await prisma.output.count();

    return imagesCount || 0;
  } catch (error) {
    console.error(error.message);
  }
};

export const getTotalPestsCount = async () => {
  try {
    const { user } = await auth();

    if (!user && user?.role !== "admin") throw new Error("Unauthorized access");

    const pestsCount = await prisma.pest.count();

    return pestsCount || 0;
  } catch (error) {
    console.error(error.message);
  }
};

export const getRecentImages = async () => {
  try {
    const { user } = await auth();

    if (!user && user?.role !== "admin") throw new Error("Unauthorized access");

    const images = await prisma.output.findMany({
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

export const getPestDistrubtion = async () => {
  try {
    const detections = await prisma.detection.findMany();

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

export const getMonthlyPestCountData = async () => {
  try {
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
