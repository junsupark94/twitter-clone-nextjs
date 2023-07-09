import React from "react";

type FeedHeaderProps = {};

const FeedHeader: React.FC<FeedHeaderProps> = () => {
  return (
    <div className="border-b-2 border-color-hover">
      <h1 className="px-4 py-2 text-lg font-bold">Home</h1>
      <div className="flex">
        <button className="flex-grow hover:bg-color-hover p-4 font-medium">
          For you
        </button>
        <button className="flex-grow hover:bg-color-hover p-4 font-medium">
          Following
        </button>
      </div>
    </div>
  );
};
export default FeedHeader;
