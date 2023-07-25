'use client'
import FeedHeader from "@/components/Feed/FeedHeader";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();
  router.push('/home');
  return (
    <div>This will not get rendered</div>
  );
}
