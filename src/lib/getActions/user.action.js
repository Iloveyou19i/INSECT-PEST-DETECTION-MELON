import prisma from "../prisma";

export const getUserById = async (id) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) throw new Error("User not found");

    return user;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};
