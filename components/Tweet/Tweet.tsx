"use client";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import { TweetType } from "../tweet-data";
import Image from "next/image";
import TweetHeader from "./TweetHeader";
import TweetBottom from "./TweetBottom/TweetBottom";
import ProfileIcon from "../ProfileIcon";
import { useEffect, useState } from "react";

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
    <div className={`border-b-2 border-color-hover px-2 pb-4 pt-2 transition-opacity duratin-300 opacity-0 ${opacity}`}>
      {retweeter && (
        <div className="relative left-4 text-gray-600">
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
            {body && <div className="text-sm whitespace-pre-wrap">{body}</div>}
            {medias && medias[0].type === "photo" && (
              <div className="relative h-96 border border-red-500">
                <Image
                  src={medias[0].src}
                  alt="Image"
                  fill
                  sizes="(max-width: 400px)"
                  className="object-cover"
                />
              </div>
            )}
            {/* {medias && <Media medias={medias}/>} */}
          </div>
          <TweetBottom tweet={tweet} />
        </div>
      </div>
    </div>
  );
};
export default Tweet;