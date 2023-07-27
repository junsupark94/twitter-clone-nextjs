"use client";
import ModalBox from "@/components/UI/ModalBox";
import AudienceMenu from "../../../AudienceMenu";
import { useEffect, useState } from "react";
import TweetHeader from "../../TweetHeader";
import Image from "next/image";
import TweetFormIcons from "@/components/TweetForm/TweetFormIcons";
import useQuoteTweetStore from "@/app/store/quote-tweet-store";
import ProfileIcon from "@/components/ProfileIcon";
import WhoCanReplyMenu from "@/components/TweetForm/WhoCanReplyMenu";
import useAutoSizeTextArea from "@/components/UI/useAutoSizeTextArea";

export default function QuoteTweetModal() {
  const [showAudienceMenu, setShowAudienceMenu] = useState(false);
  const [audience, setAudience] = useState("Everyone");
  const { isVisible, closeModal, data } = useQuoteTweetStore();
  const {AutoSizeTextArea} = useAutoSizeTextArea("Add a comment!");

  useEffect(() => {
    if (!isVisible) return;
    document.body.style.overflow = "hidden";
    let setter = closeModal;
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
  }, [isVisible, closeModal, showAudienceMenu]);

  if (!isVisible) return null;

  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
          closeModal();
        }}
        className={`fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-[#5b708366]`}
      >
        <ModalBox closeModal={closeModal} positioning="fixed top-12 text-white">
          <>
            <div className="flex gap-2 p-2">
              <div>
                <ProfileIcon />
              </div>
              <div className="grow">
                <div className="mb-2">
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
                  {AutoSizeTextArea}
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
                  <div className="my-2 max-w-[500px]">
                    {data.body && <div className="text-sm">{data.body}</div>}
                    {data.medias && data.medias[0].type === "photo" && (
                      <div className="relative h-96 border border-red-500">
                        <Image
                          src={data.medias[0].src}
                          alt="Image"
                          fill
                          sizes="(max-width: 400px)"
                          className="object-cover"
                        />
                      </div>
                    )}
                    {/* {medias && <Media medias={medias}/>} */}
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-2">
              <WhoCanReplyMenu circle={audience === "Twitter Circle"} />
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
