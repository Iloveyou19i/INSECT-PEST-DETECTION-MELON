import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import authConfig from "@/lib/auth.config";
import prisma from "./prisma";
import { getUserById } from "./getActions/user.action";

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async jwt({ token, user, profile }) {
      if (token) {
        const user = await getUserById(token.sub);

        console.log(user);

        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session) {
        session.user.id = token.sub;
        session.user.role = token.role;
      }

      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
  secret: process.env.AUTH_SECRET,
});
