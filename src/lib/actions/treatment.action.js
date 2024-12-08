"use server";
import { revalidatePath } from "next/cache";
import prisma from "../prisma";

export const addPestTreatment = async (pestId, treatment) => {
  try {
    await prisma.pestTreatments.create({
      data: {
        pestId,
        treatment,
      },
    });

    revalidatePath(`/admim/pests/${pestId}`);
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

export const deletePestTreatment = async (id, pestId) => {
  try {
    await prisma.pestTreatments.delete({
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
