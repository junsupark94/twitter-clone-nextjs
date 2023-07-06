import Image from "next/image";
import logo from '@/public/Logo_of_Twitter.svg'
import home from '@/public/home.svg'

type SideBarProps = {

};

const SideBar:React.FC<SideBarProps> = () => {

  return <nav className=" border-2 border-red-400 text-left">
    <Image src={logo} width={50} alt="Twitter Logo"/>
    <div className="flex items-center">
      <Image src={home} width={20} alt="Home"/>
      <span>Home</span>
    </div>
    <div>Explore</div>




  </nav>
}
export default SideBar;