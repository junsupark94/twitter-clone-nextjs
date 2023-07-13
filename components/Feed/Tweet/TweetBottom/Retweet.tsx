"use client";
import IconButton from "@/components/UI/IconButton";
import Modal from "@/components/UI/Modal";
import RetweetIcon from "@mui/icons-material/RepeatOutlined";
import QuoteTweetIcon from "@mui/icons-material/Create";
import { useState } from "react";
import ProfileIcon from "@/components/SideBar/ProfileIcon";
import TweetFormIcons from "../../TweetForm/TweetFormIcons";
import ModalBox from "@/components/UI/ModalBox";

type RetweetProps = {
  value: number;
};

const Retweet: React.FC<RetweetProps> = ({ value }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  let text_color = "hover:text-[#00BA7C]";
  if (isRetweeted) {
    text_color = "text-[#00BA7C]";
    value++;
  }

  const retweetHandler = () => {
    setIsRetweeted((prev) => !prev);
    setShowMenu(false);
  };

  const quoteTweetHandler = () => {
    setShowMenu(false);
    setShowModal(true);
  };

  return (
    <div className="relative">
      {showMenu && (
        <>
          <Modal
            closeModal={setShowMenu.bind(null, false)}
            background=""
            scroll={true}
          />
          <div className="bg-black absolute rounded-xl top-0 right-0 shadow-highlight z-10 text-white text-sm font-bold w-max">
            <button
              onClick={retweetHandler}
              className="flex gap-2 m-4 items-center"
            >
              <RetweetIcon />
              Retweet
            </button>
            <button
              onClick={quoteTweetHandler}
              className="flex gap-2 m-4 items-center"
            >
              <QuoteTweetIcon />
              Quote Tweet
            </button>
          </div>
        </>
      )}
      {showModal && (
        <Modal closeModal={setShowModal.bind(null, false)}>
          <ModalBox closeModal={setShowModal.bind(null, false)}>
            <div className="p-2 border">
              <div className="flex pb-8 gap-4 border border-red-500">
                <div className="border border-green-500">
                  <ProfileIcon />
                </div>
                <textarea
                  className="bg-black w-full resize-none outline-none"
                  placeholder="Tweet your reply!"
                />
              </div>
            </div>
          </ModalBox>
        </Modal>
      )}
      <IconButton
        Icon={RetweetIcon}
        text="Retweet"
        handleClick={setShowMenu.bind(null, true)}
        value={value}
        text_color={text_color}
        bgColor="group-hover:bg-[#071A14]"
      />
    </div>
  );
};
export default Retweet;
