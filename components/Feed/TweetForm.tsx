"use client";
import { useState } from "react";
import ProfileIcon from "../SideBar/ProfileIcon";
import TweetFormIcons from "./TweetFormIcons";

type TweetFormProps = {};

const TweetForm: React.FC<TweetFormProps> = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className="border-b-2 border-color-hover flex px-2 gap-4 py-2"
      onClick={setIsClicked.bind(null, true)}
    >
      <div>
        <ProfileIcon />
      </div>
      <div className="flex-grow">
        <textarea
          className="bg-black w-full resize-none"
          placeholder="What is happening?!"
        />
        <div className="flex justify-between items-center">
          <TweetFormIcons />
          <button className="rounded-full bg-twitter-blue p-2 px-6">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};
export default TweetForm;
