import React, { useEffect, useRef, useState } from "react";

type AutoSizeTextAreaProps = {
  placeholder: string;
};

const AutoSizeTextArea: React.FC<AutoSizeTextAreaProps> = ({
  placeholder,
}) => {
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "50px";
      const scrollHeight = textAreaRef.current.scrollHeight;
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);

  return (
    <textarea
      className="w-full resize-none bg-black outline-none"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      ref={textAreaRef}
      rows={1}
    />
  );
};
export default AutoSizeTextArea;
