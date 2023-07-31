import ViewsIcon from "@mui/icons-material/InsertChartOutlined";
import { useState } from "react";
import ModalBackdrop from "@/components/UI/ModalBackdrop";
import IconButton from "@/components/UI/IconButton";
import ModalBox from "@/components/UI/ModalBox";

type ViewsProps = {
  value: number;
};

const Views: React.FC<ViewsProps> = ({ value }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <ModalBackdrop closeModal={setShowModal.bind(null, false)}>
          <ModalBox closeModal={setShowModal.bind(null, false)}>
            <div className="flex w-full items-center justify-center">
              <div className="m-8 w-[400px]">
                <h1 className="mb-2 text-2xl font-extrabold text-white">
                  Views
                </h1>
                <p className="mb-8 text-twitter-md">
                  Times this Tweet was seen. To learn more, visit the{" "}
                  <a
                    target="_blank"
                    href="https://help.twitter.com/en/using-twitter/view-counts"
                    className="font-bold text-white underline"
                  >
                    Help Center
                  </a>
                </p>
                <button
                  onClick={setShowModal.bind(null, false)}
                  className="w-full rounded-full bg-[#EFF3F4] p-3 font-medium text-black"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </ModalBox>
        </ModalBackdrop>
      )}
      <IconButton
        Icon={ViewsIcon}
        value={value}
        text="Views"
        cursor
        handleClick={setShowModal.bind(null, true)}
      />
    </>
  );
};
export default Views;
