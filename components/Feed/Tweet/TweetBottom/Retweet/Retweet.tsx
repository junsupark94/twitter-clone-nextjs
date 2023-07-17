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
    value++;
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
    <div className="relative">
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
        value={value}
        text_color={text_color}
        bgColor="group-hover:bg-[#071A14]"
      />
    </div>
  );
};
export default Retweet;
