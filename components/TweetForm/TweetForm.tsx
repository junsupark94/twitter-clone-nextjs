"use client";
import { useEffect, useRef, useState } from "react";
import TweetFormIcons from "./TweetFormIcons";
import AudienceMenu from "../AudienceMenu";
import WhoCanReplyMenu from "./WhoCanReplyMenu";
import ProfileIcon from "../SideBar/ProfileIcon";
import useAutoSizeTextArea from "../UI/useAutoSizeTextArea";

type TweetFormProps = {
  placeholder: string;
  buttonText: string;
};

const TweetForm: React.FC<TweetFormProps> = ({ placeholder, buttonText }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [showAudienceMenu, setShowAudienceMenu] = useState(false);
  const [audience, setAudience] = useState("Everyone");
  const [AutoSizeTextArea, value] = useAutoSizeTextArea(placeholder);

  useEffect(() => {
    if (!showAudienceMenu) return;

    const escListener = (e: KeyboardEvent) => {
      if (e.code === "Escape") setShowAudienceMenu(false);
    };
    document.addEventListener("keydown", escListener);

    return () => {
      document.removeEventListener("keydown", escListener);
    };
  });

  return (
    <div
      className="flex gap-4 px-2 pb-2 pt-4"
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
                closeModal={() => setShowAudienceMenu(false)}
                audience={audience}
                setAudience={setAudience}
              />
            )}
          </button>
        )}
        {AutoSizeTextArea}
        {isClicked && <WhoCanReplyMenu />}
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
