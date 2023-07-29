import Link from "next/link";
import React from "react";

type TrendingItemProps = {
  type: string;
  location?: string;
  topic: string;
  tweets: number;
  cotrend?: string;
  url: string;
};

const TrendingItem: React.FC<TrendingItemProps> = ({
  type,
  location,
  topic,
  tweets,
  cotrend,
  url
}) => {
  let number = tweets.toLocaleString();
  if (tweets > 9999) {
    number = (tweets/1000).toFixed(1).toLocaleString() + "k"
  }

  return (
    <Link href={url} target="_blank" className="block px-4 py-3 text-xs text-[#71767b] hover:bg-[#1e2025]">
      <div className="">
        {type} · {location ? `Trending in ${location}` : "Trending"}
      </div>
      <div className="text-sm font-bold text-[#e7e9ea]">{topic}</div>
      <div>{number.toLocaleString()} Tweets</div>
      {cotrend && (
        <div className="text-xs">
          Trending with <span className="text-twitter-blue">{cotrend}</span>
        </div>
      )}
    </Link>
  );
};
export default TrendingItem;
