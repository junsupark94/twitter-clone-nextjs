import { Dispatch, SetStateAction, useState } from "react";
import PublicIcon from "@mui/icons-material/Public";
import TwitterCircleIcon from "@mui/icons-material/People";
import ModalBackdrop from "./UI/ModalBackdrop";
import ModalBox from "./UI/ModalBox";

export default function AudienceMenu({
  closeModal,
  audience,
  setAudience,
}: {
  closeModal: () => void;
  audience: string;
  setAudience: Dispatch<SetStateAction<string>>;
}) {
  const [showAudienceModal, setShowAudienceModal] = useState(false);
  const [selected, setSelected] = useState("circle");
  const closeModalHandler = setShowAudienceModal.bind(null, false);

  if (showAudienceModal) {
    return (
      <ModalBackdrop closeModal={closeModalHandler}>
        <ModalBox closeModal={closeModalHandler} addButton={false}>
          <div className="text-white">
            <div className="flex items-center">
              <button
                onClick={closeModal}
                className="m-2 h-9 w-9 rounded-full hover:bg-color-hover"
              >
                X
              </button>
              <div className="text-xl ">Edit your Twitter Circle</div>
            </div>
            <div className="mb-2 flex border-b border-gray-500">
              <div
                className={`flex grow justify-center pt-2 text-base transition hover:bg-color-hover`}
                onClick={() => setSelected("circle")}
              >
                <div
                  className={`py-2 ${
                    selected === "circle" && "border-b-4 border-twitter-blue"
                  }`}
                >
                  Twitter Circle
                </div>
              </div>
              <div
                className="flex grow justify-center pt-2 text-base transition hover:bg-color-hover"
                onClick={() => setSelected("recommended")}
              >
                <div
                  className={`py-2 ${
                    selected === "recommended" &&
                    "border-b-4 border-twitter-blue"
                  }`}
                >
                  Recommended
                </div>
              </div>
            </div>
            {selected == "circle" && (
              <div>
                <div className="p-4 px-9 text-sm font-normal text-gray-500">
                  People won’t be notified when you edit your Twitter Circle.
                  Anyone you add will be able to see your previous Twitter
                  Circle Tweets.{" "}
                  <span className="font-bold text-white underline">
                    How it works
                  </span>
                </div>
              </div>
            )}
          </div>
        </ModalBox>
      </ModalBackdrop>
    );
  }

  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
          closeModal();
        }}
        className="fixed left-0 top-0 z-10 h-screen w-screen cursor-default"
      />
      <div className="cursor-default absolute top-7 z-20 w-56 rounded-xl bg-black text-sm font-bold text-white shadow-highlight">
        <div className="m-4 text-start text-lg">
          Choose audience
        </div>
        <div
          className="my-4 px-4 flex cursor-pointer items-center gap-2"
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
          className="my-4 px-4 flex cursor-pointer items-center gap-2"
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
                  onClick={() => setShowAudienceModal(true)}
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
