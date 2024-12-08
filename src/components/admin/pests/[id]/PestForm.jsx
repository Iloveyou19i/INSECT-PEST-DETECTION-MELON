"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoaderCircle, PlusCircle } from "lucide-react";
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { updatePest, updatePictures } from "@/lib/actions/pest.action";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import toast from "react-hot-toast";
import { UploadDropzone } from "@/lib/uploadthing";
import PestAsset from "./PestAsset";
import PestPrevention from "./PestPrevention";
import PestTreatment from "./PestTreatment";
import {
  addPestTreatment,
  deletePestTreatment,
} from "@/lib/actions/treatment.action";
import {
  addPestPrevention,
  deletePestPrevention,
} from "@/lib/actions/prevention.action";
import { addPestFAQ, deletePestFAQ } from "@/lib/actions/faq.action";
import PestFAQ from "./PestFAQ";

const pictureSchema = z.object({
  imageUrl: z.string(),
});

const formSchema = z.object({
  name: z.string().min(1, { message: "Name field required" }),
  class_name: z.string().min(1, { message: "Class name field required" }),
  description: z.string().min(1, { message: "Name field required" }),
  pictures: z
    .array(pictureSchema)
    .nonempty({ message: "Atleast 1 picture is required" }),
});

const PestForm = ({
  id,
  name,
  class_name,
  description,
  pictures,
  treatments,
  preventions,
  faqs,
}) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name || "",
      class_name: class_name || "",
      description: description || "",
      pictures: pictures || [],
      treatments: "",
      preventions: "",
      question: "",
      answer: "",
    },
  });

  const addTreatment = async (treatment) => {
    try {
      await addPestTreatment(id, treatment);
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  };

  const deleteTreatment = async (index, id, pestId) => {
    try {
      await deletePestTreatment(id, pestId);
    } catch (error) {
      console.error(error.message);
    }
  };

  const addPrevention = async (prevention) => {
    try {
      await addPestPrevention(id, prevention);
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  };

  const deletePrevention = async (index, id, pestId) => {
    try {
      await deletePestPrevention(id, pestId);
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  };

  const addFAQ = async () => {
    try {
      if (question && answer) {
        await addPestFAQ(id, question, answer);
      }
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  };

  const deleteFAQ = async (id, pestId) => {
    try {
      await deletePestFAQ(id, pestId);
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  };

  const onSubmit = async (values) => {
    try {
      setIsSubmitting(true);

      await updatePest(id, values.name, values.class_name, values.description);

      toast.success("Pest updated successfully");
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g White Fly"
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="class_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Class Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g White Fly"
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g This pest ..."
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="treatments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Treatments</FormLabel>
                  <div className="flex flex-col gap-4">
                    {treatments?.map(({ id, pestId, treatment }, i) => (
                      <PestTreatment
                        key={i}
                        i={i}
                        id={id}
                        pestId={pestId}
                        treatment={treatment}
                        deleteTreatment={deleteTreatment}
                      />
                    ))}
                  </div>
                  <div className="flex flex-col gap-4">
                    <Textarea
                      placeholder="e.g First, you need to ..."
                      disabled={isSubmitting}
                      {...field}
                    />
                    <Button
                      type="button"
                      size="sm"
                      onClick={() => addTreatment(field.value)}
                    >
                      Add
                      <PlusCircle className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="preventions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preventions</FormLabel>
                  <div className="flex flex-col gap-4">
                    {preventions.map(({ id, pestId, prevention }, i) => (
                      <PestPrevention
                        key={i}
                        i={i}
                        id={id}
                        pestId={pestId}
                        prevention={prevention}
                        deletePrevention={deletePrevention}
                      />
                    ))}
                  </div>
                  <div className="flex flex-col gap-4">
                    <Textarea
                      placeholder="e.g Avoid doing ..."
                      disabled={isSubmitting}
                      {...field}
                    />
                    <Button
                      type="button"
                      size="sm"
                      onClick={() => addPrevention(field.value)}
                    >
                      Add
                      <PlusCircle className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-4">
            <FormLabel>FAQs</FormLabel>
            <div className="flex flex-col gap-2">
              {faqs.map(({ id, pestId, question, answer }) => (
                <PestFAQ
                  key={id}
                  id={id}
                  pestId={pestId}
                  question={question}
                  answer={answer}
                  deleteFAQ={deleteFAQ}
                />
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <FormLabel>Question</FormLabel>
              <Input
                placeholder="e.g What should I do...?"
                onChange={(e) => setQuestion(e.target.value)}
              />
              <FormLabel>Answer</FormLabel>
              <Textarea
                placeholder="e.g You can do this..."
                onChange={(e) => setAnswer(e.target.value)}
              />
              <Button
                size="sm"
                type="button"
                onClick={addFAQ}
                disabled={!question && !answer}
              >
                Add <PlusCircle className="h-4 w-4 ml-2" />
              </Button>
            </div>
            <FormField
              control={form.control}
              name="pictures"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pictures</FormLabel>
                  <div className="flex flex-col gap-2">
                    {pictures.map((picture, i) => (
                      <React.Fragment key={picture.id}>
                        <PestAsset
                          id={picture.id}
                          idx={i}
                          imageUrl={picture.imageUrl}
                          pestId={id}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                  <UploadDropzone
                    className="w-full aspect-video bg-slate-100 ut-label:text-primary ut-allowed-content:ut-uploading:text-primary ut-button:bg-primary ut-button:ut-readying:bg-primary/50 ut-button:ut-uploading:bg-primary/50 ut-button:ut-readying:bg-primary-50"
                    endpoint="pestPictures"
                    onClientUploadComplete={async (res) => {
                      if (res) {
                        const pestPictures = res.map(({ url }) => {
                          return { imageUrl: url };
                        });

                        await updatePictures(id, pestPictures);
                        toast.success("Pictures updated");
                      }
                    }}
                  />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && (
              <LoaderCircle className="h-4 w-4 mr-2 animate-spin" />
            )}
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PestForm;
