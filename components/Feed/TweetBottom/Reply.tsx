import React, { useState } from "react";
import ReplyIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import TweetBottomIcon from "./TweetBottomIcon";
import Modal from "@/components/UI/Modal";

type ReplyProps = {
  value: number;
};

const Reply: React.FC<ReplyProps> = ({ value }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <Modal closeModal={setShowModal.bind(null, false)}>
          <div className="relative inline top-8 left-1/3 bg-black border border-purple-500">
            Reply Modal
          </div>
        </Modal>
      )}
      <TweetBottomIcon
        Icon={ReplyIcon}
        value={value}
        text="Reply"
        handleClick={setShowModal.bind(null, true)}
      />
    </>
  );
};
export default Reply;
