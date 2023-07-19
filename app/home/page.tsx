import Feed from "@/components/Feed/Feed";
import RightSideBar from '@/components/RightSideBar/RightSideBar';

export default function HomePage() {
  return (
    <main className="flex shrink justify-between w-[990px] xl:w-[920px] lg:w-[600px] h-screen sm:w-auto">
      <Feed />
      <RightSideBar />
    </main>
  )
}