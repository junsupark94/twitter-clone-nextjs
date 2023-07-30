'use client'
import React, { useEffect, useRef, useState } from "react";
import { Media } from "../Misc/tweet-data";
import Image from "next/image";

type MediaDisplayProps = {
  medias: Media[];
};

// TODO: Figure out aspect ratio for 1 media, figure out how to make the grid for 2-4 medias

const mediaType = ({ type, src }: Media) => {
  if (type === "photo") {
    return (
      <Image
        key={src}
        src={src}
        alt="Image"
        fill
        sizes="(max-width: 600px) 600px, (min-width:600px) 100vw"
        className="border border-green-500 object-cover "
      />
    );
  } else {
    return (
      <video key={src} src={src} controls className="h-auto max-w-[50%]" />
    );
  }
};

const MediaDisplay: React.FC<MediaDisplayProps> = ({ medias }) => {
  if (medias.length === 2 || medias.length === 4) {
    return (
      <div className="relative flex h-[290px]">
        {medias.map((media) => mediaType(media))}
      </div>
    );
  }
  if (medias.length === 3) {
    return (
      <div className="relative flex h-[290px]">
        <div className="relative grow">{mediaType(medias[0])}</div>
        <div className="relative flex grow">
          <div className="grow border border-purple-500">
            {mediaType(medias[1])}
          </div>
          <div className="grow">{mediaType(medias[2])}</div>
        </div>
      </div>
    );
  }
};
export default MediaDisplay;
