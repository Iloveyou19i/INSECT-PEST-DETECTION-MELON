import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PestsGridItem = ({ id, name, class_name, description, pictures }) => {
  return (
    <Link href={`/pests/${class_name}`}>
      <Card className="flex gap-4">
        <div className="relative h-[120px] aspect-square">
          <Image src={pictures[0].imageUrl} alt="thumbnail" fill />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <h4 className="h4">{name}</h4>
            <span className="text-slate-500 underline">{class_name}</span>
          </div>
          <p>{description}</p>
        </div>
      </Card>
    </Link>
  );
};

export default PestsGridItem;
