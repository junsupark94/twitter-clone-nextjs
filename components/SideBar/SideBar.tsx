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
    <header className="w-[275px] 2xl:w-[88px]">
      <div className="fixed w-[275px] 2xl:w-[88px] 2xl:items-center flex flex-col justify-between h-full px-2">
        {/* navbar */}
        <div>
          <nav>
            <Link
              href={"/home"}
              className={`w-[54px] h-[54px] flex justify-center items-center rounded-full hover:bg-color-hover transition`}
            >
              <Image src={logo} width={30} alt="Twitter Logo" />
            </Link>
            <ul className="flex flex-col">
              {SideBarItems.map((item) => (
                <li key={item.type} className="py-1 flex items-start">
                  <Link
                    href={`/${item.type}`}
                    className={`flex items-center 2xl:justify-center p-3 hover:bg-color-hover rounded-full transition`}
                  >
                    <SideBarIcon type={item.type} size={26.25} />
                    <span className="text-xl leading-6 mr-4 ml-5 2xl:hidden">
                      {item.type}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* Junsu: todo - add Modal for this button */}
          <button className="font-bold bg-twitter-blue rounded-full w-[90%] 2xl:w-auto my-4 min-h-[52px] hover:bg-[#1a8cd8] transition">
            <div className="2xl:hidden px-8 py-3">Tweet</div>
            <div className="2xl:block hidden p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
        <div className="flex items-center p-3 my-3 hover:bg-color-hover rounded-full transition">
          <ProfileIcon />

          <div className="2xl:hidden flex grow items-center justify-between">
            <div className="px-3 flex flex-col text-[15px] leading-5">
              <p className="font-bold">Display Name</p>
              <p className="font-normal">@username</p>
            </div>
            <span className="h-8">...</span>
          </div>
        </div>
        {/* account */}
      </div>
    </header>
  );
};
export default SideBar;
