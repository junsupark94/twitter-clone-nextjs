import React from "react";

type ModalBoxProps = {
  closeModal: () => void;
  children: JSX.Element;
  positioning?: string;
  addButton?: boolean;
};

const ModalBox: React.FC<ModalBoxProps> = ({
  closeModal,
  children,
  positioning,
  addButton = true,
}) => {
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
      className={`${positioning} min-w-[600px] rounded-2xl bg-black p-1 pb-4`}
    >
      {addButton && button}
      {children}
    </div>
  );
};
export default ModalBox;
