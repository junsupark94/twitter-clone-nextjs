import React, { useState } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  closeModal: (e: any) => void;
  children: React.JSX.Element;
};

const Modal: React.FC<ModalProps> = ({ closeModal, children }) => {
  return createPortal(
    <div
      onClick={closeModal}
      className="fixed top-0 left-0 w-screen h-screen bg-gray-700/50"
    >
      {children}
    </div>,
    document.body
  );
};
export default Modal;
