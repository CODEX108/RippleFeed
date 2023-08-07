import { useRouter } from "next/router";
import { ClipLoader, PuffLoader } from "react-spinners";

import usePost from "@/hooks/usePost";
import Header from "@/components/Header";
import PostItem from "@/components/posts/PostItem";
import Form from "@/components/Form";



const PostView = () => {
    const router = useRouter();
    const {postId} = router.query;

    const {data:fetchedPost,isLoading} = usePost(postId as string);

    if(isLoading||!fetchedPost){
        return(
            <div className="flex justify-center items-center h-screen">
                <PuffLoader color="#6146e8" size={150} />
            </div>
        )
    }
 return(
      <>
      <Header label="Drop" showBackArrow/>
      <PostItem
      data={fetchedPost}
      />
      <Form 
      postId={postId as string}
      iscomment
      placeholder="Create a ripple"
      />
      </>
 )
}
 
export default PostView;