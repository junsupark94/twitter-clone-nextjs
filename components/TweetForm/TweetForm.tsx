"use client";
import { useEffect, useRef, useState } from "react";
import TweetFormIcons from "./TweetFormIcons";
import AudienceMenu from "../Misc/AudienceMenu";
import WhoCanReplyMenu from "./WhoCanReplyMenu";
import useAutoSizeTextArea from "../UI/useAutoSizeTextArea";
import useTweetsStore from "@/app/store/tweets-store";
import ProfileIcon from "../Misc/ProfileIcon";

type TweetFormProps = {};

const TweetForm: React.FC<TweetFormProps> = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [showAudienceMenu, setShowAudienceMenu] = useState(false);
  const [audience, setAudience] = useState("Everyone");
  const { AutoSizeTextArea, value, setValue } = useAutoSizeTextArea(
    "What is happening?!",
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const addTweet = useTweetsStore((state) => state.addTweet);

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

  const submitTweetHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsClicked(false);
    setIsSubmitting(true);
    setTimeout(() => {
      addTweet({
        body: value,
        account: "junsupark",
        displayName: "J-money",
        likes: 0,
        retweets: 0,
        replies: 0,
        views: 0,
        date: new Date(),
        id: 0,
      });
      setValue("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div>
      <div
        className={`max-w-[0px] border-twitter-blue transition-[max-width] duration-1000 ${
          isSubmitting && "max-w-[700px] border"
        }`}
      />
      <div
        className={`flex gap-4 px-2 pb-2 pt-4 transition-[max-height] ${
          isSubmitting && "brightness-50 overflow-hidden"
        }`}
        style={{ maxHeight: isSubmitting ? "70px" : "300px" }}
        onClick={() => {
          if (isSubmitting) return;
          setIsClicked(true);
        }}
        ref={formRef}
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
          {isClicked && (
            <WhoCanReplyMenu audience={audience} />
          )}
          <div className="flex items-center justify-between">
            <TweetFormIcons />
            <button
              className={`rounded-full bg-twitter-blue ${
                value === "" && "brightness-50"
              } p-2 px-5 font-bold`}
              onClick={submitTweetHandler}
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TweetForm;
