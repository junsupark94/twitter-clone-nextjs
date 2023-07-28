import Menu, { MenuOptions } from "@/components/UI/Menu";
import PublicIcon from "@mui/icons-material/Public";
import FollowingIcon from "@mui/icons-material/PeopleOutline";
import MentionIcon from "@mui/icons-material/AlternateEmail";
import TwitterCircleIcon from "@mui/icons-material/Lock";
import React, { useState } from "react";

type WhoCanReplyMenuProps = {
  audience: string;
};

const WhoCanReplyMenu: React.FC<WhoCanReplyMenuProps> = ({ audience }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selected, setSelected] = useState(0);

  if (audience === "Twitter Circle")
    return (
      <div
        className="mb-3 border-b border-[#2f3336] pb-2 text-sm font-bold text-twitter-blue/50"
      >
        <span className="inline-flex items-center gap-1 rounded-full p-1">
          <TwitterCircleIcon fontSize="inherit" /> Only your Twitter Circle who
          follows you can reply
        </span>
      </div>
    );

  const menuOptions: MenuOptions[] = [
    {
      text: "Everyone",
      Icon: PublicIcon,
      clickHandler: () => {
        setSelected(0);
      },
    },
    {
      text: "People you follow",
      Icon: FollowingIcon,
      clickHandler: () => {
        setSelected(1);
      },
    },
    {
      text: "Only people you mention",
      Icon: MentionIcon,
      clickHandler: () => {
        setSelected(2);
      },
    },
  ];
  const Icon = menuOptions[selected].Icon;

  return (
    <div className="relative text-lg">
      {showMenu && (
        <Menu
          closeModal={() => setShowMenu(false)}
          options={menuOptions}
          position="-left-10 top-7"
          icon_style="bg-twitter-blue rounded-full w-[40px] h-[40px] p-2 mr-1"
          selected={selected}
        >
          <div className="px-4 pt-3">Who can reply?</div>
          <div className="w-[300px] text-clip px-4 pb-3 font-normal text-gray-500">
            Choose who can reply to this Tweet. Anyone mentioned can always
            reply.
          </div>
        </Menu>
      )}
      <div
        className="mb-3 border-b border-[#2f3336] pb-2 text-sm font-bold text-twitter-blue"
        onClick={() => setShowMenu(true)}
      >
        <span className="inline-flex items-center gap-1 rounded-full p-1 transition hover:bg-[#4c9ed526]">
          <Icon fontSize="inherit" /> {menuOptions[selected].text} can reply
        </span>
      </div>
    </div>
  );
};
export default WhoCanReplyMenu;
