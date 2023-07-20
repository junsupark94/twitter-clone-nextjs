import React, { useRef, useState } from "react";
import SideBarIcon from "../SideBar/SideBarIcon";

export default function Search() {
  const [focusClasses, setFocusClasses] = useState("");
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const focusHandler = () => {
    setFocusClasses("bg-black outline outline-twitter-blue");
  };
  const blurHandler = () => {
    setFocusClasses("");
  };
  const deleteInputHandler = () => {
    setInputValue("");
    inputRef.current!.focus();
  };

  const searchIconProps: any = { type: "Explore" };
  if (focusClasses !== "") {
    searchIconProps.stroke_color = "#1D9BF0";
  }

  let buttonClasses = "invisible";
  if (focusClasses !== "" && inputValue !== "") {
    buttonClasses = "visible";
  }

  return (
    <div
      onFocus={focusHandler}
      onBlur={blurHandler}
      className={`flex justify-between rounded-full bg-[#16181c] px-4 py-2 ${focusClasses}`}
    >
      <div className="flex gap-4">
        {SideBarIcon(searchIconProps)}
        <input
          type="text"
          ref={inputRef}
          placeholder="Search Twitter"
          className="resize-none appearance-none bg-[#16181c] outline-none focus:bg-black"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div onClick={deleteInputHandler}>
        <button
          className={`flex max-h-[30px] max-w-[30px] items-center justify-center rounded-full bg-twitter-blue p-4 text-black ${buttonClasses}`}
        >
          x
        </button>
      </div>
    </div>
  );
}
