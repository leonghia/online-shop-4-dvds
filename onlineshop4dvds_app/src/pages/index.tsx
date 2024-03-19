import ScrollingBanner from "@/components/scrolling-banner";
import HomeLayout from "@/components/layouts/home-layout";

export default function Home() {

  return (
    <HomeLayout>
      <div className="flex items-center justify-center p-4">
        <ScrollingBanner />
      </div>
      <div className="flex items-center justify-center p-4">
      </div>
      <div className="flex items-center justify-center p-4">
      </div>
      <div className="flex items-center justify-center p-4">
      </div>
    </HomeLayout>
  );
}
