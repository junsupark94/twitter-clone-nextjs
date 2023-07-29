"use client";
import React, { useState } from "react";
import ModalBackdrop from "./UI/ModalBackdrop";
import useDraftsModalStore from "@/app/store/drafts-modal-store";
import ModalBox from "./UI/ModalBox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useModalHeader from "./UI/useModalHeader";
import ReplyIcon from "@mui/icons-material/ModeComment";
import Image from "next/image";
import scheduled from "@/public/scheduled.png"

type DraftsModalProps = {};

const DraftsModal: React.FC<DraftsModalProps> = () => {
  const [isVisible, closeModal, drafts] = useDraftsModalStore((state) => [
    state.isVisible,
    state.closeModal,
    state.drafts,
  ]);

  const options = ["Unsent Tweets", "Scheduled"];
  const { selected, header } = useModalHeader(options);

  if (!isVisible) return null;

  return (
    <ModalBackdrop closeModal={closeModal}>
      <ModalBox
        closeModal={closeModal}
        addButton={false}
        positioning="fixed top-[5%] max-h-[90vh] max-w-[80vw]"
      >
        <>
          <div className="mb-2 flex items-center justify-between p-1">
            <div className="flex items-center gap-4">
              <button onClick={closeModal} className="h-9 w-9 rounded-full text-[20px] hover:bg-color-hover">
                <ArrowBackIcon fontSize="inherit" />
              </button>
              <span className="text-[20px] font-bold">Drafts</span>
            </div>
            <button className="min-h-[32px] min-w-[32px] rounded-full bg-[#eff3f4] px-4 font-bold text-black hover:bg-[#d7dbdc]">
              Edit
            </button>
          </div>
          {/*  */}
          {header}
          <div className="-mx-1 -mt-2 h-[600px]">
            <div className={`${selected === options[0] ? "flex flex-col" : "hidden"}`}>
              {drafts.map((draft) => (
                <div
                  key={draft.id}
                  className="border-b border-[#2f3336] px-4 py-3 hover:bg-[#16181c] transition"
                >
                  {draft.replying && (
                    <div className="mb-[2px] flex items-center text-[#71767b]">
                      <ReplyIcon className="mr-3 text-[16px]" />{" "}
                      <span className="text-[13px]">
                        Replying to @{draft.replying}
                      </span>
                    </div>
                  )}
                  <div className="mt-1 text-[15px] text-[#e7e9ea]">
                    {draft.body}
                  </div>
                </div>
              ))}
            </div>
            <div className={`${selected === options[1] ? "flex" : "hidden"} flex-col items-center h-[600px]`}>
              <div className="p-8 mx-auto max-w-[400px]">
                <Image src={scheduled} alt="Alarm clock" className="my-4"/>
                <div className="mb-2 font-extrabold text-3xl text-[#e7e9ea]">Hold that thought</div>
                <div className="text-[#71767b] text-[15px]">{`Not read to send a Tweet just yet? Save it to your drafts or schedule it for later. (This function is not available in this demo app.)`}</div>
              </div>
            </div>
          </div>
        </>
      </ModalBox>
    </ModalBackdrop>
  );
};
export default DraftsModal;
