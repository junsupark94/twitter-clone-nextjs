import IconButton from "@/components/UI/IconButton";
import ShareIcon from "@mui/icons-material/FileUploadOutlined";
import { useMemo, useState } from "react";
import Menu from "./Menu";
import LinkIcon from "@mui/icons-material/Link";
import MessageIcon from "@mui/icons-material/MailOutline";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

type ShareProps = {};

const Share: React.FC<ShareProps> = () => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  const menuOptions = useMemo(() => [
    { text: "Copy link to Tweet", Icon: LinkIcon, clickHandler: () => {
      setShowShareMenu(false);
    } },
    { text: "Send via Direct Message", Icon: MessageIcon, clickHandler: () => {
      setShowShareMenu(false);
    } },
    { text: "Bookmark", Icon: BookmarkAddIcon, clickHandler: () => {
      setShowShareMenu(false);
    } },
  ], []);

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
