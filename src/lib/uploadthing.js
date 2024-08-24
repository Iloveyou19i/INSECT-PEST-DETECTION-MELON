import { generateUploadDropzone } from "@uploadthing/react";
import { generateReactHelpers } from "@uploadthing/react/hooks";

export const { useUploadThing, uploadFiles } = generateReactHelpers();

export const UploadDropzone = generateUploadDropzone();
