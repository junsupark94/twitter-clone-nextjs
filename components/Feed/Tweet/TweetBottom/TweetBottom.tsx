"use client";
import Reply from "./Reply";
import Views from "./Views";
import Share from "./Share";
import Like from "./Like";
import Retweet from "./Retweet/Retweet";
import { TweetType } from "../../tweet-data";

type TweetBottomProps = {
  tweet: TweetType;
};

const TweetBottom: React.FC<TweetBottomProps> = ({ tweet }) => {
  const {
    account,
    date,
    displayName,
    body,
    medias,
    replies,
    retweets,
    likes,
    views,
    retweeter,
    replying,
  } = tweet;

  const data = {
    account,
    date,
    displayName,
    body,
    medias,
    retweeter,
    replying,
  };


  return (
    <div className="flex gap-10 text-[13px] text-gray-600">
      <Reply data={data} value={replies} />
      <Retweet data={data} value={retweets} />
      <Like value={likes} />
      <Views value={views} />
      <Share />
    </div>
  );
};
export default TweetBottom;
