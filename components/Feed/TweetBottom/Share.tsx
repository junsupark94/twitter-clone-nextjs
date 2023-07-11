import TweetBottomIcon from "./TweetBottomIcon";
import ShareIcon from "@mui/icons-material/FileUploadOutlined";

type ShareProps = {};

const Share: React.FC<ShareProps> = () => {
  return (
    <div>
      <TweetBottomIcon
        Icon={ShareIcon}
        text="Share"
        handleClick={() => console.log("Share!")}
      />
    </div>
  );
};
export default Share;
