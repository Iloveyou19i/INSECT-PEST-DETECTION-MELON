import SignUpForm from "@/components/auth/sign-up/SignUpForm";

const page = () => {
  return (
    <>
      <div className="hidden md:block"></div>
      <div className="bg-white flex justify-center items-center">
        <SignUpForm />
      </div>
    </>
  );
};

export default page;
