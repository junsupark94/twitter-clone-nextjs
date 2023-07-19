import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type icon = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
  muiName: string;
};

export default function IconButton({
  Icon,
  text_color = "hover:text-twitter-blue",
  bgColor = "group-hover:bg-[#0A171F]",
  value,
  text,
  handleClick,
}: {
  Icon: icon;
  text_color?: string;
  bgColor?: string;
  value?: number;
  text: string;
  handleClick?: () => void;
}) {
  return (
    <div
      key={text}
      onClick={handleClick}
      className={`group cursor-pointer ${text_color} relative flex items-center transition`}
    >
      <div
        className={`rounded-full p-[6px] ${bgColor} flex justify-center transition`}
      >
        <Icon fontSize="small" />
        <div className="absolute top-9 hidden bg-[#495a697d] p-1 text-[9px] text-[#F7F8F9] group-hover:block">
          {text}
        </div>
      </div>
      <div>{value}</div>
    </div>
  );
}
