import React from "react";
import TweetFormIcons from "../Feed/TweetForm/TweetFormIcons";

type ModalBoxProps = {
  closeModal: () => void;
  children: JSX.Element;
  positioning?: string;
};

const ModalBox: React.FC<ModalBoxProps> = ({
  closeModal,
  children,
  positioning,
}) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${positioning} min-w-[600px] rounded-2xl bg-black p-1 pb-4`}
    >
      <button
        onClick={closeModal}
        className="m-2 h-9 w-9 rounded-full hover:bg-color-hover"
      >
        X
      </button>
      {children}
    </div>
  );
};
export default ModalBox;
