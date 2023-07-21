import React, { useState } from "react";
import ReplyIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ProfileIcon from "@/components/SideBar/ProfileIcon";
import { Media } from "../../tweet-data";
import TweetHeader from "../TweetHeader";
import IconButton from "@/components/UI/IconButton";
import ModalBox from "@/components/UI/ModalBox";
import ModalBackdrop from "@/components/UI/ModalBackdrop";
import TweetFormIcons from "../../TweetForm/TweetFormIcons";

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
  const [showModal, setShowModal] = useState(false);

  const { account, date, displayName, body, medias, retweeter, replying } =
    data;

  return (
    <>
      {showModal && (
        <ModalBackdrop closeModal={setShowModal.bind(null, false)}>
          <ModalBox
            closeModal={setShowModal.bind(null, false)}
            positioning="fixed top-12 text-white pr-3"
          >
            <>
              <div className="flex">
                <div className="mx-2 flex flex-col items-center">
                  <div>
                    <ProfileIcon />
                  </div>
                  <div className="grow border border-slate-500" />
                </div>

                <div className="mx-2">
                  <TweetHeader
                    displayName={displayName}
                    account={account}
                    date={date}
                  />
                  <p className="mb-4 max-w-[500px] text-sm">
                    {body ? body : medias?.map((media) => media.src).join(" ")}
                  </p>
                  <div className="mb-4">
                    <span className="text-gray-500">Replying to </span>
                    <span className="text-twitter-blue">@{account}</span>
                  </div>
                </div>
              </div>
              <div className="p-2">
                <div className="flex gap-4 pb-8">
                  <div>
                    <ProfileIcon />
                  </div>
                  <textarea
                    className="w-full resize-none bg-black outline-none"
                    placeholder="Tweet your reply!"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <TweetFormIcons />
                <button className="rounded-full bg-twitter-blue px-4 py-1 font-semibold">
                  Reply
                </button>
              </div>
            </>
          </ModalBox>
        </ModalBackdrop>
      )}
      <IconButton
        Icon={ReplyIcon}
        value={value}
        text="Reply"
        handleClick={setShowModal.bind(null, true)}
      />
    </>
  );
};
export default Reply;
