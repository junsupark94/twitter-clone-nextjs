import ModalBackdrop from "@/components/UI/ModalBackdrop";
import ModalBox from "@/components/UI/ModalBox";
import ProfileIcon from "@/components/SideBar/ProfileIcon";
import AudienceMenu from "./AudienceMenu";
import PublicIcon from "@mui/icons-material/Public";
import TweetFormIcons from "../../../TweetForm/TweetFormIcons";

export default function QuoteTweetModal({
  setShowQuoteTweetModal,
  setShowAudienceMenu,
  audience,
  setAudience,
  showAudienceMenu,
}: {
  setShowQuoteTweetModal: any;
  setShowAudienceMenu: any;
  audience: any;
  setAudience: any;
  showAudienceMenu: any;
}) {
  return (
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
                    <AudienceMenu
                      closeModal={setShowAudienceMenu.bind(null, false)}
                      audience={audience}
                      setAudience={setAudience}
                    />
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
  );
}