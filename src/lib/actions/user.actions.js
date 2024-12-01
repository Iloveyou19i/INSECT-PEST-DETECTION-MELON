"use server";

import { revalidatePath } from "next/cache";
import prisma from "../prisma";

export const updateUser = async (id, name, email, profileImg, role, path) => {
  try {
    await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        profileImg,
        role,
      },
    });
    revalidatePath(path);
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

export const updateLogs = async (id) => {
  try {
    console.log("hello");

    await prisma.user.update({
      where: {
        id,
      },
      data: {
        logs: {
          create: {
            description: "User logged in",
          },
        },
      },
    });
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

export const deleteUser = async (id) => {
  try {
    await prisma.user.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};
