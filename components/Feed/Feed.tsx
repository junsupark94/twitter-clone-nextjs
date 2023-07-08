import FeedHeader from "./FeedHeader";
import TweetForm from "./TweetForm";

type FeedProps = {};

const Feed: React.FC<FeedProps> = () => {
  return (
    <div className="grow-[1.25]">
      <FeedHeader />
      <TweetForm />
      <div>Things go here</div>
    </div>
  );
};
export default Feed;
