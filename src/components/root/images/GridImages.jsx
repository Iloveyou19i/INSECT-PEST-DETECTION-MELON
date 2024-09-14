import React from "react";
import InfiniteScrollImages from "./InfiniteScrollImages";
import { getOutputs } from "@/lib/actions/output.action";

const GridImages = async () => {
  const { data, hasNextPage } = await getOutputs(1, 12);

  return (
    <section className="">
      <InfiniteScrollImages data={data} hasNextPage={hasNextPage} />
    </section>
  );
};

export default GridImages;
