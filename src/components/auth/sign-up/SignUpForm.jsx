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
import { LoaderCircle, User } from "lucide-react";
import Link from "next/link";
import { useUploadThing } from "@/lib/uploadthing";
import { isBase64 } from "@/lib/utils";
import { register } from "@/lib/actions/auth.actions";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UserAvatar from "@/components/global/UserAvatar";

const formSchema = z.object({
  profileImg: z.string().min(1, {
    message: "Profile Image is required.",
  }),
  name: z.string().min(1, {
    message: "Name field is required.",
  }),
  email: z
    .string()
    .min(1, {
      message: "Email field is required.",
    })
    .email({ message: "Invalid email." }),
  password: z.string().min(8, {
    message: "Password must be more than 8 characters.",
  }),
});

const SignUpForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState([]);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      profileImg: "",
      name: "",
      email: "",
      password: "",
    },
  });
  const { startUpload, isUploading } = useUploadThing("profileImg");
  const router = useRouter();

  const handleImageUpload = (e, fieldChange) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (!e.target?.files || e.target.files.length === 0) return;

    setFiles(e.target.files);
    const file = e.target.files[0];

    if (!file.type.includes("image")) return;

    fileReader.onload = async (event) => {
      const imageUrl = event.target.result.toString() || "";

      fieldChange(imageUrl);
    };

    fileReader.readAsDataURL(file);
  };

  const onSubmit = async (values) => {
    try {
      setIsSubmitting(true);

      if (isBase64(values.profileImg)) {
        const image = [...files];

        const imageRes = await startUpload(image);

        if (!imageRes) throw new Error("Error uploading image");

        values.profileImg = imageRes[0].url;
      }

      await register(values);

      toast.success("Account created successfully");
      router.push("/sign-in");
    } catch (error) {
      console.error(error.message);
      toast.error("Error creating account");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-[90%] md:w-[70%] flex flex-col items-center gap-8">
      <div className="w-full flex flex-col items-center gap-4 mb-8">
        <Image src="/logo.png" alt="Logo" height={120} width={120} />
        <h2 className="h2 text-center">Create Your Account</h2>
        {/* <p className="sub-text text-center">Lorem ipsum dolor sit amet.</p> */}
      </div>
      <div className="w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="profileImg"
              render={({ field }) => (
                <FormItem className="flex items-center gap-4">
                  <div>
                    <FormLabel className="avatar-container">
                      <UserAvatar img={field.value} size="md" />
                    </FormLabel>
                  </div>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      placeholder="Upload your profile"
                      // {...field}
                      onChange={(e) => handleImageUpload(e, field.onChange)}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Full Name"
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
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
                      type="password"
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
                "Register"
              )}
            </Button>
          </form>
        </Form>
      </div>
      <div>
        <p className="sub-text text-center">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-black hover:underline transition-all"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
