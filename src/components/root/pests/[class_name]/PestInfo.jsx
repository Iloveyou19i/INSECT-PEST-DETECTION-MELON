import SectionHeader from "@/components/global/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import {
  Cross,
  Info,
  MessageCircleQuestion,
  Shield,
  ShieldCheck,
  ShieldPlus,
} from "lucide-react";
import React from "react";

const PestInfo = ({ description, preventions, treatments, faqs }) => {
  return (
    <div className="flex flex-col gap-4">
      <Card className="flex flex-col gap-2">
        <SectionHeader Icon={Info} label="Description" />
        <p className="text-justify">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{description}
        </p>
      </Card>
      <Card className="flex flex-col gap-2">
        <SectionHeader Icon={ShieldCheck} label="Prevention" />
        <div className="grid grid-cols-[28px_1fr] gap-2 mt-4">
          {preventions.map(({ id, prevention }) => (
            <React.Fragment key={id}>
              <span className="h-7 w-7 bg-yellow-200 rounded-full flex items-center justify-center">
                <Shield className="text-yellow-500 h-4 w-4" />
              </span>
              <p>{prevention}</p>
            </React.Fragment>
          ))}
        </div>
      </Card>
      <Card className="flex flex-col gap-2">
        <SectionHeader Icon={ShieldPlus} label="Treatment" />
        <div className="grid grid-cols-[28px_1fr] gap-2 mt-4">
          {treatments.map(({ id, treatment }) => (
            <React.Fragment key={id}>
              <span className="h-7 w-7 bg-green-200 rounded-full flex items-center justify-center">
                <Cross className="text-green-500 h-4 w-4" />
              </span>
              <p>{treatment}</p>
            </React.Fragment>
          ))}
        </div>
      </Card>
      <Card className="flex flex-col gap-2">
        <SectionHeader Icon={MessageCircleQuestion} label="FAQs" />
        <Accordion type="single" collapsible>
          {faqs.map(({ id, question, answer }) => (
            <AccordionItem key={id} value={id}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </div>
  );
};

export default PestInfo;
