import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  closeModal: () => void;
  children: React.JSX.Element;
};

const Modal: React.FC<ModalProps> = ({ closeModal, children }) => {
  useEffect(() => {
    function handleEscapeKey(e: KeyboardEvent) {
      if (e.code === "Escape") {
        closeModal();
      }
    }
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [closeModal]);

  return createPortal(
    <div
      onClick={closeModal}
      className="fixed top-0 left-0 w-screen h-screen bg-gray-700/50 flex items-center justify-center"
    >
      {children}
    </div>,
    document.body
  );
};
export default Modal;
