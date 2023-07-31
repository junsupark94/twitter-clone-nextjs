"use client";
import useMediaModalStore from "@/app/store/media-modal";
import React from "react";
import ModalBackdrop from "../UI/ModalBackdrop";
import Image from "next/image";

type MediaModalProps = {};

const MediaModal: React.FC<MediaModalProps> = () => {
  const [isVisible, tweet, closeModal] = useMediaModalStore((state) => [
    state.isVisible,
    state.tweet,
    state.closeModal,
  ]);

  if (!isVisible) return null;
  if (!tweet.medias) return null;

  const { type, src } = tweet.medias[0];

  return (
    <ModalBackdrop closeModal={closeModal} background="bg-[#000000e5]" position="">
      <div className="flex w-screen">
        <div className="relative grow">
          <Image
            src={src}
            alt="image"
            fill
            sizes="100vh"
            className="object-contain"
          />
        </div>
        {/* <div className="h-screen w-[350px] bg-black">

        </div> */}
      </div>
    </ModalBackdrop>
  );
};
export default MediaModal;
