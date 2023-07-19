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
    <div className="fixed bottom-4 left-0 flex w-screen justify-center">
      <div className="bg-twitter-blue px-4 py-2">{toastMessage}</div>
    </div>
  );
};
export default Toast;
