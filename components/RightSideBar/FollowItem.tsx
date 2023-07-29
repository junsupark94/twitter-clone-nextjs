"use client";
import React, { useState } from "react";
import Image from "next/image";
import Checkmark from "./Checkmark";
import Link from "next/link";

type FollowItemProps = {
  imgSrc: string;
  verified?: boolean;
  displayName: string;
  account: string;
  teamLogo?: string;
  rounded?: boolean;
  url: string;
};

const FollowItem: React.FC<FollowItemProps> = ({
  imgSrc,
  verified,
  displayName,
  account,
  teamLogo,
  rounded,
  url,
}) => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <Link
      href={url}
      target="_blank"
      className="flex items-center justify-between gap-2 p-3 transition hover:bg-[#1e2025]"
    >
      <div>
        <Image
          alt="Logo"
          src={imgSrc}
          width={40}
          height={40}
          className={rounded ? "rounded-full" : ""}
        />
      </div>
      <div className="flex grow justify-between">
        <div>
          <div className="flex items-center gap-0.5">
            <div className="text-sm font-bold">{displayName}</div>
            {verified && <Checkmark className="min-h-[20px] min-w-[20px]" />}
            {teamLogo && (
              <Image
                alt="Team"
                draggable="false"
                height={16}
                width={16}
                src={teamLogo}
              />
            )}
          </div>
          <div className="text-sm text-gray-500">@{account}</div>
        </div>
        <button
          className="group text-sm font-bold"
          onClick={(e) => {
            e.preventDefault();
            setIsFollowing((prev) => !prev);
          }}
        >
          {!isFollowing && (
            <span
              className={`rounded-full bg-white px-4 py-2 text-black transition hover:bg-slate-300`}
            >
              Follow
            </span>
          )}
          {isFollowing && (
            <span className="rounded-full border border-[#536471] bg-[#16181c] px-4 py-2 hover:border-red-500 hover:text-red-500">
              <span className="group-hover:hidden">Following</span>
              <span className="hidden group-hover:inline">Unfollow</span>
            </span>
          )}
        </button>
      </div>
    </Link>
  );
};
export default FollowItem;
