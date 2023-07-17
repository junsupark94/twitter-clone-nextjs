"use client";
import IconButton from "@/components/UI/IconButton";
import RetweetIcon from "@mui/icons-material/RepeatOutlined";
import { useState } from "react";
import { Media } from "../../../tweet-data";
import RetweetMenu from "./RetweetMenu";
import QuoteTweetModal from "./QuoteTweetModal";

type RetweetProps = {
  data: {
    account: string;
    date: Date;
    displayName: string;
    body: string | undefined;
    medias: Media[] | undefined;
    retweeter: string | undefined;
    replying: string | number | undefined;
  };
  value: number;
};

const Retweet: React.FC<RetweetProps> = ({ data, value }) => {
  const [showRetweetMenu, setShowRetweetMenu] = useState(false);
  const [showQuoteTweetModal, setShowQuoteTweetModal] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  let text_color = "hover:text-[#00BA7C]";
  if (isRetweeted) {
    text_color = "text-[#00BA7C]";
  }

  const retweetHandler = () => {
    setIsRetweeted((prev) => !prev);
    setShowRetweetMenu(false);
  };

  const quoteTweetHandler = () => {
    setShowRetweetMenu(false);
    setShowQuoteTweetModal(true);
  };

  return (
    <div className="relative cursor-pointer gap-2 flex items-center justify-center">
      {showRetweetMenu && (
        <RetweetMenu
          closeModal={setShowRetweetMenu.bind(null, false)}
          retweetHandler={retweetHandler}
          quoteTweetHandler={quoteTweetHandler}
        />
      )}
      {showQuoteTweetModal && (
        <QuoteTweetModal
          setShowQuoteTweetModal={setShowQuoteTweetModal}
          data={data}
        />
      )}
      <IconButton
        Icon={RetweetIcon}
        text="Retweet"
        handleClick={setShowRetweetMenu.bind(null, true)}
        text_color={text_color}
        bgColor="group-hover:bg-[#071A14]"
      />
      <div
        className={`flex items-center justify-center ${
          isRetweeted && "text-[#00BA7C]"
        }`}
      >
        <div
          className={`translate-y-0 duration-100 ${isRetweeted && "decrement"}`}
        >
          {value}
        </div>
        <div
          className={`absolute translate-y-6 opacity-0 duration-100 ${
            isRetweeted && "increment"
          }`}
        >
          {value + 1}
        </div>
      </div>
    </div>
  );
};
export default Retweet;
