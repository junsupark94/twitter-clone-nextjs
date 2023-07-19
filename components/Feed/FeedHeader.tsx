import React from "react";

type FeedHeaderProps = {};

const FeedHeader: React.FC<FeedHeaderProps> = () => {
  return (
    <div className="sticky top-0 z-10 border-b border-color-hover bg-black/50 backdrop-blur-md">
      <h1 className="px-4 py-2 text-lg font-bold">Home</h1>
      <div className="flex">
        <button className="flex-grow p-4 font-medium transition hover:bg-color-hover">
          For you
        </button>
        <button className="flex-grow p-4 font-medium transition hover:bg-color-hover">
          Following
        </button>
      </div>
    </div>
  );
};
export default FeedHeader;
