"use client";
import React, { useState } from "react";
import ModalBackdrop from "./UI/ModalBackdrop";
import ModalBox from "./UI/ModalBox";
import useCircleModal from "@/app/store/circle-modal-store";
import useModalHeader from "./UI/useModalHeader";
import SearchIcon from "@mui/icons-material/Search";

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
            <div
              className={`flex-col items-center ${
                selected === options[0] ? "flex" : "hidden"
              }`}
            >
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

            <div
              className={`${
                selected === options[1] ? "flex" : "hidden"
              } flex-col font-normal`}
            >
              <div className="flex min-h-[40px] grow items-center justify-center rounded-full border border-[#71767b] text-[14px] text-[#71767b]">
                <SearchIcon /> Search People
              </div>
              <div className="mx-8 text-center text-[15px] text-[#71767b]">
                People won’t be notified when you edit your Twitter Circle.
                Anyone you add will be able to see your previous Twitter Circle
                Tweets.{" "}
                <span className="font-bold text-white underline">
                  How it works
                </span>
              </div>
              <div className="flex flex-col px-8 my-8 mx-auto max-w-[400px]">
                <div className="font-extrabold text-3xl mb-2" >You don’t have any recommendations — yet</div>
                <div className="text-[#71767b] text-sm">
                  {`We’ll suggest people to add to your Twitter Circle here. (This is not functional)`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalBox>
    </ModalBackdrop>
  );
};
export default EditTwitterCircleModal;
