"use client";
import { useEffect, useRef, useState } from "react";
import ProfileIcon from "../../SideBar/ProfileIcon";
import TweetFormIcons from "./TweetFormIcons";

type TweetFormProps = {
  placeholder: string;
  buttonText: string;
};

const TweetForm: React.FC<TweetFormProps> = ({ placeholder, buttonText }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      textAreaRef.current.style.height = "50px";
      const scrollHeight = textAreaRef.current.scrollHeight;

      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);

  return (
    <div
      className="flex gap-4 px-2 py-2"
      onClick={setIsClicked.bind(null, true)}
    >
      <div>
        <ProfileIcon />
      </div>
      <div className="flex-grow">
        <textarea
          className="w-full resize-none bg-black outline-none"
          placeholder={placeholder}
          value={value}
          onChange={e => setValue(e.target.value)}
          ref={textAreaRef}
          rows={1}
        />
        <div className="flex items-center justify-between">
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