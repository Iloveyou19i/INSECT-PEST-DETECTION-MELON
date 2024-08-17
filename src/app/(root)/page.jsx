import Hero from "@/components/root/home/Hero";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();

  return (
    <>
      {JSON.stringify(session)}
      <Hero />
    </>
  );
}
