import RetweetIcon from "@mui/icons-material/RepeatOutlined";
import TweetBottomIcon from "./TweetBottomIcon";

type RetweetProps = {
  value: number
};

const Retweet: React.FC<RetweetProps> = ({value}) => {
  return (
    <div>
      <TweetBottomIcon
        Icon={RetweetIcon}
        text="Retweet"
        handleClick={() => console.log("Retweets!")}
        value={value}
      />
    </div>
  );
};
export default Retweet;
