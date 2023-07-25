import timeSince from "@/utils/timeSince";
import React from "react";

type TweetHeaderProps = {
  displayName: string;
  account: string;
  date: Date;
};

const TweetHeader: React.FC<TweetHeaderProps> = ({
  displayName,
  account,
  date,
}) => {
  return (
    <div>
      <span>{displayName} </span>
      <span className="text-gray-500">@{account} · </span>
      <span className="text-gray-500">{timeSince(date)}</span>
    </div>
  );
};
export default TweetHeader;
