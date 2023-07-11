import LikeIcon from "@mui/icons-material/FavoriteBorderOutlined";
import TweetBottomIcon from "./TweetBottomIcon";

type LikeProps = {
  value: number;
};

const Like: React.FC<LikeProps> = ({value}) => {
  // todo: this requires an animation that fills up the heart with sparkles at the end, set the text red, and increments the value
  return (
    <div>
      <TweetBottomIcon
        Icon={LikeIcon}
        text="Like"
        handleClick={() => console.log("Like!")}
        value={value}
      />
    </div>
  );
};
export default Like;
