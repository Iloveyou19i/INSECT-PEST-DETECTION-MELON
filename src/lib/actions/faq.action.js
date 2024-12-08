"use server";
import { revalidatePath } from "next/cache";
import prisma from "../prisma";

export const addPestFAQ = async (pestId, question, answer) => {
  try {
    await prisma.pestFAQs.create({
      data: {
        pestId,
        question,
        answer,
      },
    });

    revalidatePath(`/admin/pests/${pestId}`);
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

export const deletePestFAQ = async (id, pestId) => {
  try {
    await prisma.pestFAQs.delete({
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
