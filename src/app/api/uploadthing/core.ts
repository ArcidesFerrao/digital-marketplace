import { createUploadthing, type FileRouter } from "uploadthing/next";


const f = createUploadthing();


export const ourFileRouter = {
  
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    .onUploadComplete(async ({ file }) => {
      console.log("file url", file.url);
      return { url: file.url };
    }),
  
  pdfUploader: f({
    pdf: {
      maxFileSize: "16MB",
      maxFileCount: 1,
    },
  })
    .onUploadComplete(async ({ file }) => {
      console.log("pdf url", file.ufsUrl);
      return { url: file.ufsUrl };
    }),

  zipUploader: f({
    blob: {
      maxFileSize: "16MB",
      maxFileCount: 1,
    }
  })
    .onUploadComplete(async ({ file }) => {
      console.log("zip url", file.ufsUrl);
      return { url: file.ufsUrl };
    }),

} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
