"use client";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import TweetHeader from "./TweetHeader";
import TweetBottom from "./TweetBottom/TweetBottom";
import ProfileIcon from "../Misc/ProfileIcon";
import { useEffect, useState } from "react";
import MediaDisplay from "./MediaDisplay";
import SingleMediaDisplay from "./SingleMediaDisplay";
import { TweetType } from "@/app/store/tweets-store";

type TweetProps = {
  tweet: TweetType;
};

const Tweet: React.FC<TweetProps> = ({ tweet }) => {
  const { account, date, displayName, body, medias, retweeter, replying } =
    tweet;
  const [opacity, setOpacity] = useState("");

  useEffect(() => {
    setOpacity("opacity-100");
  }, []);

  return (
    <div
      className={`border-b-2 border-color-hover px-2 pb-4 pt-2 opacity-0 transition duration-300 hover:bg-[#090909] ${opacity}`}
    >
      {retweeter && (
        <div className="ml-3 flex gap-2 text-gray-600">
          <RepeatOutlinedIcon />
          {retweeter} retweeted this
        </div>
      )}
      <div className="flex pt-1">
        <div className="pr-2">
          <ProfileIcon />
        </div>
        <div className="w-full">
          <TweetHeader
            displayName={displayName}
            account={account}
            date={date}
          />
          <div>
            {replying && (
              <>
                <span className="text-gray-600">Replying to </span>
                <span className="text-twitter-blue">@{replying}</span>
              </>
            )}
          </div>
          <div className="my-2">
            {body && (
              <div className="mb-2 whitespace-pre-wrap text-sm">{body}</div>
            )}
            {medias && medias.length === 1 && (
              <SingleMediaDisplay tweet={tweet} />
            )}
            {medias && medias.length > 1 && <MediaDisplay tweet={tweet} />}
          </div>
          <TweetBottom tweet={tweet} />
        </div>
      </div>
    </div>
  );
};
export default Tweet;
