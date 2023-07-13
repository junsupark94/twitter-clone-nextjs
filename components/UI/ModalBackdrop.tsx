import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ModalBackdropProps = {
  closeModal: () => void;
  children?: React.JSX.Element;
  background?: string;
  scroll?: boolean;
};

const ModalBackdrop: React.FC<ModalBackdropProps> = ({
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
  }, [scroll, closeModal]);

  return createPortal(
    <div
      onClick={(e) => {
        e.stopPropagation();
        closeModal();
      }}
      className={`fixed top-0 left-0 w-screen h-screen ${background} flex items-center justify-center`}
    >
      {children}
    </div>,
    document.body
  );
};
export default ModalBackdrop;
