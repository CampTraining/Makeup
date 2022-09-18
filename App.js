import React from "react";
import { NavigationContainer } from "@react-navigation/native"
import { HomeTabs } from "./navigation/HomeTabs";
import { Auth } from "./navigation/Auth";
import { ForgetPass, PhoneVerification, VerifyPass } from "./screens/forgetPass";
import { Home } from "./screens/home";
import { Followers } from "./screens/account";



// import { SearchPage } from "./screens/search";
// import { ProfilePage } from "./screens/search/profile";
export default function App(props) {
  return (
    <>



      <NavigationContainer>
        <Auth />

      </NavigationContainer>


      {/* <Followers></Followers> */}



      {/* <Home/> */}
      {/* <ProfilePage/> */}
      {/* <SearchPage/> */}




      {/* <ForgetPass /> */}
      {/* <PhoneVerification /> */}
      {/* <VerifyPass/> */}
      {/* <HomeTabs/> */}
      {/* <LogOrSign/> */}
      {/* <Login/> */}
      {/* <PhoneVerification/> */}
    </>
  )
}