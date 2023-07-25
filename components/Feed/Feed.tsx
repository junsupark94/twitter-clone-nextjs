import FeedHeader from "./FeedHeader";
import TweetForm from "../TweetForm/TweetForm";
import Tweets from "./Tweets";

type FeedProps = {};

const Feed: React.FC<FeedProps> = () => {

  return (
    <div className="relative w-[600px] border-x-2 border-color-hover sm:w-auto">
      <FeedHeader />
      <div className="border-b-2 border-color-hover">
        <TweetForm placeholder="What is happening?!" buttonText="Tweet" />
      </div>
      <div className="border-b-2 border-color-hover py-4 text-center text-twitter-blue hover:bg-color-hover">
        Show 4 Tweets
      </div>
      <Tweets />
    </div>
  );
};
export default Feed;
