import React from "react";
import TrendingItem from "./TrendingItem";

type TrendingItemsProps = {};

const trends = [
  {
    type: "Entertainment",
    location: "United States",
    topic: "#Barbie",
    tweets: 123223,
  },
  { type: "Databases", topic: "Supabase", tweets: 13213, cotrend: "#firebase" },
  {
    topic: "Zustand",
    location: "San Francisco",
    type: "State management",
    tweets: 2345,
  },
  { type: "Web Dev", topic: "React 18", tweets: 1428 },
];

const TrendingItems: React.FC<TrendingItemsProps> = () => {
  return (
    <div className="mb-4 rounded-2xl bg-[#16181c]">
      <div className="px-4 pt-3 pb-2 text-lg font-bold">{`What's happening`}</div>
      {trends.map((trend) => (
        <TrendingItem key={trend.topic} {...trend} />
      ))}
      <div className="rounded-b-2xl px-4 py-3 text-sm text-twitter-blue transition hover:bg-[#1e2025]">
        Show more
      </div>
    </div>
  );
};
export default TrendingItems;
