"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TweetType } from "@/app/store/tweets-store";
import useMediaModalStore from "@/app/store/media-modal";

type SingleMediaDisplayProps = {
  tweet: TweetType;
};

const SingleMediaDisplay: React.FC<SingleMediaDisplayProps> = ({ tweet }) => {
  const openMediaModal = useMediaModalStore((state) => state.openModal);
  const ref = useRef<HTMLImageElement & HTMLVideoElement>(null);
  const { medias } = tweet;
  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const scrollHeight = ref.current!.scrollHeight;
    const scrollWidth = ref.current!.scrollWidth;
    if (scrollHeight / scrollWidth > 1.33) {
      ref.current.style.width = "382.5px";
      ref.current.style.height = "512px";
    }
    if (scrollWidth / scrollHeight > 5) {
      ref.current.style.height = "102.391px";
    }
    if (scrollHeight > 510) {
      ref.current.style.height = "510px";
      const factor = scrollHeight / 510;
      ref.current.style.width = `${scrollWidth / factor}px`;
    }
  }, [ref]);

  if (!medias) return null;

  return (
    <div>
      {medias[0].type === "photo" && (
        <Image
          src={medias[0].src}
          alt="Image"
          className="cursor-pointer rounded-2xl border border-gray-600 object-cover"
          width={512}
          height={512}
          ref={ref}
          onClick={() => openMediaModal(tweet)}
        />
      )}
      {medias[0].type === "video" && (
        <video
          key={medias[0].src}
          src={medias[0].src}
          controls
          className="h-[512px] w-[512px] cursor-pointer rounded-2xl border border-gray-600"
          onClick={() => openMediaModal(tweet)}
        />
      )}
    </div>
  );
};
export default SingleMediaDisplay;
