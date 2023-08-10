import Header from "@/components/Header";
import NotificationsFeed from "@/components/NotificationsFeed";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

//adding protecion so that no one can tamper the url and enter the app without login 
export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);
  
    if (!session) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        }
      }
    }
  
    return {
      props: {
        session
      }
    }
  }
  
  const Notifications = () => {
    return ( 
      <>
        <Header showBackArrow label="Notifications" />
        <NotificationsFeed />
      </>
     );
  }
   
  export default Notifications;