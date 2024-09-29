import PestForm from "@/components/admin/pests/[id]/PestForm";
import PestHeader from "@/components/admin/pests/[id]/PestHeader";
import prisma from "@/lib/prisma";
import React from "react";

const page = async ({ params }) => {
  const { id, name, description, author, isPublished, pictures } =
    await prisma.pest.findUnique({
      where: {
        id: params.id,
      },
      include: {
        pictures: true,
      },
    });

  return (
    <section className="flex flex-col gap-4">
      <PestHeader id={id} name={name} isPublished={isPublished} />
      <PestForm id={id} name={name} description={description} />
    </section>
  );
};

export default page;
