import RetweetIcon from "@mui/icons-material/RepeatOutlined";
import IconButton from "../../UI/IconButton";

type RetweetProps = {
  value: number
};

const Retweet: React.FC<RetweetProps> = ({value}) => {
  return (
    <div>
      <IconButton
        Icon={RetweetIcon}
        text="Retweet"
        handleClick={() => console.log("Retweets!")}
        value={value}
        hover_text_color="hover:text-[#00BA7C]"
        hover_bgColor="hover:bg-[#071A14]"
      />
    </div>
  );
};
export default Retweet;
