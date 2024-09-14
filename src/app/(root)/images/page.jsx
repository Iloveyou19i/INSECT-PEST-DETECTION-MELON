import GridImages from "@/components/root/images/GridImages";
import ImagesLoader from "@/components/root/images/ImagesLoader";
import React, { Suspense } from "react";

const page = () => {
  return (
    <section>
      <h2 className="h2 pb-4">Images</h2>
      <Suspense fallback={<ImagesLoader />}>
        <GridImages />
      </Suspense>
    </section>
  );
};

export default page;
