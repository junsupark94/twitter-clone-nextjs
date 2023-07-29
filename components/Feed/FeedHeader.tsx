"use client";
import React from "react";
import useModalHeader from "../UI/useModalHeader";

type FeedHeaderProps = {};

const FeedHeader: React.FC<FeedHeaderProps> = () => {
  const options = ["For you", "Following"];
  const { header } = useModalHeader(options, "");

  return (
    <div className="sticky top-0 z-10  bg-black/50 backdrop-blur-md">
      <h1 className="px-4 py-2 text-lg font-bold">Home</h1>
      <div className="">{header}</div>
    </div>
  );
};
export default FeedHeader;
