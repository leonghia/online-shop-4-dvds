import Hero from "@/components/hero";
import UserLayout from "@/components/layouts/user-layout";
import ScrollingBanner from "@/components/scrolling-banner";

export default function Home() {
  return (
    <UserLayout>
      <div className="flex items-center justify-center p-4">
        <Hero />
      </div>
      <div className="flex items-center justify-center p-4">
        <ScrollingBanner />
      </div>
    </UserLayout>
  );
}
