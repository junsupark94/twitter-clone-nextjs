"use client";
import useTweetsStore from "@/app/store/tweets-store";
import React from "react";

type TweetButtonProps = {};

const TweetButton: React.FC<TweetButtonProps> = () => {
  const openModal = useTweetsStore((state) => state.openModal);

  return (
    <button
      onClick={openModal}
      className="my-4 min-h-[52px] w-[90%] rounded-full bg-twitter-blue font-bold transition hover:bg-[#1a8cd8] 2xl:w-auto"
    >
      <div className="px-8 py-3 2xl:hidden">Tweet</div>
      <div className="hidden p-4 2xl:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-feather"
        >
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
          <line x1="16" y1="8" x2="2" y2="22"></line>
          <line x1="17.5" y1="15" x2="9" y2="15"></line>
        </svg>
      </div>
    </button>
  );
};
export default TweetButton;
