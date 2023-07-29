"use client";
import ModalBackdrop from "@/components/UI/ModalBackdrop";
import ModalBox from "@/components/UI/ModalBox";
import React from "react";
import TweetHeader from "../../TweetHeader";
import useReplyStore from "./reply-store";
import ProfileIcon from "@/components/ProfileIcon";
import TweetFormIcons from "@/components/TweetForm/TweetFormIcons";
import useAutoSizeTextArea from "@/components/UI/useAutoSizeTextArea";
import useDiscardModalStore from "@/app/store/discard-modal-store";

type ReplyModalProps = {};

const ReplyModal: React.FC<ReplyModalProps> = () => {
  const { AutoSizeTextArea, value, setValue } =
    useAutoSizeTextArea("Tweet your reply!");
  const [isVisible, closeModal, data] = useReplyStore((state) => [
    state.isVisible,
    state.closeModal,
    state.data,
  ]);
  const { displayName, account, date, body, medias } = data;
  const [openDiscardModal, setSourceModal] = useDiscardModalStore((state) => [
    state.openModal,
    state.setSourceModal,
  ]);

  if (!isVisible) return null;

  const closeModalHandler = () => {
    if (value.trim() !== "") {
      setSourceModal(() => {
        setValue("");
        closeModal();
      });
      openDiscardModal({
        body: value,
        replying: account,
        date: date,
        replyBody: body,
        replyMedia: medias,
        id: 0
      });
    } else closeModal();
  };

  return (
    <ModalBackdrop closeModal={closeModalHandler}>
      <ModalBox
        showDraft
        closeModal={closeModalHandler}
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
                {body ? body : medias?.map((media: any) => media.src).join(" ")}
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
              {AutoSizeTextArea}
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
  );
};
export default ReplyModal;
