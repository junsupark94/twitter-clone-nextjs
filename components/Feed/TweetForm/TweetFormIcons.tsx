import GifIcon from '@mui/icons-material/GifBoxOutlined';
import EmojiIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import PollIcon from '@mui/icons-material/BallotOutlined';
import ScheduleIcon from '@mui/icons-material/ScheduleOutlined';
import LocationIcon from '@mui/icons-material/LocationOnOutlined';
import IconButton from '@/components/UI/IconButton';
import MediaIcon from "@mui/icons-material/InsertPhotoOutlined";

type TweetFormIconsProps = {};

const TweetFormIcons: React.FC<TweetFormIconsProps> = () => {
  return (
    <div className="flex text-twitter-blue text-[20px] ">
      <IconButton Icon={MediaIcon} text="Media" />
      <IconButton Icon={GifIcon} text="GIF" />
      <IconButton Icon={PollIcon} text="Poll" />
      <IconButton Icon={EmojiIcon} text="Emoji" />
      <IconButton Icon={ScheduleIcon} text="Schedule" />
      <IconButton Icon={LocationIcon} text="Location" />
    </div>
  );
};
export default TweetFormIcons;
