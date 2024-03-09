import { Inter } from "next/font/google";
import { Button } from "@nextui-org/react";
import UserLayout from "@/components/layouts/user-layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <UserLayout>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div>
          <Button>Click me</Button>
        </div>
      </main>
    </UserLayout>
  );
}
