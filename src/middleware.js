import NextAuth from "next-auth";
import authConfig from "./lib/auth.config";

const { auth } = NextAuth(authConfig);

const authRoutes = ["/sign-in", "/sign-up"];

const userRoutes = ["/", "/images", "/detection"];

const adminRoutes = ["/admin"];

export default auth(async (req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith("/api/auth");
  const isUserRoute = userRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isAdminRoute = adminRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) return null;

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL("/", nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && isUserRoute) {
    return Response.redirect(new URL("/sign-in", nextUrl));
  }

  // verify isAdmin here
  if (!isLoggedIn && isAdminRoute) {
    return Response.redirect(new URL("/", nextUrl));
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
