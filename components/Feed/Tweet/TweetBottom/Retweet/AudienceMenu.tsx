import { Dispatch, SetStateAction } from "react";
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
  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
          closeModal();
        }}
        className="fixed left-0 top-0 h-screen w-screen"
      />
      <div className="absolute top-7 z-20 w-56 rounded-xl bg-black text-sm font-bold text-white shadow-highlight">
        <div className="m-4 text-start text-lg">Choose audience</div>
        <div
          className="m-4 flex items-center gap-2"
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
          className="m-4 flex items-center gap-2"
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
