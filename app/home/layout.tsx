import FeedHeader from "@/components/Feed/FeedHeader";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <FeedHeader />
      <div className="flex-grow">Right Side</div>
    </div>
    )
}