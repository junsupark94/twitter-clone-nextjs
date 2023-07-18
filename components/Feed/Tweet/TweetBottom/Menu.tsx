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
        className={`bg-black absolute rounded-xl top-0 right-0 shadow-highlight z-10 text-white text-sm font-bold w-max overflow-hidden transition-[max-height] ${animate}`}
      >
        {options.map(({text, Icon, clickHandler}) => (
          <div
            key={text}
            onClick={clickHandler}
            className="flex gap-2 first:pt-4 py-2 last:pb-4 px-4 items-center transition hover:bg-[#0b0b0b]"
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
