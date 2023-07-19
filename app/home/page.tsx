import Feed from "@/components/Feed/Feed";
import RightSideBar from '@/components/RightSideBar/RightSideBar';

export default function HomePage() {
  return (
    <main className="flex justify-between">
      <Feed />
      <RightSideBar />
    </main>
  )
}