import QuoteTweetIcon from "@mui/icons-material/Create";
import RetweetIcon from "@mui/icons-material/RepeatOutlined";
import ModalBackdrop from "@/components/UI/ModalBackdrop";
import { useEffect, useRef, useState } from "react";

export default function RetweetMenu({
  closeModal,
  retweetHandler,
  quoteTweetHandler,
}: {
  closeModal: () => void;
  retweetHandler: () => void;
  quoteTweetHandler: () => void;
}) {
  const [animate, setAnimate] = useState("max-h-0")
  useEffect(() => {
    setAnimate("max-h-40")
  }, [])

  return (
    <>
      <ModalBackdrop closeModal={closeModal} background="" scroll={true} />
      <div className={`bg-black absolute rounded-xl top-0 right-0 shadow-highlight z-10 text-white text-sm font-bold w-max overflow-hidden transition-[max-height] ${animate}`}>
        <button
          onClick={retweetHandler}
          className="flex gap-2 m-4 items-center"
        >
          <RetweetIcon />
          Retweet
        </button>
        <button
          onClick={quoteTweetHandler}
          className="flex gap-2 m-4 items-center"
        >
          <QuoteTweetIcon />
          Quote Tweet
        </button>
      </div>
    </>
  );
}