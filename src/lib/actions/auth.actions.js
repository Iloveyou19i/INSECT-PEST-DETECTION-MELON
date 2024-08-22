"use server";
import { signIn } from "../auth";
import prisma from "../prisma";
import bcrypt from "bcryptjs";

export const register = async (values) => {
  try {
    const { name, email, password, profileImg } = values;

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) throw new Error("User already exists");

    const hashPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
        profileImg,
      },
    });
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const login = async (values) => {
  const { email, password } = values;

  try {
    await signIn("credentials", {
      email,
      password,
    });
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};
