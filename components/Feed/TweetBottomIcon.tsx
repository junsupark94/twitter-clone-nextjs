"use client";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { useState } from "react";

type icon = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
  muiName: string;
};

export default function TweetBottomIcon({
  Icon,
  color = "twitter-blue",
  bgColor = "#0A171F",
  value,
  text,
}: {
  Icon: icon;
  color?: string;
  bgColor?: string;
  value?: number;
  text: string;
}) {
  const [isHover, setIsHover] = useState(false);
  if (color !== "twitter-blue") color = `[${color}]`;
  let background = ""
  if (isHover) {
    background = bgColor
  }


  return (
    <div
      key={text}
      className={`hover:text-${color}`}
      onMouseEnter={setIsHover.bind(null, true)}
      onMouseLeave={setIsHover.bind(null, false)}
    >
      <div className="relative">
        <span className={`rounded-full p-1`} style={{backgroundColor: background}}>
          <Icon />
        </span>
        <span>{value}</span>
        {isHover && (
          <div className="absolute top-8 p-1 text-[9px] text-[#F7F8F9] bg-[#495a697d]">
            {text}
          </div>
        )}
      </div>
    </div>
  );
}
