import { Inter } from "next/font/google";
import UserLayout from "@/components/layouts/user-layout";
import CustomNavbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <UserLayout>
      <main
        className={inter.className}
      >
        <CustomNavbar />
      </main>
    </UserLayout>
  );
}
