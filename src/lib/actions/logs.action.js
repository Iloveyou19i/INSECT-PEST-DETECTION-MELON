"use server";
import { revalidatePath } from "next/cache";
import prisma from "../prisma";

export const deleteLog = async (id, path) => {
  try {
    await prisma.userLogs.delete({
      where: {
        id,
      },
    });

    revalidatePath(path);
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};
