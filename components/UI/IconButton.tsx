"use client";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { useState } from "react";

type icon = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
  muiName: string;
};

export default function IconButton({
  Icon,
  hover_text_color = "hover:text-twitter-blue",
  hover_bgColor = "hover:bg-[#0A171F]",
  value,
  text,
  handleClick,
}: {
  Icon: icon;
  hover_text_color?: string;
  hover_bgColor?: string;
  value?: number;
  text: string;
  handleClick?: () => void;
}) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      key={text}
      onMouseEnter={setIsHover.bind(null, true)}
      onMouseLeave={setIsHover.bind(null, false)}
      onClick={handleClick}
      className={`${hover_text_color} flex items-center relative`}
    >
      <div
        className={`rounded-full p-[6px] ${hover_bgColor} flex justify-center`}
      >
        <Icon fontSize="inherit"/>
        {isHover && (
          <div className="absolute top-9 p-1 text-[9px] text-[#F7F8F9] bg-[#495a697d]">
            {text}
          </div>
        )}
      </div>
      <div>{value}</div>
    </div>
  );
}
