import React, { useState } from "react";
import ReplyIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import IconButton from "@/components/UI/IconButton";
import useReplyStore from "./reply-store";
import { Media } from "@/app/store/tweets-store";


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
  const [openModal, setData] = useReplyStore((state) => [
    state.openModal,
    state.setData,
  ]);

  const handleClick = () => {
    setData(data);
    openModal();
  };

  return (
    <IconButton
      Icon={ReplyIcon}
      value={value}
      text="Reply"
      handleClick={handleClick}
      cursor
    />
  );
};
export default Reply;
