import Image from "next/image";
import logo from "@/public/twitter.svg";
import SideBarIcon from "./SideBarIcon";
import Link from "next/link";
import Account from "./Account";

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

const iconSize = 30;

const SideBar: React.FC<SideBarProps> = () => {
  return (
    <header className="relative mx-2">
      <div>
        <nav className="flex flex-col gap-1">
          <Link
            href={"/"}
            className={`max-w-fit p-3 rounded-full hover:bg-color-hover`}
          >
            <Image src={logo} width={iconSize} alt="Twitter Logo" />
          </Link>
          <ul>
            {SideBarItems.map((item) => (
              <li key={item.type}>
                <Link
                  href={`/${item.type}`}
                  className={`flex items-center my-2 gap-4 max-w-fit rounded-full hover:bg-color-hover p-2 pr-5`}
                >
                  <SideBarIcon type={item.type} size={iconSize} />
                  <span className="text-xl 2xl:hidden">{item.type}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Junsu: todo - add Modal for this button */}
        <button className="font-bold bg-twitter-blue rounded-full 2xl:p-4 2xl:w-auto px-4 py-3 w-[90%]">
          <span className="2xl:hidden">Tweet</span>
          <div className="2xl:block hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-feather"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
          </div>
        </button>
      </div>
      <Account />
    </header>
  );
};
export default SideBar;
