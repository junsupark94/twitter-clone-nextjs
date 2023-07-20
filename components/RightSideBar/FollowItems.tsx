import React from "react";
import FollowItem from "./FollowItem";

type FollowItemsProps = {};

const followSuggestions = [
  {
    displayName: "Next.js",
    account: "nextjs",
    verified: true,
    imgSrc:
      "https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_400x400.jpg",
    teamLogo:
      "https://pbs.twimg.com/profile_images/1652878800311427073/j0-3owJd_bigger.jpg",
  },
  {
    displayName: "TypeScript",
    account: "typescript",
    imgSrc:
      "https://pbs.twimg.com/profile_images/1648471227416346625/v84A9gXA_400x400.png",
    rounded: true,
  },
  {
    displayName: "Tailwind CSS",
    account: "tailwindcss",
    imgSrc:
      "https://pbs.twimg.com/profile_images/1468993891584073729/a_op8KnL_400x400.jpg",
    rounded: true,
  },
];

const FollowItems: React.FC<FollowItemsProps> = () => {
  return (
    <div className="mb-4 rounded-2xl bg-[#16181c]">
      <div className="px-4 py-2 text-lg font-bold">Who to follow</div>
      {followSuggestions.map((follow) => (
        <FollowItem key={follow.account} {...follow} />
      ))}
      <div className="rounded-b-2xl px-4 py-3 text-sm text-twitter-blue transition hover:bg-[#1e2025]">
        Show more
      </div>
    </div>
  );
};
export default FollowItems;
