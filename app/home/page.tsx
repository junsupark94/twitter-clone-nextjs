import Feed from "@/components/Feed/Feed";
import RightSideBar from "@/components/RightSideBar/RightSideBar";

export default function HomePage() {
  return (
    <main className="flex h-screen w-[990px] shrink justify-between xl:w-[920px] lg:w-[600px] sm:w-auto">
      <Feed />
      <RightSideBar />
    </main>
  );
}
