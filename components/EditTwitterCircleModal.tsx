"use client";
import React, { useState } from "react";
import ModalBackdrop from "./UI/ModalBackdrop";
import ModalBox from "./UI/ModalBox";
import useCircleModal from "@/app/store/circle-modal-store";

type EditTwitterCircleModalProps = {};

const EditTwitterCircleModal: React.FC<EditTwitterCircleModalProps> = () => {
  const [isVisible, closeModal] = useCircleModal((state) => [
    state.isVisible,
    state.closeModal,
  ]);
  const [selected, setSelected] = useState("circle");

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
          <div className="mb-2 flex border-b border-gray-500">
            <div
              className={`flex grow justify-center pt-2 text-base transition hover:bg-color-hover`}
              onClick={() => setSelected("circle")}
            >
              <div
                className={`py-2 ${
                  selected === "circle" && "border-b-4 border-twitter-blue"
                }`}
              >
                Twitter Circle
              </div>
            </div>
            <div
              className="flex grow justify-center pt-2 text-base transition hover:bg-color-hover"
              onClick={() => setSelected("recommended")}
            >
              <div
                className={`py-2 ${
                  selected === "recommended" && "border-b-4 border-twitter-blue"
                }`}
              >
                Recommended
              </div>
            </div>
          </div>
          <div className="flex max-w-[600px] flex-col items-center">
            {selected == "circle" && (
              <>
                <div className="p-4 px-9 text-sm font-normal text-gray-500">
                  People won’t be notified when you edit your Twitter Circle.
                  Anyone you add will be able to see your previous Twitter
                  Circle Tweets.
                  <span className="font-bold text-white underline">
                    How it works
                  </span>
                </div>
                <div className="flex w-[400px] flex-col gap-2 text-left">
                  <span className="text-4xl">
                    There isn't anyone in your Twitter Circle — yet
                  </span>
                  <span className="font-normal text-gray-500">
                    When you add people, they'll show up here.
                  </span>
                </div>
              </>
            )}
            {selected == "recommended" && <div>Test</div>}
          </div>
        </div>
      </ModalBox>
    </ModalBackdrop>
  );
};
export default EditTwitterCircleModal;
