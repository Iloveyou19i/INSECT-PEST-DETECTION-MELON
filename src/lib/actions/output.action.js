"use server";
import { revalidatePath } from "next/cache";
import { auth } from "../auth";
import prisma from "../prisma";

export const addOutput = async (output) => {
  try {
    const { user } = await auth();

    if (!user) throw new Error("User unauthorized");

    const { image, time, detections } = output;

    const res = await prisma.output.create({
      data: {
        userId: user.id,
        image,
        time,
        detections: {
          create: detections,
        },
      },
    });

    if (!res) throw new Error("There was an error in saving the output.");

    revalidatePath("/images");
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteOutput = async (id) => {
  try {
    const { user } = await auth();

    if (!user) throw new Error("User unauthorized");

    await prisma.output.delete({
      where: {
        id,
      },
      include: {
        detections: true,
      },
    });

    revalidatePath("/images");
  } catch (error) {
    console.error(error.message);
  }
};
