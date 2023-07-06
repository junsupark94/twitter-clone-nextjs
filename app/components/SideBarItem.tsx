import Image from "next/image";

type SideBarItemProps = {
  icon_src: any;
  title: string;
};

const SideBarItem:React.FC<SideBarItemProps> = ({icon_src, title}) => {

  return <div className="flex items-center">
      <Image src={icon_src} width={20} alt={title}/>
      <span>{title}</span>
    </div>
}
export default SideBarItem;