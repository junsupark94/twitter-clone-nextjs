'use client'
import useDiscardModalStore from "@/app/store/discard-modal-store";
import React from "react";
import ModalBackdrop from "./UI/ModalBackdrop";
import ModalBox from "./UI/ModalBox";

type DiscardModalProps = {};

const DiscardModal: React.FC<DiscardModalProps> = () => {
  const {isVisible, closeModal} = useDiscardModalStore((state) => ({
    isVisible: state.isModalVisible, closeModal: state.closeModal,
  }));

  if (!isVisible) return null;

  return <ModalBackdrop closeModal={closeModal} >
    <ModalBox closeModal={closeModal} addButton={false} width="w-[320px]" positioning="h-[260px] p-8">
      <>
      <div className="font-bold text-[20px]">Save Tweet?</div>
      <div className="text-[15px] text-gray-500">You can save this to send later from your drafts.</div>
      <button className="block w-full min-h-[44px] min-w-[44px] rounded-full mb-3 mt-6 px-6 bg-[#eff3f4] text-black font-bold">Save</button>
      <button className="block w-full min-h-[44px] min-w-[44px] rounded-full px-6 border border-[#536471] font-bold">Discard</button>
      </>
    </ModalBox>
  </ModalBackdrop>
};
export default DiscardModal;
