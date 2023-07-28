import React, { useEffect, useRef, useState } from "react";

const useAutoSizeTextArea = (placeholder: string, height: number = 50) => {
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = `${height}px`;
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value, height]);

  const AutoSizeTextArea = (
    <textarea
      className="w-full resize-none bg-black outline-none text-[20px]"
      style={{height: `${height}px`}}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      ref={textAreaRef}
      rows={1}
    />
  );

  return { AutoSizeTextArea, value, setValue };
};
export default useAutoSizeTextArea;
