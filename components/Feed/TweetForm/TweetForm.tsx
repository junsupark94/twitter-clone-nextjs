"use client";
import { useEffect, useRef, useState } from "react";
import ProfileIcon from "../../SideBar/ProfileIcon";
import TweetFormIcons from "./TweetFormIcons";
import AudienceMenu from "../Tweet/TweetBottom/Retweet/AudienceMenu";
import Menu, { MenuOptions } from "@/components/UI/Menu";
import PublicIcon from "@mui/icons-material/Public";
import FollowingIcon from "@mui/icons-material/PeopleOutline";
import MentionIcon from "@mui/icons-material/AlternateEmail";

type TweetFormProps = {
  placeholder: string;
  buttonText: string;
};

const TweetForm: React.FC<TweetFormProps> = ({ placeholder, buttonText }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [showAudienceMenu, setShowAudienceMenu] = useState(false);
  const [audience, setAudience] = useState("Everyone");
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "50px";
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);

  const menuOptions: MenuOptions[] = [
    { text: "Everyone", Icon: PublicIcon, clickHandler: () => {} },
    { text: "People you follow", Icon: FollowingIcon, clickHandler: () => {} },
    {
      text: "Only people you mention",
      Icon: MentionIcon,
      clickHandler: () => {},
    },
  ];

  return (
    <div
      className="flex gap-4 px-2 py-2"
      onClick={setIsClicked.bind(null, true)}
    >
      <div>
        <ProfileIcon />
      </div>
      <div className="flex-grow">
        {isClicked && (
          <button
            onClick={setShowAudienceMenu.bind(null, true)}
            className={`relative mb-4 flex justify-center rounded-full border px-2 py-1 text-xs font-bold ${
              audience === "Twitter Circle"
                ? "border-[#00BA7C] text-[#00BA7C]"
                : "border-blue-500 text-twitter-blue"
            }`}
          >
            {audience} ∨
            {showAudienceMenu && (
              <AudienceMenu
                closeModal={setShowAudienceMenu.bind(null, false)}
                audience={audience}
                setAudience={setAudience}
              />
            )}
          </button>
        )}
        <textarea
          className="w-full resize-none bg-black outline-none"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={textAreaRef}
          rows={1}
        />
        {isClicked && (
          <div className="relative">
            {showMenu && (
              <Menu
                closeModal={() => setShowMenu(false)}
                options={menuOptions}
                position="-left-10 top-7"
                icon_style="bg-twitter-blue rounded-full w-[40px] h-[40px] p-2 mr-1"
                selectable
              >
                <div className="px-4 pt-3">Who can reply?</div>
                <div className="w-[300px] text-clip px-4 pb-3 font-normal text-gray-500">
                  Choose who can reply to this Tweet. Anyone mentioned can
                  always reply.
                </div>
              </Menu>
            )}
            <div
              className="mb-3 border-b border-[#2f3336] pb-2 text-sm font-bold text-twitter-blue"
              onClick={() => setShowMenu(true)}
            >
              <span className="inline-flex items-center gap-1 rounded-full p-1 transition hover:bg-[#4c9ed526]">
                <PublicIcon fontSize="inherit" /> Everyone can reply
              </span>
            </div>
          </div>
        )}
        <div className="flex items-center justify-between">
          <TweetFormIcons />
          <button
            className={`rounded-full ${
              value === "" ? "bg-[#198bd6]" : "bg-twitter-blue"
            } p-2 px-5 font-bold`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};
export default TweetForm;
