"use client";
import React from "react";
import useToastStore from "@/app/store/toast-store";

type ToastProps = {};

const Toast: React.FC<ToastProps> = () => {
  const [toastVisible, toastMessage] = useToastStore((state) => [
    state.visible,
    state.message,
  ]);
  if (!toastVisible) return null;
  return (
    <div className="fixed left-0 bottom-4 w-screen flex justify-center">
      <div className="bg-twitter-blue py-2 px-4">{toastMessage}</div>
    </div>
  );
};
export default Toast;
