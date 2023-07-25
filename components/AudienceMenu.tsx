import { Dispatch, SetStateAction, useState } from "react";
import PublicIcon from "@mui/icons-material/Public";
import TwitterCircleIcon from "@mui/icons-material/People";
import ModalBackdrop from "./UI/ModalBackdrop";
import ModalBox from "./UI/ModalBox";
import useCircleModal from "@/app/store/circle-modal-store";

export default function AudienceMenu({
  closeModal,
  audience,
  setAudience,
}: {
  closeModal: () => void;
  audience: string;
  setAudience: Dispatch<SetStateAction<string>>;
}) {
  const openCircleModal = useCircleModal((state) => state.openModal);

  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
          closeModal();
        }}
        className="fixed left-0 top-0 z-10 h-screen w-screen cursor-default"
      />
      <div className="absolute top-7 z-20 w-56 cursor-default rounded-xl bg-black text-sm font-bold text-white shadow-highlight">
        <div className="m-4 text-start text-lg">Choose audience</div>
        <div
          className="my-4 flex cursor-pointer items-center gap-2 px-4"
          onClick={setAudience.bind(null, "Everyone")}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-twitter-blue">
            <PublicIcon />
          </div>
          <div className="flex grow justify-between">
            <span>Everyone</span>
            {audience === "Everyone" && (
              <span className="text-twitter-blue">✓</span>
            )}
          </div>
        </div>
        <div
          className="my-4 flex cursor-pointer items-center gap-2 px-4"
          onClick={setAudience.bind(null, "Twitter Circle")}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00BA7C]">
            <TwitterCircleIcon />
          </div>
          <div className="flex grow items-center justify-between text-start">
            <div>
              <div>Twitter Circle</div>
              <div className="space-x-1">
                <span>
                  0 <span className="font-normal text-gray-500">People</span>
                </span>
                <span
                  className="underline transition hover:bg-color-hover"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeModal();
                    openCircleModal();
                  }}
                >
                  Edit
                </span>
              </div>
            </div>
            {audience === "Twitter Circle" && (
              <div className="text-twitter-blue">✓</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
