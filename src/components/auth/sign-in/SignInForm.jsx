"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import Image from "next/image";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().min(1, {
    message: "Email field is required.",
  }),
  password: z.string().min(1, {
    message: "Password field is required.",
  }),
});

const SignInForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values) {
    try {
      setIsSubmitting(true);
      console.log(values);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-[90%] md:w-[70%] flex flex-col items-center gap-8">
      <div className="w-full flex flex-col items-center gap-4 mb-8">
        <Image src="./logo.svg" alt="Logo" height={70} width={140} />
        <h2 className="h2 text-center">Login Your Account</h2>
        <p className="sub-text text-center">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Password"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <LoaderCircle className="h-5 w-5 animate-spin" />
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </div>
      <div>
        <p className="sub-text text-center">
          Don't have an account?{" "}
          <Link
            href="/sign-up"
            className="text-black hover:underline transition-all"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
