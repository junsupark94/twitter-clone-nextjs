import ModalBackdrop from "@/components/UI/ModalBackdrop";
import ModalBox from "@/components/UI/ModalBox";
import ProfileIcon from "@/components/SideBar/ProfileIcon";
import AudienceMenu from "./AudienceMenu";
import PublicIcon from "@mui/icons-material/Public";
import TweetFormIcons from "../../../TweetForm/TweetFormIcons";
import TwitterCircleIcon from "@mui/icons-material/People";
import { useEffect, useState } from "react";
import TweetHeader from "../../TweetHeader";
import { Media } from "@/components/Feed/tweet-data";
import Image from "next/image";

export default function QuoteTweetModal({
  setShowQuoteTweetModal,
  data,
}: {
  setShowQuoteTweetModal: any;
  data: {
    account: string;
    date: Date;
    displayName: string;
    body?: string | undefined;
    medias?: Media[] | undefined;
    retweeter: string | undefined;
    replying: string | number | undefined;
  };
}) {
  const [showAudienceMenu, setShowAudienceMenu] = useState(false);
  const [audience, setAudience] = useState("Everyone");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    let setter = setShowQuoteTweetModal;
    if (showAudienceMenu) {
      setter = setShowAudienceMenu;
    }

    const escListener = (e: KeyboardEvent) => {
      if (e.code === "Escape") setter(false);
    };
    document.addEventListener("keydown", escListener);

    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", escListener);
    };
  }, [setShowQuoteTweetModal, showAudienceMenu]);

  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
          setShowQuoteTweetModal(false);
        }}
        className={`fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-[#5b708366]`}
      >
        <ModalBox
          closeModal={setShowQuoteTweetModal.bind(null, false)}
          positioning="fixed top-12 text-white"
        >
          <>
            <div className="flex gap-2 p-2">
              <div>
                <ProfileIcon />
              </div>
              <div className="grow">
                <div>
                  <button
                    onClick={setShowAudienceMenu.bind(null, true)}
                    className={`relative mb-4 flex justify-center rounded-full border px-2 py-1 text-xs font-bold ${
                      audience === "Twitter Circle"
                        ? "border-[#00BA7C] text-[#00BA7C]"
                        : "border-blue-500 text-twitter-blue"
                    }`}
                  >
                    {audience} ∨
                    {showAudienceMenu && (
                      <AudienceMenu
                        closeModal={setShowAudienceMenu.bind(null, false)}
                        audience={audience}
                        setAudience={setAudience}
                      />
                    )}
                  </button>
                  <textarea
                    className="w-full resize-none bg-black outline-none "
                    placeholder="Add a comment!"
                  />
                </div>
                <div className="rounded-2xl border border-[#2f3336] text-base">
                  <div className="flex items-center">
                    <ProfileIcon width={25} />
                    <TweetHeader
                      displayName={data.displayName}
                      account={data.account}
                      date={data.date}
                    />
                  </div>
                  <div>
                    {data.replying && (
                      <>
                        <span className="text-gray-600">Replying to </span>
                        <span className="text-twitter-blue">
                          @{data.replying}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="my-2">
                    {data.body && <div>{data.body}</div>}
                    {data.medias && data.medias[0].type === "photo" && (
                      <div className="relative h-96 border border-red-500">
                        <Image
                          src={data.medias[0].src}
                          alt="Image"
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    {/* {medias && <Media medias={medias}/>} */}
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-2 border-b border-color-hover py-2 text-base">
              <span
                className={`ml-2 flex items-center gap-1 ${
                  audience === "Everyone"
                    ? "text-twitter-blue"
                    : "text-[#1d9cf098]"
                }`}
              >
                {/* <PublicIcon fontSize="inherit" /> */}
                {audience === "Everyone" && "🌎 Everyone can reply"}
                {audience === "Twitter Circle" &&
                  "🔒 Only your Twitter Circle who follows you can reply"}
              </span>
            </div>
            <div className="mr-1 mt-2 flex items-center justify-between">
              <TweetFormIcons />
              <button className="rounded-full bg-twitter-blue px-4 py-[6px]">
                Tweet
              </button>
            </div>
          </>
        </ModalBox>
      </div>
    </>
  );
}
