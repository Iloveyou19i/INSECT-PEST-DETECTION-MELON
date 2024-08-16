import SignInForm from "@/components/auth/sign-in/SignInForm";
import React from "react";

const page = () => {
  return (
    <>
      <div className="hidden md:block"></div>
      <div className="bg-white flex justify-center items-center">
        <SignInForm />
      </div>
    </>
  );
};

export default page;
