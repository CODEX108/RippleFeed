import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import { formatDistanceToNowStrict } from "date-fns";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import Avatar from "../Avatar";
import { log } from "console";
import { AiOutlineHeart,AiFillHeart, AiOutlineMessage } from "react-icons/ai";
import useLike from "@/hooks/useLike";

interface PostItemProps {
    userId?: string;
    data?: Record<string, any>
}

const PostItem: React.FC<PostItemProps> = ({ data = {}, userId }) => {
    const router = useRouter();
    const loginModal = useLoginModal();

    const { data: currentUser } = useCurrentUser();

    const {hasLiked,toggleLike} = useLike({postId: data.id,userId});

    const goToUser = useCallback((ev: any) => {
        ev.stopPropagation();
        router.push(`/users/${data.user.id}`)
    }, [router, data.user.id]);

    const goToPost = useCallback(() => {
        router.push(`/posts/${data.id}`);
    }, [router, data.id]);

    const onLike = useCallback((event: any) => {
        event.stopPropagation();
        if(!currentUser){
           return loginModal.onOpen();
        }
        toggleLike();
    }, [loginModal,currentUser,toggleLike]);

    const LikeIcon = hasLiked ? AiFillHeart : AiOutlineHeart;
    const createdAt = useMemo(() => {
        if (!data?.createdAt) {
            return null;
        }

        return formatDistanceToNowStrict(new Date(data.createdAt));
    }, [data?.createdAt])

    return (
        <div
            onClick={goToPost}
            className="
          border-b-[1px] 
          border-neutral-800 
          p-5 
          cursor-pointer 
          hover:bg-neutral-900 
          transition
        ">
            <div className="flex items-start gap-3 flex-row">
                <Avatar userId={data.user.id} />
            </div>
            <div className="flex flex-row items-center gap-2">
                <p
                    onClick={goToUser}
                    className="
                text-white 
                font-semibold 
                cursor-pointer 
                hover:underline
            ">
                    {data.user.name}
                </p>
                <span
                    onClick={goToUser}
                    className="
                cursor-pointer
                hover:underline
                hidden
                md:block
                text-indigo-500
            ">
                    @{data.user.username}
                </span>
                <span className="text-neutral-500 text-sm">
                    {createdAt}
                </span>
            </div>
            <div className="text-white mt-1">
                {data.body}
            </div>
            <div className="flex flex-row items-center mt-3 gap-10">
            <div className="flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-indigo-600 m-2">
                <AiOutlineMessage size={20}/>
                <p>{data.comments?.length || 0}</p>
            </div>
            <div
            onClick={onLike}
            className="flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-red-500 m-2">
                <LikeIcon size={20} color= {hasLiked? '#F94346':''}/>
                <p>{data.likedIds?.length || 0}</p>
            </div>
            </div>
        </div>
    )
}

export default PostItem;