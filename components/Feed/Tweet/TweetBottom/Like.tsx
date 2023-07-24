import LikeIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useState } from "react";

type LikeProps = {
  value: number;
};

const Like: React.FC<LikeProps> = ({ value }) => {
  // todo: this requires an animation that fills up the heart with sparkles at the end, set the text red, and increments the value
  const [isClicked, setIsClicked] = useState(false);

  let number = value.toLocaleString();
  if (value > 9999) {
    number = (value/1000).toFixed(1).toLocaleString() + "k"
  }

  return (
    <div
      onClick={() => {
        setIsClicked((prev) => !prev);
      }}
      className="group relative flex cursor-pointer items-center justify-center gap-2 hover:text-[#F91880]"
    >
      {/* icon */}
      <div className="relative flex items-center justify-center rounded-full p-4 group-hover:bg-[#200914]">
        <div
          className={`absolute flex rounded-full p-[6px]  transition ${
            isClicked && "hidden"
          }`}
        >
          <LikeIcon fontSize="small" />
        </div>
        <div className={`like absolute ${isClicked && "active"}`} />
      </div>
      <div className="absolute top-9 hidden bg-[#495a697d] p-1 text-[9px] text-[#F7F8F9] group-hover:block">
        Like
      </div>
      {/* increment */}
      {value < 10000 && <div
        className={`flex items-center justify-center ${
          isClicked && "text-[#F91880] transition"
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
      </div>}
      {value > 9999 && <div>{number}</div>}
    </div>
  );
};
export default Like;
