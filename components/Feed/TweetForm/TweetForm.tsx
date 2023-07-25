"use client";
import { useEffect, useRef, useState } from "react";
import ProfileIcon from "../../SideBar/ProfileIcon";
import TweetFormIcons from "./TweetFormIcons";
import AudienceMenu from "../Tweet/TweetBottom/Retweet/AudienceMenu";
import WhoCanReplyMenu from "./WhoCanReplyMenu";

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

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "50px";
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);




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
