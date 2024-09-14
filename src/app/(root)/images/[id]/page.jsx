import OutputView from "@/components/root/images/[id]/OutputView";
import { getOutput } from "@/lib/getActions/output.action";
import { ChevronRight } from "lucide-react";
import React from "react";

const page = async ({ params }) => {
  const output = await getOutput(params.id);

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <h2 className="h2">Images </h2>
        <ChevronRight className="" />
        <span className="h2 text-slate-500 truncate">{params.id}</span>
      </div>
      <OutputView output={output} />
    </section>
  );
};

export default page;
