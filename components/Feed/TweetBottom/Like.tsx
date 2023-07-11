import LikeIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IconButton from "../../UI/IconButton";

type LikeProps = {
  value: number;
};

const Like: React.FC<LikeProps> = ({value}) => {
  // todo: this requires an animation that fills up the heart with sparkles at the end, set the text red, and increments the value
  return (
    <div>
      <IconButton
        Icon={LikeIcon}
        text="Like"
        handleClick={() => console.log("Like!")}
        value={value}
        hover_bgColor="hover:bg-[#200914]"
        hover_text_color="hover:text-[#F91880]"
      />
    </div>
  );
};
export default Like;
