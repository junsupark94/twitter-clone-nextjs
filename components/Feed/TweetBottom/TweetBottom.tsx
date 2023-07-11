"use client";
import TweetBottomIcon from "./TweetBottomIcon";
import Reply from "./Reply";
import Views from "./Views";
import Share from "./Share";
import Like from "./Like";
import Retweet from "./Retweet";

type TweetBottomProps = {
  replies: number;
  retweets: number;
  likes: number;
  views: number;
};

const TweetBottom: React.FC<TweetBottomProps> = ({
  replies,
  retweets,
  likes,
  views,
}) => {

  return (
    <div className="flex gap-10 text-gray-600">
      <Reply value={replies}/>
      <Retweet value={retweets}/>
      <Like value={likes}/>
      <Views value={views} />
      <Share />
    </div>
  );
};
export default TweetBottom;
