import { useState } from "react";

export default function useModalHeader(options: string[], margins: string = "-mx-1 mb-2") {
  const [selected, setSelected] = useState(options[0]);

  const header = (
    <div className={`${margins} flex border-b border-gray-500`}>
      {options.map((option) => (
        <div
          key={option}
          className="flex grow cursor-pointer justify-center pt-2 text-twitter-md font-bold transition hover:bg-[#e7e9ea19]"
          onClick={() => setSelected(option)}
        >
          <div
            className={`pt-2 pb-4 ${
              selected === option && "border-b-4 border-twitter-blue"
            }`}
          >
            {option}
          </div>
        </div>
      ))}
    </div>
  );

  return { selected, header };
}
