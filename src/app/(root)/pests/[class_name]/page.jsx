import PestImages from "@/components/root/pests/[class_name]/PestImages";
import PestInfo from "@/components/root/pests/[class_name]/PestInfo";
import prisma from "@/lib/prisma";
import React from "react";

const page = async ({ params }) => {
  const {
    id,
    name,
    class_name,
    description,
    pictures,
    preventions,
    treatments,
    faqs,
  } = await prisma.pest.findUnique({
    where: {
      class_name: params.class_name,
    },
    include: {
      pictures: true,
      preventions: true,
      treatments: true,
      faqs: true,
    },
  });

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col">
        <h2 className="h2">{name}</h2>
        <span className="text-slate-500 underline">{class_name}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="sticky top-0">
          <PestImages pictures={pictures} />
        </div>
        <PestInfo
          description={description}
          preventions={preventions}
          treatments={treatments}
          faqs={faqs}
        />
      </div>
    </section>
  );
};

export default page;
