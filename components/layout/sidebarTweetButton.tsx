import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { FaDroplet } from 'react-icons/fa6';

const SidebarTweetButton = ()=>{
    const router =  useRouter();

    const loginModal = useLoginModal();
  
    const onClick = useCallback(() => {
      loginModal.onOpen();
    }, [loginModal]);

    return (
        <div onClick={onClick}>
          <div className="
            mt-6
            lg:hidden 
            rounded-full 
            h-14
            w-14
            p-4
            flex
            items-center
            justify-center 
            bg-indigo-600 
            hover:bg-opacity-80 
            transition 
            cursor-pointer
          ">
            <FaDroplet size={24} color="white" />
          </div>
          <div className="
            mt-4
            hidden 
            lg:block 
            px-4
            py-2
            rounded-full
            bg-indigo-600
            hover:bg-opacity-90 
            cursor-pointer
          ">
            <p 
              className="
                hidden 
                lg:block 
                text-center
                font-semibold
                text-white 
                text-[20px]
            ">
              Drop
            </p>
          </div>
        </div>
      );
}

export default SidebarTweetButton;