import { Media } from "../Misc/tweet-data";
import Image from "next/image";

type MediaDisplayProps = {
  medias: Media[];
};

const MediaDisplay: React.FC<MediaDisplayProps> = ({ medias }) => {
  if (medias.length === 2 || medias.length === 4) {
    let height = 288;
    let heightPx = "h-[288px]";
    if (medias.length === 4) {
      height = 143;
      heightPx = "h-[143px]";
    }
    return (
      <div className="grid h-[288px] w-[512px] grid-cols-2 overflow-hidden rounded-2xl border border-gray-600">
        {medias.map((media) => {
          if (media.type === "photo") {
            return (
              <Image
                key={media.src}
                src={media.src}
                alt="Image"
                width={255}
                height={height}
                className={`w-[255px] object-cover ${heightPx}`}
              />
            );
          } else {
            return <video
              key={media.src}
              src={media.src}
              controls
              className={`w-[255px] object-contain ${heightPx}`}
            />;
          }
        })}
      </div>
    );
  }
  return (
    <div className="grid h-[288px] w-[512px] grid-cols-2 overflow-hidden rounded-2xl border border-gray-600">
      {medias.map((media, index) => {
        if (media.type === "photo") {
          return (
            <Image
              key={media.src}
              src={media.src}
              alt="Image"
              width={255}
              height={288}
              className={`w-[255px] object-cover ${
                index === 0 ? "h-[288px]" : "h-[143px]"
              } ${index === 0 && "row-span-2"}`}
            />
          );
        } else {
          <video
            key={media.src}
            src={media.src}
            controls
            className="h-auto max-w-[50%]"
          />;
        }
      })}
    </div>
  );
};
export default MediaDisplay;
