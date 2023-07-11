import ViewsIcon from "@mui/icons-material/InsertChartOutlined";
import { useState } from "react";
import TweetBottomIcon from "./TweetBottomIcon";
import Modal from "@/components/UI/Modal";
import { Dialog } from "@headlessui/react";

type ViewsProps = {
  value: number;
};

const Views: React.FC<ViewsProps> = ({ value }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <Modal closeModal={setShowModal.bind(null, false)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-[600px] top-1/3 left-1/3 rounded-xl bg-black pb-12"
          >
            <div className="h-[53px] w-full max-w-[1000px] flex items-center px-4 mx-auto">
              <button
                onClick={setShowModal.bind(null, false)}
                className="rounded-full hover:bg-color-hover min-w-[36px] min-h-[36px] align-center"
              >
                X
              </button>
              <div className="flex-shrink" />
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="w-[400px] m-8">
                <h1 className="font-extrabold text-2xl mb-2 text-white">
                  Views
                </h1>
                <p className="mb-8">
                  Times this Tweet was seen. To learn more, visit the{" "}
                  <span className="font-bold underline">Help Center</span>
                </p>
                <button
                  onClick={setShowModal.bind(null, false)}
                  className="rounded-full font-medium bg-[#EFF3F4] text-black w-full p-3"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <TweetBottomIcon
        Icon={ViewsIcon}
        value={value}
        text="Views"
        handleClick={setShowModal.bind(null, true)}
      />
    </>
  );
};
export default Views;
