import ModalBackdrop from "@/components/UI/ModalBackdrop";
import React, { useEffect, useState } from "react";

type MenuProps = {
  closeModal: () => void;
  options: Array<any>;
};

const Menu: React.FC<MenuProps> = ({ closeModal, options }) => {
  const [animate, setAnimate] = useState("max-h-0");
  useEffect(() => {
    setAnimate("max-h-40");
  }, []);
  return (
    <>
      <ModalBackdrop closeModal={closeModal} background="" scroll={true} />
      <div
        className={`absolute right-0 top-0 z-10 w-max overflow-hidden rounded-xl bg-black text-sm font-bold text-white shadow-highlight transition-[max-height] ${animate}`}
      >
        {options.map(({ text, Icon, clickHandler }) => (
          <div
            key={text}
            onClick={clickHandler}
            className="flex items-center gap-2 px-4 py-2 transition first:pt-4 last:pb-4 hover:bg-[#0b0b0b]"
          >
            <Icon />
            {text}
          </div>
        ))}
      </div>
    </>
  );
};
export default Menu;
