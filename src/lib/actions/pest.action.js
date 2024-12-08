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

export const updatePest = async (id, name, class_name, description) => {
  try {
    const { user } = await auth();

    if (!user) throw new Error("Unauthorized user.");

    await prisma.pest.update({
      where: { id },
      data: {
        name,
        class_name,
        description,
        author: user.id,
      },
    }),
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

export const updatePictures = async (id, pictures) => {
  try {
    await prisma.pest.update({
      where: {
        id,
      },
      data: {
        pictures: {
          create: pictures,
        },
      },
    });

    revalidatePath(`/admin/pests/${id}`);
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

export const deletePicture = async (id, pictureId) => {
  try {
    await prisma.pest.update({
      where: {
        id,
      },
      data: {
        pictures: {
          deleteMany: [{ id: pictureId }],
        },
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
