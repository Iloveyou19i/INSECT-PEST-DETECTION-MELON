"use server";
import { auth } from "../auth";
import prisma from "../prisma";
import { revalidatePath } from "next/cache";

export const addPest = async (name) => {
  try {
    const { user } = await auth();

    if (!user && !user.role !== "admin") throw new Error("User unauthorized");

    const pest = await prisma.pest.create({
      data: {
        name,
        author: user.id,
      },
    });

    return pest;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

export const updatePest = async (id, name, description) => {
  try {
    await prisma.pest.update({
      where: {
        id,
      },
      data: {
        name,
        description,
      },
    });

    revalidatePath(`/admin/pests/${id}`);
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

export const updatePestStatus = async (id, status) => {
  try {
    await prisma.pest.update({
      where: {
        id,
      },
      data: {
        isPublished: status,
      },
    });

    revalidatePath(`/admin/pests/${id}`);
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

export const deletePest = async (id) => {
  try {
    await prisma.pest.delete({
      where: {
        id,
      },
    });

    return { status: "success" };
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};
