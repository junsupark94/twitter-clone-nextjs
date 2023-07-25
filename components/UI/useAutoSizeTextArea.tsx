import React, { useEffect, useRef, useState } from "react";

const useAutoSizeTextArea = (placeholder : string) => {
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "50px";
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);

  //Tinker: turn this into a JSX element by converting it into a function that returns the textarea element, see if state is still connected
  const AutoSizeTextArea = (
    <textarea
      className="w-full resize-none bg-black outline-none"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      ref={textAreaRef}
      rows={1}
    />
  );

  return [ AutoSizeTextArea, value];
};
export default useAutoSizeTextArea;
