import Form from "@/components/Form";
import Header from "@/components/Header";
import PostFeed from "@/components/posts/PostFeed";
import PostItem from "@/components/posts/PostItem";

export default function Home() {
  return (
    <>  
    <Header label='Home'></Header>
    <Form placeholder ='Create a ripple or a wave' />
    <PostFeed/>
    <PostItem/>
    </>

  )
}
