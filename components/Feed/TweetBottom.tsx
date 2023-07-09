'use client'
import Retweet from "@mui/icons-material/RepeatOutlined";
import Reply from "@mui/icons-material/ChatBubbleOutlineOutlined";
import Like from "@mui/icons-material/FavoriteBorderOutlined";
import View from "@mui/icons-material/InsertChartOutlined";
import Share from "@mui/icons-material/FileUploadOutlined";
import TweetBottomIcon from "./TweetBottomIcon";

type TweetBottomProps = {
  replies: number,
  retweets: number,
  likes: number,
  views: number,
};

const TweetBottom: React.FC<TweetBottomProps> = ({replies, retweets, likes, views}) => {
  const icons = [
    { Icon: Reply, value: replies, text: "Reply" },
    {
      Icon: Retweet,
      hover_text_color: "hover:text-[#00BA7C]",
      hover_bgColor: "hover:bg-[#071A14]",
      value: retweets,
      text: "Retweet",
    },
    {
      Icon: Like,
      hover_text_color: "hover:text-[#F91880]",
      hover_bgColor: "hover:bg-[#200914]",
      value: likes,
      text: "Like",
    },
    { Icon: View, value: views, text: "Views" },
    { Icon: Share, text: "Share" },
  ];

  return (
    <div className="flex gap-10 text-gray-600">
      {icons.map((icon) => TweetBottomIcon(icon))}
    </div>
  );
};
export default TweetBottom;
