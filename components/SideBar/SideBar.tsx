import Image from "next/image";
import logo from "@/public/twitter.svg";
import SideBarIcon from "./SideBarIcon";
import Link from "next/link";
import ProfileIcon from "../Misc/ProfileIcon";
import TweetButton from "./TweetButton";

//add property for modifying icon size

const SideBarItems = [
  { type: "Home" },
  { type: "Explore" },
  { type: "Notifications" },
  { type: "Messages" },
  { type: "Lists" },
  { type: "Bookmarks" },
  { type: "Communities" },
  { type: "Verified" },
  { type: "Profile" },
  { type: "More" },
];

type SideBarProps = {};
const SideBar: React.FC<SideBarProps> = () => {
  return (
    <div className="fixed flex h-screen w-[275px] flex-col justify-between px-2 2xl:w-[88px] 2xl:items-center sm:w-[68px]">
      {/* navbar */}
      <div>
        <nav>
          <Link
            href={"/home"}
            className={`flex h-[54px] w-[54px] items-center justify-center rounded-full transition hover:bg-color-hover`}
          >
            <Image src={logo} width={30} alt="Twitter Logo" />
          </Link>
          <ul className="flex flex-col">
            {SideBarItems.map((item) => (
              <li key={item.type} className="flex items-start py-1">
                <div
                  className={`flex items-center rounded-full p-3 transition hover:bg-color-hover 2xl:justify-center`}
                >
                  <SideBarIcon type={item.type} size={26.25} />
                  <span className="ml-5 mr-4 text-xl leading-6 2xl:hidden">
                    {item.type}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </nav>
        {/* Junsu: todo - add Modal for this button */}
        <TweetButton />
      </div>
      {/* navbar */}
      {/* account */}
      <div className="my-3 flex items-center rounded-full p-3 transition hover:bg-color-hover">
        <ProfileIcon />

        <div className="flex grow items-center justify-between 2xl:hidden">
          <div className="flex flex-col px-3 text-twitter-md leading-5">
            <p className="font-bold">Display Name</p>
            <p className="font-normal">@username</p>
          </div>
          <span className="h-8">...</span>
        </div>
      </div>
      {/* account */}
    </div>
  );
};
export default SideBar;
