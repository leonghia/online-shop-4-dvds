import { Inter } from "next/font/google";
import Layout from "@/components/layouts/layout";
import Test from "./test";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <main
        className={inter.className}
      >
        <Test />
      </main>
    </Layout>
  );
}
