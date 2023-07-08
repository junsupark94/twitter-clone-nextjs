import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

type TweetFormIconsProps = {};

const TweetFormIcons: React.FC<TweetFormIconsProps> = () => {
  return (
    <div className="flex gap-2 text-twitter-blue">
      <InsertPhotoOutlinedIcon/>
      <GifBoxOutlinedIcon />
      <BallotOutlinedIcon />
      <SentimentSatisfiedOutlinedIcon />
      <ScheduleOutlinedIcon />
      <LocationOnOutlinedIcon />
    </div>
  );
};
export default TweetFormIcons;
