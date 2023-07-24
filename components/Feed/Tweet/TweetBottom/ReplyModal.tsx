'use client'
import ModalBackdrop from '@/components/UI/ModalBackdrop';
import ModalBox from '@/components/UI/ModalBox';
import React from 'react';
import TweetHeader from '../TweetHeader';
import ProfileIcon from '@/components/SideBar/ProfileIcon';
import TweetFormIcons from '../../TweetForm/TweetFormIcons';
import useReplyStore from './reply-store';
import { useRouter } from 'next/navigation';

type ReplyModalProps = {

};

const ReplyModal:React.FC<ReplyModalProps> = () => {
  const [isVisible, closeModal, data] = useReplyStore(state => [state.isVisible, state.closeModal, state.data]);
  const router = useRouter();
  const {displayName, account, date, body, medias} = data;

  if (!isVisible) return null;

  const closeModalHandler = () => {
    router.push('/home');
    closeModal();
  }

  return <ModalBackdrop closeModal={closeModalHandler}>
  <ModalBox
    closeModal={closeModalHandler}
    positioning="fixed top-12 text-white pr-3"
  >
    <>
      <div className="flex">
        <div className="mx-2 flex flex-col items-center">
          <div>
            <ProfileIcon />
          </div>
          <div className="grow border border-slate-500" />
        </div>

        <div className="mx-2">
          <TweetHeader
            displayName={displayName}
            account={account}
            date={date}
          />
          <p className="mb-4 max-w-[500px] text-sm">
            {body ? body : medias?.map((media) => media.src).join(" ")}
          </p>
          <div className="mb-4">
            <span className="text-gray-500">Replying to </span>
            <span className="text-twitter-blue">@{account}</span>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="flex gap-4 pb-8">
          <div>
            <ProfileIcon />
          </div>
          <textarea
            className="w-full resize-none bg-black outline-none"
            placeholder="Tweet your reply!"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <TweetFormIcons />
        <button className="rounded-full bg-twitter-blue px-4 py-1 font-semibold">
          Reply
        </button>
      </div>
    </>
  </ModalBox>
</ModalBackdrop>
}
export default ReplyModal;