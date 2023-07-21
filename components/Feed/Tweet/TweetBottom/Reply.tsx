import React, { useState } from "react";
import ReplyIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ProfileIcon from "@/components/SideBar/ProfileIcon";
import { Media } from "../../tweet-data";
import TweetHeader from "../TweetHeader";
import IconButton from "@/components/UI/IconButton";
import ModalBox from "@/components/UI/ModalBox";
import ModalBackdrop from "@/components/UI/ModalBackdrop";
import TweetFormIcons from "../../TweetForm/TweetFormIcons";
import useReplyStore from "./reply-store";

type ReplyProps = {
  data: {
    account: string;
    date: Date;
    displayName: string;
    body: string | undefined;
    medias: Media[] | undefined;
    retweeter: string | undefined;
    replying: string | number | undefined;
  };
  value: number;
};

const Reply: React.FC<ReplyProps> = ({ data, value }) => {
  const [openModal, setData] = useReplyStore(state => [state.openModal, state.setData])

  const handleClick = () => {
    setData(data);
    openModal();
  }

  return (
      <IconButton
        Icon={ReplyIcon}
        value={value}
        text="Reply"
        handleClick={handleClick}
      />
  );
};
export default Reply;
