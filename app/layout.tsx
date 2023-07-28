import "./globals.css";
import { Inter } from "next/font/google";
import Toast from "@/components/UI/Toast";
import QuoteTweetModal from "@/components/Tweet/TweetBottom/Retweet/QuoteTweetModal";
import ReplyModal from "@/components/Tweet/TweetBottom/Reply/ReplyModal";
import EditTwitterCircleModal from "@/components/EditTwitterCircleModal";
import SideBar from "@/components/SideBar/SideBar";
import TweetModal from "@/components/SideBar/TweetModal";
import DiscardModal from "@/components/DiscardModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Twitter Clone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overscroll-none`}>
        <div className="flex">
          <header className="flex w-[275px] shrink-0 grow justify-end 2xl:w-[88px] sm:grow-0 xs:w-[68px]">
            <SideBar />
          </header>
          <div className="grow lg:grow-[2]">{children}</div>
          <Toast />
          <QuoteTweetModal />
          <ReplyModal />
          <EditTwitterCircleModal />
          <TweetModal />
          <DiscardModal />
        </div>
      </body>
    </html>
  );
}
