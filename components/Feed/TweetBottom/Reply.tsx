import React, { useState } from "react";
import ReplyIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import IconButton from "../../UI/IconButton";
import Modal from "@/components/UI/Modal";
import { Media } from "../tweet-data";
import TweetForm from "../TweetForm/TweetForm";
import ProfileIcon from "@/components/SideBar/ProfileIcon";
import TweetHeader from "../TweetHeader";

type ReplyProps = {
  data: {
    account: string;
    date: Date;
    displayName: string;
    body: string | undefined;
    medias: Media[] | undefined;
    replies: number;
    retweeter: string | undefined;
    replying: string | number | undefined;
  };
};

const Reply: React.FC<ReplyProps> = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  const {
    account,
    date,
    displayName,
    body,
    medias,
    replies,
    retweeter,
    replying,
  } = data;

  return (
    <>
      {showModal && (
        <Modal closeModal={setShowModal.bind(null, false)}>
          <div onClick={e => e.stopPropagation()} className="fixed p-1 top-12 rounded-2xl bg-black max-w-[80vw] max-h-[90vh] min-w-[600px]">
            <button className="m-2 w-9 h-9 rounded-full hover:bg-color-hover">
              X
            </button>
            <div className="flex">
              <div className="mx-2">
                <ProfileIcon />
              </div>
              <div className="mx-2">
                <TweetHeader
                  displayName={displayName}
                  account={account}
                  date={date}
                />
                <p className="mb-4">
                  {body ? body : medias?.map((media) => media.src).join(" ")}
                </p>
                <div className="mb-4">
                  <span className="text-gray-500">Replying to </span>
                  <span className="text-twitter-blue">@{account}</span>
                </div>
              </div>
            </div>
            <TweetForm placeholder="Tweet your reply!" buttonText="Reply" />
          </div>
        </Modal>
      )}
      <IconButton
        Icon={ReplyIcon}
        value={replies}
        text="Reply"
        handleClick={setShowModal.bind(null, true)}
      />
    </>
  );
};
export default Reply;
