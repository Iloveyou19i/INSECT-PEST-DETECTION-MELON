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
        createdAt: "asc",
      },
      take: 4,
    });

    return images;
  } catch (error) {
    console.error(error.message);
  }
};
