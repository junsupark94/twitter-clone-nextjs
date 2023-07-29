"use client";
import IconButton from "@/components/UI/IconButton";
import RetweetIcon from "@mui/icons-material/RepeatOutlined";
import { useState } from "react";
import QuoteTweetIcon from "@mui/icons-material/Create";
import useQuoteTweetStore from "@/app/store/quote-tweet-store";
import { Media } from "@/components/tweet-data";
import Menu from "@/components/UI/Menu";
import truncateNumber from "@/utils/truncateNumber";

type RetweetProps = {
  data: {
    account: string;
    date: Date;
    displayName: string;
    body?: string;
    medias?: Media[];
    retweeter?: string;
    replying?: string | number;
  };
  value: number;
};

const Retweet: React.FC<RetweetProps> = ({ data, value }) => {
  const [showRetweetMenu, setShowRetweetMenu] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [openModal, setData] = useQuoteTweetStore((state) => [
    state.openModal,
    state.setData,
  ]);

  let text_color = "group-hover:text-[#00BA7C]";
  if (isRetweeted) {
    text_color = "text-[#00BA7C]";
  }

  const retweetHandler = () => {
    setIsRetweeted((prev) => !prev);
  };

  const quoteTweetHandler = () => {
    setData(data);
    openModal();
  };

  const menuOptions = [
    { text: "Retweet", Icon: RetweetIcon, clickHandler: retweetHandler },
    {
      text: "Quote Tweet",
      Icon: QuoteTweetIcon,
      clickHandler: quoteTweetHandler,
    },
  ];

  const number = truncateNumber(value);

  return (
    <div className="group relative flex items-center justify-center gap-2">
      {showRetweetMenu && (
        <Menu
          closeModal={() => setShowRetweetMenu(false)}
          options={menuOptions}
        />
      )}
      <IconButton
        Icon={RetweetIcon}
        text="Retweet"
        handleClick={setShowRetweetMenu.bind(null, true)}
        text_color={text_color}
        cursor
        bgColor="group-hover:bg-[#0e382b]"
      />
      <div
        onClick={setShowRetweetMenu.bind(null, true)}
        className={`flex items-center justify-center ${
          isRetweeted && "text-[#00BA7C]"
        }`}
      >
        {value < 10000 && (
          <>
            <div
              className={`translate-y-0 duration-100 group-hover:text-[#00ba7c] ${
                isRetweeted && "decrement"
              }`}
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
          </>
        )}
        {value > 9999 && <div>{number}</div>}
      </div>
    </div>
  );
};
export default Retweet;
