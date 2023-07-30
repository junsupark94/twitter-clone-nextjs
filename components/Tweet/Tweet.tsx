"use client";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import { TweetType } from "../Misc/tweet-data";
import TweetHeader from "./TweetHeader";
import TweetBottom from "./TweetBottom/TweetBottom";
import ProfileIcon from "../Misc/ProfileIcon";
import { useEffect, useState } from "react";
import MediaDisplay from "./MediaDisplay";
import SingleMediaDisplay from "./SingleMediaDisplay";

type TweetProps = {
  tweet: TweetType;
};

const Tweet: React.FC<TweetProps> = ({ tweet }) => {
  const { account, date, displayName, body, medias, retweeter, replying } =
    tweet;
  const [opacity, setOpacity] = useState("");


  useEffect(() => {
    setOpacity("opacity-100")
  }, [])

  return (
    <div className={`border-b-2 border-color-hover px-2 pb-4 pt-2 hover:bg-[#090909] transition duration-300 opacity-0 ${opacity}`}>
      {retweeter && (
        <div className="ml-3 text-gray-600 flex gap-2">
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
            {body && <div className="text-sm whitespace-pre-wrap mb-2">{body}</div>}
            {medias && medias.length === 1 && <SingleMediaDisplay medias={medias}/>}
            {medias && medias.length > 1 && <MediaDisplay medias={medias} />}
          </div>
          <TweetBottom tweet={tweet} />
        </div>
      </div>
    </div>
  );
};
export default Tweet;