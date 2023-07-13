"use client";
import IconButton from "@/components/UI/IconButton";
import RetweetIcon from "@mui/icons-material/RepeatOutlined";
import QuoteTweetIcon from "@mui/icons-material/Create";
import { useEffect, useState } from "react";
import ProfileIcon from "@/components/SideBar/ProfileIcon";
import ModalBox from "@/components/UI/ModalBox";
import ModalBackdrop from "@/components/UI/ModalBackdrop";
import TweetFormIcons from "../../TweetForm/TweetFormIcons";
import PublicIcon from "@mui/icons-material/Public";
import { Media } from "../../tweet-data";
import TwitterCircleIcon from "@mui/icons-material/People";

type RetweetProps = {
  data: {
    account: string;
    date: Date;
    displayName: string;
    body: string | undefined;
    medias: Media[] | undefined;
    retweeter: string | undefined;
    replying: string | number | undefined;
  };
  value: number;
};

const Retweet: React.FC<RetweetProps> = ({ data, value }) => {
  const [showRetweetMenu, setShowRetweetMenu] = useState(false);
  const [showQuoteTweetModal, setShowQuoteTweetModal] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [audience, setAudience] = useState("Everyone");
  const [showAudienceMenu, setShowAudienceMenu] = useState(false);

  let text_color = "hover:text-[#00BA7C]";
  if (isRetweeted) {
    text_color = "text-[#00BA7C]";
    value++;
  }

  const retweetHandler = () => {
    setIsRetweeted((prev) => !prev);
    setShowRetweetMenu(false);
  };

  const quoteTweetHandler = () => {
    setShowRetweetMenu(false);
    setShowQuoteTweetModal(true);
  };

  return (
    <div className="relative">
      {showRetweetMenu && (
        <RetweetMenu
          closeModal={setShowRetweetMenu.bind(null, false)}
          retweetHandler={retweetHandler}
          quoteTweetHandler={quoteTweetHandler}
        />
      )}
      {showQuoteTweetModal && (
        <ModalBackdrop closeModal={setShowQuoteTweetModal.bind(null, false)}>
          <ModalBox
            closeModal={setShowQuoteTweetModal.bind(null, false)}
            positioning="fixed top-12 text-white"
          >
            <>
              <div className="p-2 border flex">
                <div>
                  <ProfileIcon />
                </div>
                <div className="grow">
                  <div className="border-2 border-green-500">
                    <button
                      onClick={setShowAudienceMenu.bind(null, true)}
                      className="flex justify-center relative border border-blue-500 text-twitter-blue text-xs rounded-full p-1"
                    >
                      {audience} ∨
                      {showAudienceMenu && (
                        <>
                          <AudienceMenuBackdrop
                            closeModal={setShowAudienceMenu.bind(null, false)}
                          />
                          <div className="bg-black absolute rounded-xl top-7 shadow-highlight z-20 text-white text-sm font-bold w-56">
                            <div className="text-lg m-4 text-start">
                              Choose audience
                            </div>
                            <div className="flex gap-2 m-4 items-center">
                              <div className="bg-twitter-blue rounded-full w-10 h-10 flex items-center justify-center">
                                <PublicIcon />
                              </div>
                              <div className="flex grow justify-between">
                                <span>Everyone</span>
                                {audience === "Everyone" && (
                                  <span className="text-twitter-blue">✓</span>
                                )}
                              </div>
                            </div>
                            <div className="flex gap-2 m-4 items-center">
                              <div className="bg-[#00BA7C] rounded-full w-10 h-10 flex items-center justify-center">
                                <TwitterCircleIcon />
                              </div>
                              <div className="flex grow items-center justify-between text-start">
                                <div >
                                  <div>Twitter Circle</div>
                                  <div className="space-x-1">
                                    <span>
                                      0{" "}
                                      <span className="text-gray-500 font-normal">
                                        People
                                      </span>
                                    </span>
                                    <span className="underline">Edit</span>
                                  </div>
                                </div>
                                {audience === "Circle" && <div className="text-twitter-blue">✓</div>}
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </button>
                    <textarea
                      className="border w-full resize-none outline-none bg-black border-purple-500 "
                      placeholder="Add a comment!"
                    />
                  </div>
                  <div className="border border-orange-500">
                    Quote tweet goes here
                  </div>
                </div>
              </div>
              <div className="border-b border-color-hover mx-2 py-2 text-sm">
                <span className="ml-2 text-twitter-blue flex gap-1 items-center">
                  <PublicIcon fontSize="inherit" />
                  Everyone can reply
                </span>
              </div>
              <div className="mt-2 flex justify-between items-center mr-1">
                <TweetFormIcons />
                <button className="rounded-full bg-twitter-blue py-[6px] px-4">
                  Tweet
                </button>
              </div>
            </>
          </ModalBox>
        </ModalBackdrop>
      )}
      <IconButton
        Icon={RetweetIcon}
        text="Retweet"
        handleClick={setShowRetweetMenu.bind(null, true)}
        value={value}
        text_color={text_color}
        bgColor="group-hover:bg-[#071A14]"
      />
    </div>
  );
};
export default Retweet;

function RetweetMenu({
  closeModal,
  retweetHandler,
  quoteTweetHandler,
}: {
  closeModal: () => void;
  retweetHandler: () => void;
  quoteTweetHandler: () => void;
}) {
  return (
    <>
      <ModalBackdrop closeModal={closeModal} background="" scroll={true} />
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
  );
}

function AudienceMenuBackdrop({ closeModal }: { closeModal: () => void }) {
  useEffect(() => {
    function handleEscapeKey(e: KeyboardEvent) {
      if (e.code === "Escape") {
        closeModal();
      }
    }
    if (!scroll) {
      document.body.style.overflow = "hidden";
    }
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [closeModal]);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        closeModal();
      }}
      className="fixed top-0 left-0 w-screen h-screen"
    />
  );
}
