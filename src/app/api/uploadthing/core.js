import { auth } from "@/lib/auth";
import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

const handleAuth = async () => {
  const { user } = await auth();

  if (!user) throw new Error("User unauthorized");

  return { id: user.id };
};

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  profileImg: f({
    image: { maxFileCount: 1, maxFileSize: "4MB" },
  }).onUploadComplete(() => {}),
  pestImage: f({ image: { maxFileCount: 1, maxFileSize: "4MB" } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  pestPictures: f({ image: { maxFileCount: 5, maxFileSize: "4MB" } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
};
