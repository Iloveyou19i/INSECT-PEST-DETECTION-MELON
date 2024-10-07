import prisma from "@/lib/prisma";
import React from "react";
import PestsGridItem from "./PestsGridItem";

const PestsGrid = async () => {
  const pests = await prisma.pest.findMany({
    where: {
      isPublished: true,
    },
    include: {
      pictures: true,
    },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {pests.map(({ id, name, class_name, description, pictures }) => (
        <PestsGridItem
          key={id}
          id={id}
          name={name}
          class_name={class_name}
          description={description}
          pictures={pictures}
        />
      ))}
    </div>
  );
};

export default PestsGrid;
