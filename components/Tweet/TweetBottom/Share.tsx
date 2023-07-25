import IconButton from "@/components/UI/IconButton";
import ShareIcon from "@mui/icons-material/FileUploadOutlined";
import { useMemo, useState } from "react";
import LinkIcon from "@mui/icons-material/Link";
import MessageIcon from "@mui/icons-material/MailOutline";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import useToastStore from "@/app/store/toast-store";
import Menu from "@/components/UI/Menu";

type ShareProps = {};

const Share: React.FC<ShareProps> = () => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showToast, hideToast] = useToastStore((state) => [
    state.showToast,
    state.hideToast,
  ]);

  const menuOptions = useMemo(
    () => [
      {
        text: "Copy link to Tweet",
        Icon: LinkIcon,
        clickHandler: () => {
          navigator.clipboard.writeText("Something goes here");
          showToast("Copied to clipboard");
          setTimeout(() => hideToast(), 5000);
        },
      },
      {
        text: "Send via Direct Message",
        Icon: MessageIcon,
        clickHandler: () => {
          showToast("This would make a DM modal appear");
          setTimeout(() => hideToast(), 5000);
        },
      },
      {
        text: "Bookmark",
        Icon: BookmarkAddIcon,
        clickHandler: () => {
          showToast("Tweet added to your Bookmarks");
          setTimeout(() => hideToast(), 5000);
        },
      },
    ],
    [hideToast, showToast],
  );

  return (
    <div className="relative">
      {showShareMenu && (
        <Menu
          closeModal={() => setShowShareMenu(false)}
          options={menuOptions}
        />
      )}
      <IconButton
        Icon={ShareIcon}
        text="Share"
        handleClick={() => setShowShareMenu(true)}
      />
    </div>
  );
};
export default Share;
