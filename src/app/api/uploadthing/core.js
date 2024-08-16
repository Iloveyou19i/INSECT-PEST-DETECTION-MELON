import { createUploadthing } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const handleAuth = async () => {
  console.log("Auth");
};

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  profileImg: f({
    image: { maxFileCount: 1, maxFileSize: "4MB" },
  }).onUploadComplete(() => {}),
};
