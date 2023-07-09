"use client";
import React from "react";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import ProfileIcon from "../SideBar/ProfileIcon";
import TweetBottom from "./TweetBottom";
import { TweetType } from "./tweet-data";
import Image from "next/image";
import timeSince from "@/utils/timeSince";

type TweetProps = {
  tweet: TweetType
};

const Tweet: React.FC<TweetProps> = ({tweet}) => {
  const {
    account,
    date,
    displayName,
    body,
    media,
    replies,
    retweets,
    likes,
    views,
    retweeter,
    replying,
  } = tweet

  return (
    <div className="pt-2 pb-4 px-2 border-b-2 border-color-hover">
      {retweeter && (
        <div className="left-4 relative text-gray-600">
          <RepeatOutlinedIcon />
          {retweeter} retweeted this
        </div>
      )}
      <div className="flex pt-1">
        <div className="pr-2">
          <ProfileIcon />
        </div>
        <div className="w-full">
          <div>
            <span>{displayName} </span>
            <span className="text-gray-600">@{account} · </span>
            <span>{timeSince(date)} ago</span>
          </div>
          <div>
            {replying && (
              <>
                <span className="text-gray-600">Replying to </span>
                <span className="text-twitter-blue">@{replying}</span>
              </>
            )}
          </div>
          <div className="my-2">
            {body && <div>{body}</div>}
            {media &&
              media?.map((item) => (
                <Image
                  key={item}
                  src={item}
                  width={100}
                  height={100}
                  alt="image"
                />
              ))}
          </div>
          <TweetBottom
            replies={replies}
            retweets={retweets}
            likes={likes}
            views={views}
          />
        </div>
      </div>
    </div>
  );
};
export default Tweet;
