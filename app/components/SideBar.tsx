import Image from "next/image";
import logo from '@/public/Logo_of_Twitter.svg'
import home from '@/public/home.svg'
import explore from '@/public/explore.svg'

import SideBarItem from "./SideBarItem";

type SideBarProps = {

};

const SideBarItems = [
  {icon_src: home, title: "Home"},
  {icon_src: explore, title: "Explore"},
]

const SideBar:React.FC<SideBarProps> = () => {

  return <nav className="w-36 border-2 border-red-400 text-left">
    <Image src={logo} width={50} alt="Twitter Logo"/>
    {SideBarItems.map(item => <SideBarItem key={item.title} icon_src={item.icon_src} title={item.title}/>)}

  </nav>
}
export default SideBar;