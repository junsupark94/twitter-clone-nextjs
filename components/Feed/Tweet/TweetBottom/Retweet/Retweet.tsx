"use client";
import IconButton from "@/components/UI/IconButton";
import RetweetIcon from "@mui/icons-material/RepeatOutlined";
import { useState } from "react";
import { Media } from "../../../tweet-data";
import QuoteTweetIcon from "@mui/icons-material/Create";
import Menu from "../../../../UI/Menu";
import useQuoteTweetStore from "../../../../../app/store/quote-tweet-store";

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

  let number = value.toLocaleString();
  if (value > 9999) {
    number = (value / 1000).toFixed(1).toLocaleString() + "k";
  }

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
