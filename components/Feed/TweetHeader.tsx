import timeSince from '@/utils/timeSince';
import React from 'react';

type TweetHeaderProps = {
  displayName: string;
  account: string;
  date: Date;
};

const TweetHeader:React.FC<TweetHeaderProps> = ({displayName, account, date}) => {

  return <div>
  <span>{displayName} </span>
  <span className="text-gray-600">@{account} · </span>
  <span>{timeSince(date)} ago</span>
</div>
}
export default TweetHeader;