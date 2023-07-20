import Image from "next/image";
import logo from "@/public/twitter.svg";
import SideBarIcon from "./SideBarIcon";
import Link from "next/link";
import ProfileIcon from "./ProfileIcon";

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
                <Link
                  href={`/${item.type}`}
                  className={`flex items-center rounded-full p-3 transition hover:bg-color-hover 2xl:justify-center`}
                >
                  <SideBarIcon type={item.type} size={26.25} />
                  <span className="ml-5 mr-4 text-xl leading-6 2xl:hidden">
                    {item.type}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Junsu: todo - add Modal for this button */}
        <button className="my-4 min-h-[52px] w-[90%] rounded-full bg-twitter-blue font-bold transition hover:bg-[#1a8cd8] 2xl:w-auto">
          <div className="px-8 py-3 2xl:hidden">Tweet</div>
          <div className="hidden p-4 2xl:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-feather"
            >
              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
              <line x1="16" y1="8" x2="2" y2="22"></line>
              <line x1="17.5" y1="15" x2="9" y2="15"></line>
            </svg>
          </div>
        </button>
      </div>
      {/* navbar */}
      {/* account */}
      <div className="my-3 flex items-center rounded-full p-3 transition hover:bg-color-hover">
        <ProfileIcon />

        <div className="flex grow items-center justify-between 2xl:hidden">
          <div className="flex flex-col px-3 text-[15px] leading-5">
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
