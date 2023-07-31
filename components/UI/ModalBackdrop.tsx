import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ModalBackdropProps = {
  closeModal: () => void;
  children?: React.JSX.Element;
  background?: string;
  scroll?: boolean;
  position?: string;
};

const ModalBackdrop: React.FC<ModalBackdropProps> = ({
  closeModal,
  background = "bg-[#5b708366]",
  scroll = false,
  children,
  position = "items-center justify-center"
}) => {
  useEffect(() => {
    function handleEscapeKey(e: KeyboardEvent) {
      if (e.code === "Escape") {
        closeModal();
      }
    }
    if (!scroll) {
      document.body.style.overflow = "hidden";
    }
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [scroll, closeModal]);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        closeModal();
      }}
      className={`fixed left-0 top-0 h-screen w-screen ${background} z-10 flex ${position}`}
    >
      {children}
    </div>
  );
};
export default ModalBackdrop;
