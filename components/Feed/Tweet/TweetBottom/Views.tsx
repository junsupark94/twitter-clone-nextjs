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
            <div className="w-full flex justify-center items-center">
              <div className="w-[400px] m-8">
                <h1 className="font-extrabold text-2xl mb-2 text-white">
                  Views
                </h1>
                <p className="mb-8 text-[15px]">
                  Times this Tweet was seen. To learn more, visit the{" "}
                  <a target="_blank" href="https://help.twitter.com/en/using-twitter/view-counts" className="text-white font-bold underline">Help Center</a>
                </p>
                <button
                  onClick={setShowModal.bind(null, false)}
                  className="rounded-full font-medium bg-[#EFF3F4] text-black w-full p-3"
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
        handleClick={setShowModal.bind(null, true)}
      />
    </>
  );
};
export default Views;


{/* <div
      onClick={(e) => e.stopPropagation()}
      className="w-[600px] h-fit rounded-xl bg-black pb-12"
    >
      <div className="h-[53px] w-full max-w-[1000px] flex items-center px-4 mx-auto">
        <button
          onClick={setShowModal.bind(null, false)}
          className="rounded-full hover:bg-color-hover min-w-[36px] min-h-[36px] align-center"
        >
          X
        </button>
        <div className="flex-shrink" />
      </div> */}