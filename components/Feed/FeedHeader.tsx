import React from "react";

type FeedHeaderProps = {};

const FeedHeader: React.FC<FeedHeaderProps> = () => {
  return (
    <div className="sticky top-0 z-10 bg-black/50 backdrop-blur-md border-b-2 border-color-hover">
      <h1 className="px-4 py-2 text-lg font-bold">Home</h1>
      <div className="flex">
        <button className="flex-grow hover:bg-color-hover p-4 font-medium transition">
          For you
        </button>
        <button className="flex-grow hover:bg-color-hover p-4 font-medium transition">
          Following
        </button>
      </div>
    </div>
  );
};
export default FeedHeader;
