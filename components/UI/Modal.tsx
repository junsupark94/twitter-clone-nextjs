import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  closeModal: () => void;
  children?: React.JSX.Element;
  background?: string;
  scroll?: boolean;
};

const Modal: React.FC<ModalProps> = ({
  closeModal,
  background = "bg-gray-700/50",
  scroll = false,
  children,
}) => {
  useEffect(() => {
    function handleEscapeKey(e: KeyboardEvent) {
      if (e.code === "Escape") {
        closeModal();
      }
    }
    if(!scroll) {
      document.body.style.overflow = "hidden";
    }
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [closeModal]);

  return createPortal(
    <div
      onClick={closeModal}
      className={`fixed top-0 left-0 w-screen h-screen ${background} flex items-center justify-center`}
    >
      {children}
    </div>,
    document.body
  );
};
export default Modal;
