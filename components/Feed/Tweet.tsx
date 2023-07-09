"use client";
import React, { useState } from "react";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import ProfileIcon from "../SideBar/ProfileIcon";
import TweetBottom from "./TweetBottom";

type TweetProps = {};

const Tweet: React.FC<TweetProps> = () => {
  const [isRetweet, setIsRetweet] = useState(true);

  //border-b border-color-hover
  return (
    <div className="pt-2 pb-4 px-2 border-b-2 border-color-hover">
      {isRetweet && (
        <div className="left-4 relative text-gray-600">
          <RepeatOutlinedIcon />
          This user retweeted this
        </div>
      )}
      <div className="flex pt-1">
        <div className="pr-2">
          <ProfileIcon />
        </div>
        <div className="w-full">
          <div>
            <span>Display Name </span>
            <span>@username · </span>
            <span>time ago</span>
          </div>
          <div>
            <span className="text-gray-600">Replying to </span>
            <span className="text-twitter-blue">@username</span>
          </div>
          <div className="my-2">Text + media</div>
          <TweetBottom />
        </div>
      </div>
    </div>
  );
};
export default Tweet;
