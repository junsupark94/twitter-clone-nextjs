"use client";
import React, { useState } from "react";
import ModalBackdrop from "./UI/ModalBackdrop";
import ModalBox from "./UI/ModalBox";
import useCircleModal from "@/app/store/circle-modal-store";
import useModalHeader from "./UI/useModalHeader";

type EditTwitterCircleModalProps = {};

const EditTwitterCircleModal: React.FC<EditTwitterCircleModalProps> = () => {
  const [isVisible, closeModal] = useCircleModal((state) => [
    state.isVisible,
    state.closeModal,
  ]);
  const options = ["Twitter Circle", "Recommended"];
  const { selected, header } = useModalHeader(options);

  if (!isVisible) return null;

  return (
    <ModalBackdrop closeModal={closeModal}>
      <ModalBox closeModal={closeModal} addButton={false}>
        <div className="min-h-[600px] font-bold">
          <div className="flex items-center gap-4">
            <button
              onClick={closeModal}
              className="m-2 h-9 w-9 rounded-full hover:bg-color-hover"
            >
              X
            </button>
            <div className="text-xl ">Edit your Twitter Circle</div>
          </div>
          {header}
          <div className="max-w-[600px]">
            <div className={`flex-col items-center ${selected === options[0] ? "flex" : "hidden"}`}>
              <div className="p-4 px-9 text-sm font-normal text-gray-500">
                People won’t be notified when you edit your Twitter Circle.
                Anyone you add will be able to see your previous Twitter Circle
                Tweets.
                <span className="font-bold text-white underline">
                  How it works
                </span>
              </div>
              <div className="flex w-[400px] flex-col gap-2 text-left">
                <span className="text-4xl">
                  {`There isn't anyone in your Twitter Circle — yet`}
                </span>
                <span className="font-normal text-gray-500">
                  {`When you add people, they'll show up here.`}
                </span>
              </div>
            </div>

            <div className={`${selected === options[1] ? "flex" : "hidden"}`}>
              Test
            </div>
          </div>
        </div>
      </ModalBox>
    </ModalBackdrop>
  );
};
export default EditTwitterCircleModal;
