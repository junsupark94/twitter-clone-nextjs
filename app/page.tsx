'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootPage() {
  const router = useRouter();
  useEffect(() => {
    router.push('/home');
  })

  return (
    <div>This will not get rendered</div>
  );
}
