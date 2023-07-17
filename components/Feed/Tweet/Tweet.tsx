'use client'
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import ProfileIcon from "../../SideBar/ProfileIcon";
import { TweetType } from "../tweet-data";
import Image from "next/image";
import TweetHeader from "./TweetHeader";
import TweetBottom from "./TweetBottom/TweetBottom";

type TweetProps = {
  tweet: TweetType;
};

const Tweet: React.FC<TweetProps> = ({ tweet }) => {
  const {
    account,
    date,
    displayName,
    body,
    medias,
    retweeter,
    replying,
  } = tweet;

  return (
    <div className="pt-2 pb-4 px-2 border-b-2 border-color-hover">
      {retweeter && (
        <div className="left-4 relative text-gray-600">
          <RepeatOutlinedIcon />
          {retweeter} retweeted this
        </div>
      )}
      <div className="flex pt-1">
        <div className="pr-2">
          <ProfileIcon />
        </div>
        <div className="w-full">
          <TweetHeader displayName={displayName} account={account} date={date}/>
          <div>
            {replying && (
              <>
                <span className="text-gray-600">Replying to </span>
                <span className="text-twitter-blue">@{replying}</span>
              </>
            )}
          </div>
          <div className="my-2">
            {body && <div>{body}</div>}
            {medias && medias[0].type === "photo" && (
              <div className="border border-red-500 relative h-96">
                <Image src={medias[0].src} alt="Image" fill className="object-cover"/>
              </div>
            )}
            {/* {medias && <Media medias={medias}/>} */}
          </div>
          <TweetBottom
            tweet={tweet}
          />
        </div>
      </div>
    </div>
  );
};
export default Tweet;