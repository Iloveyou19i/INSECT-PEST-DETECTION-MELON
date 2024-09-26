import ImagesLoader from "@/components/loaders/ImagesLoader";
import GridImages from "@/components/root/images/GridImages";
import React, { Suspense } from "react";

const page = () => {
  return (
    <section>
      <h2 className="h2 pb-4">Images</h2>
      <Suspense fallback={<ImagesLoader length={12} />}>
        <GridImages />
      </Suspense>
    </section>
  );
};

export default page;
