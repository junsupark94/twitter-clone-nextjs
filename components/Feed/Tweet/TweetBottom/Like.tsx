import LikeIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useState } from "react";

type LikeProps = {
  value: number;
};

const Like: React.FC<LikeProps> = ({ value }) => {
  // todo: this requires an animation that fills up the heart with sparkles at the end, set the text red, and increments the value
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      onClick={() => {
        setIsClicked((prev) => !prev);
      }}
      className="cursor-pointer relative gap-2 flex items-center justify-center group hover:text-[#F91880]"
    >
      {/* icon */}
      <div className="relative flex w-5 h-full justify-center items-center">
        <div
          className={`absolute flex rounded-full p-[6px] group-hover:bg-[#200914]  ${
            isClicked && "hidden"
          }`}
        >
          <LikeIcon fontSize="small" />
        </div>
        <div className={`absolute like ${isClicked && "active"}`} />
      </div>
      <div className="hidden group-hover:block absolute top-9 p-1 text-[9px] text-[#F7F8F9] bg-[#495a697d]">
        Like
      </div>
      {/* increment */}
      <div
        className={`flex items-center justify-center ${
          isClicked && "text-[#F91880]"
        }`}
      >
        <div
          className={`translate-y-0 duration-100 ${isClicked && "decrement"}`}
        >
          {value}
        </div>
        <div
          className={`absolute translate-y-6 opacity-0 duration-100 ${
            isClicked && "increment"
          }`}
        >
          {value + 1}
        </div>
      </div>
    </div>
  );
};
export default Like;
