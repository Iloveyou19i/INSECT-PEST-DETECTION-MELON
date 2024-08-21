import Credentials from "next-auth/providers/credentials";
import prisma from "./prisma";
import bcrypt from "bcryptjs";
import z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must have at least 8 characters" }),
});

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = loginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await prisma.user.findUnique({
            where: {
              email,
            },
          });

          if (!user) return null;

          const isPasswordMatched = await bcrypt.compare(
            password,
            user.password
          );

          if (isPasswordMatched)
            return {
              ...user,
              image: user.profileImg,
            };
        }

        return null;
      },
    }),
  ],
};
