'use client'
import Retweet from "@mui/icons-material/RepeatOutlined";
import Reply from "@mui/icons-material/ChatBubbleOutlineOutlined";
import Like from "@mui/icons-material/FavoriteBorderOutlined";
import View from "@mui/icons-material/InsertChartOutlined";
import Share from "@mui/icons-material/FileUploadOutlined";
import TweetBottomIcon from "./TweetBottomIcon";

type TweetBottomProps = {};

const icons = [
  { Icon: Reply, value: 10, text: "Reply" },
  {
    Icon: Retweet,
    color: "#00BA7C",
    bgColor: "#071A14",
    value: 10,
    text: "Retweet",
  },
  {
    Icon: Like,
    color: "#F91880",
    bgColor: "#200914",
    value: 65,
    text: "Like",
  },
  { Icon: View, value: 4020, text: "Views" },
  { Icon: Share, text: "Share" },
];

const TweetBottom: React.FC<TweetBottomProps> = () => {
  return (
    <div className="flex gap-10 text-gray-600">
      {icons.map((icon) => TweetBottomIcon(icon))}
    </div>
  );
};
export default TweetBottom;
