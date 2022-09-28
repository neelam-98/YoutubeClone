import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import RecommendedVideos from "./RecommendedVideos";
import "../Style/App.css"

const Home =() => {
    
    return(
        <>
        <Header/>
        <div className="app_mainpage">
            <SideBar/>
            <RecommendedVideos/>
        </div>
        </>
    );
}
export default Home;