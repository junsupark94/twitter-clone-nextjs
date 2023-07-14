import { Dispatch, SetStateAction, useEffect } from "react";
import PublicIcon from "@mui/icons-material/Public";
import TwitterCircleIcon from "@mui/icons-material/People";

export default function AudienceMenu({
  closeModal,
  audience,
  setAudience,
}: {
  closeModal: () => void;
  audience: string;
  setAudience: Dispatch<SetStateAction<string>>;
}) {
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
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
          closeModal();
        }}
        className="fixed top-0 left-0 w-screen h-screen"
      />
      <div className="bg-black absolute rounded-xl top-7 shadow-highlight z-20 text-white text-sm font-bold w-56">
        <div className="text-lg m-4 text-start">Choose audience</div>
        <div
          className="flex gap-2 m-4 items-center"
          onClick={setAudience.bind(null, "Everyone")}
        >
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
        <div
          className="flex gap-2 m-4 items-center"
          onClick={setAudience.bind(null, "Twitter Circle")}
        >
          <div className="bg-[#00BA7C] rounded-full w-10 h-10 flex items-center justify-center">
            <TwitterCircleIcon />
          </div>
          <div className="flex grow items-center justify-between text-start">
            <div>
              <div>Twitter Circle</div>
              <div className="space-x-1">
                <span>
                  0 <span className="text-gray-500 font-normal">People</span>
                </span>
                <span className="underline">Edit</span>
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