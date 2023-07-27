'use client'
import React from "react";
import ModalBackdrop from "../UI/ModalBackdrop";
import useTweetsStore from "@/app/store/tweets-store";
import ModalBox from "../UI/ModalBox";

type TweetModalProps = {};

const TweetModal: React.FC<TweetModalProps> = () => {
  const { isModalVisible, closeModal } = useTweetsStore((state) => ({
    isModalVisible: state.isModalVisible,
    closeModal: state.closeModal,
  }));

  if (!isModalVisible) return null;

  return <ModalBackdrop closeModal={closeModal}>
    <ModalBox closeModal={closeModal} positioning="fixed top-12">
      <div>
        Test
      </div>
    </ModalBox>
  </ModalBackdrop>;
};
export default TweetModal;
