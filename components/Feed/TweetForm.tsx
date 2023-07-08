'use client'
import { useState } from "react";
import ProfileIcon from "../SideBar/ProfileIcon";
import TweetFormIcons from "./TweetFormIcons";

type TweetFormProps = {

};

const TweetForm:React.FC<TweetFormProps> = () => {
  const [isClicked, setIsClicked] = useState(false);

  return <div className="flex px-2 gap-4 border border-red-500" onClick={setIsClicked.bind(null, true)}>
    <ProfileIcon />
    <div className="flex-grow border border-green-500">
      <textarea className="bg-black w-full resize-none" placeholder="What is happening?!" />
      <div className="flex justify-between items-center">
        <TweetFormIcons/>
        <button className="rounded-full bg-twitter-blue p-2 px-4">Tweet</button>
      </div>
    </div>
  </div>
}
export default TweetForm;