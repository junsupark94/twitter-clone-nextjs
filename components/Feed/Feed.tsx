import FeedHeader from "./FeedHeader";
import TweetForm from "../TweetForm/TweetForm";
import Tweets from "./Tweets";
import MoreTweets from "./MoreTweets";

type FeedProps = {};

const Feed: React.FC<FeedProps> = () => {
  return (
    <div className="relative w-[600px] border-x-2 border-color-hover sm:w-auto">
      <FeedHeader />
      <div className="border-b-2 border-color-hover">
        <TweetForm placeholder="What is happening?!" buttonText="Tweet" />
      </div>
      <MoreTweets />
      <Tweets />
    </div>
  );
};
export default Feed;
