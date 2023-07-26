"use client";
import useTweetsStore from "@/app/store/tweets-store";
import React from "react";
import Tweet from "../Tweet/Tweet";

type TweetsProps = {};

const Tweets: React.FC<TweetsProps> = () => {
  const tweets = useTweetsStore((state) => state.tweets);

  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};
export default Tweets;
