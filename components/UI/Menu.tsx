import ModalBackdrop from "@/components/UI/ModalBackdrop";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React, { useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";

export type MenuProps = {
  closeModal: () => void;
  options: Array<MenuOptions>;
  position?: string;
  children?: React.ReactNode;
  icon_style?: string;
  selectable?: boolean;
};

export type MenuOptions = {
  text: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  clickHandler: () => void;
};

const Menu: React.FC<MenuProps> = ({
  children,
  icon_style,
  closeModal,
  options,
  position = "right-0 top-0",
  selectable,
}) => {
  const [animate, setAnimate] = useState("max-h-0");
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    setAnimate("max-h-100");
  }, []);

  return (
    <>
      <ModalBackdrop closeModal={closeModal} background="" scroll={true} />
      <div
        className={`absolute ${position} z-10 w-max overflow-hidden rounded-xl bg-black text-sm font-bold text-white shadow-highlight transition-[max-height] ${animate}`}
      >
        {children}
        {options.map(({ text, Icon, clickHandler }, index) => (
          <div
            key={text}
            onClick={() => {
              setSelected(index);
              clickHandler();
            }}
            className="flex cursor-pointer justify-between items-center gap-2 px-4 py-2 transition first:pt-4 last:pb-4 hover:bg-[#0b0b0b]"
          >
            <div className="flex items-center gap-2">
              <Icon className={icon_style} />
              {text}
            </div>
            {selectable && selected === index && (
              <CheckIcon className="text-twitter-blue" />
            )}
          </div>
        ))}
      </div>
    </>
  );
};
export default Menu;
