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
import { LoaderCircle } from "lucide-react";
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { updatePest, updatePictures } from "@/lib/actions/pest.action";
import toast from "react-hot-toast";
import { UploadDropzone } from "@/lib/uploadthing";
import PestAsset from "./PestAsset";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name field required" }),
  class_name: z.string().min(1, { message: "Class name field required" }),
  description: z.string().min(1, { message: "Name field required" }),
  pictures: z
    .array(
      z.object({
        imageUrl: z.string(),
      })
    )
    .nonempty({ message: "Atleast 1 picture is required" }),
  treatments: z
    .array(
      z.object({
        treatment: z.string(),
      })
    )
    .nonempty({ message: "Atleast 1 treatment is required" }),
  prevention: z
    .array(
      z.object({
        prevention: z.string(),
      })
    )
    .nonempty({ message: "Atleast 1 prevention is required" }),
});

const PestForm = ({
  id,
  name,
  class_name,
  description,
  pictures,
  treatments,
  preventions,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name || "",
      class_name: class_name || "",
      description: description || "",
      pictures: pictures || [],
      treatments: treatments || [],
      preventions: preventions || [],
    },
  });

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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-4">
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
