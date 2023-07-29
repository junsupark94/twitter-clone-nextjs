"use client";
import React from "react";
import useToastStore from "@/app/store/toast-store";
import useDraftsModalStore from "@/app/store/drafts-modal-store";

type ToastProps = {};

const Toast: React.FC<ToastProps> = () => {
  const [toastVisible, toastMessage, draftToast, hideToast, setDraftToast] = useToastStore((state) => [
    state.visible,
    state.message,
    state.draftToast,
    state.hideToast,
    state.setDraftToast
  ]);
  const [openDraftsModal] = useDraftsModalStore(state => [state.openModal])

  if (!toastVisible) return null;

  const viewDraftsHandler = () => {
    hideToast();
    setDraftToast(false);
    openDraftsModal();
  }

  const viewDraftsButton = <button onClick={viewDraftsHandler} className=" ml-2 font-bold hover:underline">View</button>
  return (
    <div className="fixed bottom-4 left-0 flex w-screen justify-center z-30">
      <div className="bg-twitter-blue px-4 py-2">{toastMessage}{draftToast && viewDraftsButton}</div>
    </div>
  );
};
export default Toast;
