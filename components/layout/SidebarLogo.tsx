import { useRouter } from "next/router";
import { PiSpiralFill } from "react-icons/pi";

const SidebarLogo = () => {
  const router = useRouter();
  
  return (
    <div 
      onClick={() => router.push('/')}
      className="
        rounded-full 
        h-14
        w-14
        p-4 
        flex 
        items-center 
        justify-center 
        hover:bg-indigo-300 
        hover:bg-opacity-10 
        cursor-pointer
    ">
      <PiSpiralFill size={35} color="white" />
    </div>
  );
};

export default SidebarLogo;