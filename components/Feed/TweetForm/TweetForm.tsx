"use client";
import { useState } from "react";
import ProfileIcon from "../../SideBar/ProfileIcon";
import TweetFormIcons from "./TweetFormIcons";

type TweetFormProps = {
  placeholder: string;
  buttonText: string;
};

const TweetForm: React.FC<TweetFormProps> = ({placeholder, buttonText}) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className="flex px-2 gap-4 py-2"
      onClick={setIsClicked.bind(null, true)}
    >
      <div>
        <ProfileIcon />
      </div>
      <div className="flex-grow">
        <textarea
          className="bg-black w-full resize-none"
          placeholder={placeholder}
        />
        <div className="flex justify-between items-center">
          <TweetFormIcons />
          <button className="rounded-full bg-twitter-blue p-2 px-5 font-bold">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};
export default TweetForm;
