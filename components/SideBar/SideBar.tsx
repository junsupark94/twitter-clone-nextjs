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
    <div className="relative mx-4 w-64 ">
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
                <span className="text-xl">{item.type}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Junsu: todo - add Modal for this button */}
      <button className="text-default-text bg-[#1D9BF0] rounded-full my-4 px-4 py-3 w-[90%]">
        Tweet
      </button>
      <Account />
    </div>
  );
};
export default SideBar;

// className={`items-center flex gap-2 max-w-fit rounded-full ${backgroundColorHover} p-2`}
