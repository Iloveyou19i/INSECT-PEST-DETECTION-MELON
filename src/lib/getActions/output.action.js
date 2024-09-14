import { auth } from "../auth";
import prisma from "../prisma";

export const getOutputs = async (page, limit) => {
  try {
    const { user } = await auth();

    if (!user) throw new Error("User unauthorized");

    const outputsCount = (await getOutputsCount()) || 1;
    const skip = (page - 1) * limit;

    const outputs = await prisma.output.findMany({
      where: {
        userId: user.id,
      },
      include: {
        detections: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: limit,
      skip,
    });

    const hasNextPage = skip + limit < outputsCount;

    return { data: outputs, hasNextPage };
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

export const getOutput = async (id) => {
  try {
    const { user } = await auth();

    if (!user) throw new Error("User unauthorized");

    const output = await prisma.output.findUnique({
      where: {
        id: id,
        userId: user.id,
      },
      include: {
        detections: true,
      },
    });

    return output;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

export const getOutputsCount = async (userId) => {
  try {
    const count = await prisma.output.count({
      where: {
        userId,
      },
    });

    return count;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
