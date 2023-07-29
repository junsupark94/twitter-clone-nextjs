"use client";
import useDiscardModalStore from "@/app/store/discard-modal-store";
import React from "react";
import ModalBackdrop from "../UI/ModalBackdrop";
import ModalBox from "../UI/ModalBox";
import useToastStore from "@/app/store/toast-store";
import useDraftsModalStore from "@/app/store/drafts-modal-store";

type DiscardModalProps = {};

const DiscardModal: React.FC<DiscardModalProps> = () => {
  const [isVisible, closeModal, closeSourceModal, setSourceModal, draft] =
    useDiscardModalStore((state) => [
      state.isVisible,
      state.closeModal,
      state.closeSourceModal,
      state.setSourceModal,
      state.draft
    ]);
  const [showToast, hideToast, setDraftToast] = useToastStore((state) => [
    state.showToast,
    state.hideToast,
    state.setDraftToast,
  ]);
  const saveDraft = useDraftsModalStore(state => state.saveDraft)

  if (!isVisible) return null;

  const saveHandler = () => {
    setDraftToast(true);
    showToast("Your draft was saved.");
    closeModal();
    closeSourceModal();
    saveDraft(draft);
    setTimeout(() => {
      setDraftToast(false);
      hideToast();
    }, 5000);
  };

  const discardHandler = () => {
    closeModal();
    closeSourceModal();
    setSourceModal(null);
  };

  return (
    <ModalBackdrop closeModal={closeModal}>
      <ModalBox
        closeModal={closeModal}
        addButton={false}
        width="w-[320px]"
        positioning="h-[260px] p-8"
      >
        <>
          <div className="text-[20px] font-bold">Save Tweet?</div>
          <div className="text-[15px] text-gray-500">
            You can save this to send later from your drafts.
          </div>
          <button
            className="mb-3 mt-6 block min-h-[44px] w-full min-w-[44px] rounded-full bg-[#eff3f4] px-6 font-bold text-black"
            onClick={saveHandler}
          >
            Save
          </button>
          <button
            className="block min-h-[44px] w-full min-w-[44px] rounded-full border border-[#536471] px-6 font-bold"
            onClick={discardHandler}
          >
            Discard
          </button>
        </>
      </ModalBox>
    </ModalBackdrop>
  );
};
export default DiscardModal;
