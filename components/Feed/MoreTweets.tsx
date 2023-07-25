'use client'
import useTweetsStore from "@/app/store/tweets-store";
import React from "react";

type MoreTweetsProps = {};

const MoreTweets: React.FC<MoreTweetsProps> = () => {
  const [queuedTweets, refreshTweets] = useTweetsStore((state) => [
    state.queuedTweets,
    state.refreshTweets,
  ]);

  if (queuedTweets.length == 0) return null;

  return (
    <div onClick={refreshTweets} className="border-b-2 border-color-hover py-4 text-center text-twitter-blue hover:bg-color-hover">
      Show {queuedTweets.length} Tweets
    </div>
  );
};
export default MoreTweets;