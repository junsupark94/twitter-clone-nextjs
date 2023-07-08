import Feed from "@/components/Feed/Feed";

export default function HomePage() {
  return (
    <div className="flex">
      <Feed />
      <div className="flex-grow">Right Side</div>
    </div>
  )
}