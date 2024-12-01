import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";

export const getUserPestsCount = async () => {
  try {
    const { user } = await auth();

    if (!user) throw new Error("Unauthorized access");

    const pestsCount = await prisma.detection.count();

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
        createdAt: "asc",
      },
      take: 4,
    });

    return images;
  } catch (error) {
    console.error(error.message);
  }
};
