"use client";
import React, { useEffect, useRef, useState } from "react";
import Search from "./Search";
import TrendingItems from "./TrendingItems";
import FollowItems from "./FollowItems";

type RightSideBarProps = {};

const RightSideBar: React.FC<RightSideBarProps> = () => {
  const searchRef = useRef<HTMLDivElement>(null);
  const [topOff, setTopOff] = useState("0px")
  useEffect(() => {
    setTopOff(`${searchRef.current?.scrollHeight}px`)
  }, [setTopOff])

  return (
    <div className="mr-[10px] w-[350px] pb-16 xl:w-[290px] md:hidden">
      <div className="sticky top-0 z-[2] bg-black py-1" ref={searchRef}>
        <Search />
      </div>
      <div className=" my-4 flex flex-col gap-[10px] rounded-2xl bg-[#16181c] px-4 py-3">
        <div className="text-xl font-bold">Get Verified</div>
        <div className="text-base font-bold">
          Subscribe to unlock new features
        </div>
        <button className="cursor-default w-fit rounded-3xl bg-twitter-blue px-4 py-2 font-bold hover:bg-[#198bd6]">
          Get Verified
        </button>
      </div>
      <div className="sticky" style={{top: topOff}}>
        <TrendingItems />
        <FollowItems />
        <footer className="flex flex-wrap gap-x-2 gap-y-1 px-4 text-xs text-gray-700">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
          <span>Accessbility</span>
          <span>Ads info</span>
          <span>More...</span>
          <span>More...</span>
          <span>© 2023 X Corp.</span>
        </footer>
      </div>
    </div>
  );
};
export default RightSideBar;
