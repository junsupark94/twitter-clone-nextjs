import FeedHeader from "./FeedHeader";
import Tweet from "./Tweet/Tweet";
import TweetForm from "./TweetForm/TweetForm";
import DUMMY_TWEETS from "./tweet-data";

type FeedProps = {};

const Feed: React.FC<FeedProps> = () => {
  return (
    <div className="w-[598px] border-r-2 border-color-hover">
      <FeedHeader />
      <div className="border-b-2 border-color-hover">
        <TweetForm placeholder="What is happening?!" buttonText="Tweet" />
      </div>
      <div className="border-b-2 border-color-hover py-4 text-center text-twitter-blue hover:bg-color-hover">
        Show 4 Tweets
      </div>
      <div>
        {DUMMY_TWEETS.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
};
export default Feed;
