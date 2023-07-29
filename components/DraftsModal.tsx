"use client";
import React, { ChangeEventHandler, useState } from "react";
import ModalBackdrop from "./UI/ModalBackdrop";
import useDraftsModalStore from "@/app/store/drafts-modal-store";
import ModalBox from "./UI/ModalBox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useModalHeader from "./UI/useModalHeader";
import ReplyIcon from "@mui/icons-material/ModeComment";
import Image from "next/image";
import scheduled from "@/public/scheduled.png";
import RetweetIcon from "@mui/icons-material/RepeatOutlined";
import useToastStore from "@/app/store/toast-store";

type DraftsModalProps = {};

const DraftsModal: React.FC<DraftsModalProps> = () => {
  const [isVisible, closeModal, drafts, deleteDrafts] = useDraftsModalStore(
    (state) => [
      state.isVisible,
      state.closeModal,
      state.drafts,
      state.deleteDrafts,
    ],
  );
  const [isEditting, setIsEditting] = useState(false);
  const [draftsSelected, setDraftsSelected] = useState<number[]>([]);
  const [showToast, hideToast] = useToastStore((state) => [
    state.showToast,
    state.hideToast,
  ]);

  const options = ["Unsent Tweets", "Scheduled"];
  const { selected, header } = useModalHeader(options);

  const closeModalHandler = () => {
    setIsEditting(false);
    closeModal();
  };

  const selectAllHandler = () => {
    setDraftsSelected(drafts.map((draft) => draft.id));
  };

  const deleteHandler = () => {
    deleteDrafts(draftsSelected);
    setDraftsSelected([]);
    showToast("Your selected unsent Tweets were deleted");
    setTimeout(() => hideToast(), 5000);
  };

  if (!isVisible) return null;

  return (
    <ModalBackdrop closeModal={closeModalHandler}>
      <ModalBox
        closeModal={closeModalHandler}
        addButton={false}
        positioning="fixed top-[5%] max-h-[90vh] max-w-[80vw]"
      >
        <>
          <div className="mb-2 flex items-center justify-between p-1">
            <div className="flex items-center gap-4">
              <button
                onClick={closeModalHandler}
                className="h-9 w-9 rounded-full text-[20px] hover:bg-color-hover"
              >
                <ArrowBackIcon fontSize="inherit" />
              </button>
              <span className="text-[20px] font-bold">Drafts</span>
            </div>
            <button
              onClick={() => setIsEditting((prev) => !prev)}
              className="min-h-[32px] min-w-[32px] rounded-full bg-[#eff3f4] px-4 text-[14px] font-bold text-black hover:bg-[#d7dbdc]"
            >
              {isEditting ? "Done" : "Edit"}
            </button>
          </div>
          {/*  */}
          {header}
          <div className="-mx-1 -mt-2 h-[600px]">
            <div
              className={`${
                selected === options[0] ? "flex flex-col" : "hidden"
              }`}
            >
              {drafts.map((draft) => (
                <label
                  key={draft.id}
                  className="flex cursor-pointer items-center border-b border-[#2f3336] px-4 py-3 transition hover:bg-[#16181c]"
                  onClick={() => {}}
                >
                  {isEditting && (
                    <div className="pr-4">
                      <div className="-m-2 rounded-full p-2 transition hover:bg-[#1d9bf01a]">
                        <input
                          type="checkbox"
                          className="grid h-5 w-5 appearance-none place-content-center rounded-[4px] border-2 border-[#71767b] checked:bg-twitter-blue checked:before:content-['✓']"
                          checked={draftsSelected.includes(draft.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setDraftsSelected((state) => [
                                ...state,
                                draft.id,
                              ]);
                            } else {
                              setDraftsSelected((state) =>
                                state.filter((id) => id !== draft.id),
                              );
                            }
                          }}
                        />
                      </div>
                    </div>
                  )}
                  <div>
                    <div className="mb-[2px] flex items-center text-[#71767b]">
                      {draft.replying && (
                        <>
                          <ReplyIcon className="mr-3 text-[16px]" />
                          <span className="text-[13px]">
                            Replying to @{draft.replying}
                          </span>
                        </>
                      )}
                      {draft.quoteTweetUrl && (
                        <>
                          <RetweetIcon className="mr-3 text-[16px]" />
                          <span className="text-[13px]">
                            {draft.quoteTweetUrl}
                          </span>
                        </>
                      )}
                    </div>
                    <div className="mt-1 text-[15px] text-[#e7e9ea]">
                      {draft.body}
                    </div>
                  </div>
                </label>
              ))}
              <div></div>
            </div>
            <div
              className={`${
                selected === options[1] ? "flex" : "hidden"
              } h-[600px] flex-col items-center`}
            >
              <div className="mx-auto max-w-[400px] p-8">
                <Image src={scheduled} alt="Alarm clock" className="my-4" />
                <div className="mb-2 text-3xl font-extrabold text-[#e7e9ea]">
                  Hold that thought
                </div>
                <div className="text-[15px] text-[#71767b]">{`Not read to send a Tweet just yet? Save it to your drafts or schedule it for later. (This function is not available in this demo app.)`}</div>
              </div>
            </div>
          </div>
          <div
            className={`${
              isEditting ? "flex" : "hidden"
            } -mb-4 justify-between border-t border-[#2f3336] p-1 text-[15px]`}
          >
            {draftsSelected.length === 0 && (
              <button
                onClick={selectAllHandler}
                className="min-h-[36px] min-w-[36px] rounded-full px-4 font-bold text-twitter-blue hover:bg-[#1d9bf019]"
              >
                Select all
              </button>
            )}
            {draftsSelected.length > 0 && (
              <button
                onClick={() => setDraftsSelected([])}
                className="min-h-[36px] min-w-[36px] rounded-full px-4 font-bold text-twitter-blue hover:bg-[#1d9bf019]"
              >
                Deselect all
              </button>
            )}
            <button
              className={`rounded-full px-4 text-[15px] font-bold text-[#f4212e] ${
                draftsSelected.length === 0
                  ? "pointer-events-none opacity-50"
                  : "hover:bg-[#f4212e1a]"
              }`}
              onClick={deleteHandler}
            >
              Delete
            </button>
          </div>
        </>
      </ModalBox>
    </ModalBackdrop>
  );
};
export default DraftsModal;
