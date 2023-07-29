import useDraftsModalStore from "@/app/store/drafts-modal-store";
import React from "react";

type ModalBoxProps = {
  closeModal: () => void;
  children: JSX.Element;
  positioning?: string;
  addButton?: boolean;
  width?: string;
  showDraft?: boolean;
};

const ModalBox: React.FC<ModalBoxProps> = ({
  closeModal,
  children,
  positioning,
  width = "w-[600px]",
  addButton = true,
  showDraft = false,
}) => {
  const drafts = useDraftsModalStore(state => state.drafts);
  if (drafts.length === 0) {
    showDraft = false;
  }

  const button = (
    <button
      onClick={closeModal}
      className="m-2 h-9 w-9 rounded-full hover:bg-color-hover"
    >
      X
    </button>
  );
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${positioning} ${width} rounded-2xl bg-black p-1 pb-4`}
    >
      <div className="flex justify-between items-center">
        {addButton && button}
        {showDraft && (
          <button className="min-h-[32px] mr-2 px-4 min-w-[32px] rounded-full text-[14px] font-bold text-twitter-blue transition hover:bg-[#1d9bf01a]">
            Drafts
          </button>
        )}
      </div>
      {children}
    </div>
  );
};
export default ModalBox;
