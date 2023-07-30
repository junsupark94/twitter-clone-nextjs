"use client";
import React, { useEffect, useRef, useState } from "react";
import { Media } from "../Misc/tweet-data";
import Image from "next/image";

type SingleMediaDisplayProps = {
  medias: Media[];
};

const SingleMediaDisplay: React.FC<SingleMediaDisplayProps> = ({ medias }) => {
  const ref = useRef<HTMLImageElement & HTMLVideoElement>(null);
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
      const factor = scrollHeight/510;
      ref.current.style.width = `${scrollWidth/factor}px`
    }
  }, [ref]);

  return (
    <div className="h-[290px]z relative">
      {medias[0].type === "photo" && (
        <Image
          src={medias[0].src}
          alt="Image"
          className="rounded-2xl object-cover shadow-sm shadow-white"
          width={512}
          height={512}
          ref={ref}
        />
      )}
      {medias[0].type === "video" && (
        <video
          key={medias[0].src}
          src={medias[0].src}
          controls
          className="h-full"
          ref={ref}
        />
      )}
    </div>
  );
};
export default SingleMediaDisplay;
