import OutputView from "@/components/root/images/[id]/OutputView";
import prisma from "@/lib/prisma";
import React from "react";

const page = async ({ params }) => {
  const output = await prisma.output.findUnique({
    where: {
      id: params.id,
    },
    include: {
      detections: true,
    },
  });

  return (
    <section className="flex flex-col gap-4">
      <h2 className="h2">Output</h2>
      <OutputView output={output} />
    </section>
  );
};

export default page;
