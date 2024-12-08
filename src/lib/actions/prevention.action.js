"use server";
import { revalidatePath } from "next/cache";
import prisma from "../prisma";
import { auth } from "../auth";

export const addPestPrevention = async (pestId, prevention) => {
  try {
    await prisma.pestPreventions.create({
      data: {
        pestId,
        prevention,
      },
    });

    revalidatePath(`/admin/pests/${pestId}`);
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

export const deletePestPrevention = async (id, pestId) => {
  try {
    const { user } = await auth();

    if (!user) throw new Error("Unauthorized user");

    await prisma.pestPreventions.delete({
      where: {
        id,
      },
    });

    revalidatePath(`/admin/pests/${pestId}`);
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};
