"use client";
import React, { useState } from "react";
import ModalBackdrop from "../UI/ModalBackdrop";
import useTweetsStore from "@/app/store/tweets-store";
import ModalBox from "../UI/ModalBox";
import WhoCanReplyMenu from "../TweetForm/WhoCanReplyMenu";
import TweetFormIcons from "../TweetForm/TweetFormIcons";
import ProfileIcon from "../ProfileIcon";
import AudienceMenu from "../AudienceMenu";
import useAutoSizeTextArea from "../UI/useAutoSizeTextArea";
import useDiscardModalStore from "@/app/store/discard-modal-store";

type TweetModalProps = {};

const TweetModal: React.FC<TweetModalProps> = () => {
  const [isTweetModalVisible, closeModal] = useTweetsStore((state) => [
    state.isVisible,
    state.closeModal,
  ]);
  const [openDiscardModal, setSourceModal] = useDiscardModalStore((state) => [
    state.openModal,
    state.setSourceModal,
  ]);
  const [audience, setAudience] = useState("Everyone");
  const [showAudienceMenu, setShowAudienceMenu] = useState(false);
  const { AutoSizeTextArea, value, setValue } = useAutoSizeTextArea(
    "What is happening?!",
    100,
  );

  if (!isTweetModalVisible) return null;

  const closeModalHandler = () => {
    if (value.trim() !== "") {
      setSourceModal(() => {
        setValue('');
        closeModal();
      });
      openDiscardModal({body: value, id: 0});
    } else {
      closeModal();
    }
  };

  return (
    <ModalBackdrop closeModal={closeModalHandler}>
      <ModalBox showDraft closeModal={closeModalHandler} positioning="fixed top-12">
        <>
          <div className="flex gap-3 p-2">
            <div>
              <ProfileIcon />
            </div>

            <div className="grow">
              <div>
                <button
                  onClick={setShowAudienceMenu.bind(null, true)}
                  className={`relative mb-4 flex justify-center rounded-full border px-2 py-1 text-xs font-bold ${
                    audience === "Twitter Circle"
                      ? "border-[#00BA7C] text-[#00BA7C]"
                      : "border-blue-500 text-twitter-blue"
                  }`}
                >
                  {audience} ∨
                  {showAudienceMenu && (
                    <AudienceMenu
                      closeModal={setShowAudienceMenu.bind(null, false)}
                      audience={audience}
                      setAudience={setAudience}
                    />
                  )}
                </button>
                {AutoSizeTextArea}
              </div>
            </div>
          </div>

          <div className="mx-2">
            <WhoCanReplyMenu audience={audience} />
          </div>
          <div className="mr-1 mt-2 flex items-center justify-between">
            <TweetFormIcons />
            <button
              className={`rounded-full bg-twitter-blue ${
                value === "" && "brightness-50"
              } p-2 px-5 font-bold`}
              // onClick={submitTweetHandler}
            >
              Tweet
            </button>
          </div>
        </>
      </ModalBox>
    </ModalBackdrop>
  );
};
export default TweetModal;
