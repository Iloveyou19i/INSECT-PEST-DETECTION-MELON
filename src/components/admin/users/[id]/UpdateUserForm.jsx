"use client";
import SelectInput from "@/components/global/SelectInput";
import UserAvatar from "@/components/global/UserAvatar";
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
import { updateUser } from "@/lib/actions/user.actions";
import { useUploadThing } from "@/lib/uploadthing";
import { isBase64 } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

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
  role: z.string().min(1, {
    message: "Role field is required.",
  }),
});

const roleItems = [
  {
    label: "User",
    value: "user",
  },
  {
    label: "Admin",
    value: "admin",
  },
];

const UpdateUserForm = ({ user }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [files, setFiles] = useState([]);
  const { startUpload, isUploading } = useUploadThing("profileImg");
  const form = useForm({
    resolvers: zodResolver(formSchema),
    defaultValues: {
      profileImg: user.profileImg || "",
      name: user.name || "",
      email: user.email || "",
      role: user.role || "",
    },
  });

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

        console.log(imageRes);

        values.profileImg = imageRes[0].url;
      }

      const { name, email, profileImg, role } = values;

      await updateUser(
        user.id,
        name,
        email,
        profileImg,
        role,
        `/admin/users/${user.id}`
      );
      toast.success("User updated successfully");
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div>
            <FormField
              control={form.control}
              name="profileImg"
              render={({ field }) => (
                <FormItem className="flex flex-col md:flex-row items-center gap-4">
                  <FormLabel className="avatar-container">
                    <UserAvatar img={field.value} size="md" />
                  </FormLabel>
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
          </div>
          <div className="w-full flex flex-col gap-4">
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
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <SelectInput
                      label="Select role"
                      items={roleItems}
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button size="sm" disabled={isSubmitting}>
              {isSubmitting && (
                <LoaderCircle className="h-4 w-4 mr-2 animate-spin" />
              )}
              Update Profile
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default UpdateUserForm;
