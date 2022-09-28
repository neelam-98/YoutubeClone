import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import ReactPlayer from "react-player";
import Header from "./Header";
import axios from "axios";
import  {DateTime} from "luxon";
import RecommendedVideos from "./RecommendedVideos";
import { DislikeOutlined, DownloadOutlined, FieldTimeOutlined, LikeOutlined, ShareAltOutlined } from "@ant-design/icons";
import "../Style/PlayVideo.css";
import { addLikeVideo, addVideo } from "../redux/action/action";
import {useDispatch} from "react-redux";

function PlayVideo() {

    const {id} = useParams();
    const [data,setData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&part=player&id=${id}&key=AIzaSyDHV7y5qmz38WLa3qc8r1uu0t_5welKiGg`)
          .then(response => {
            console.log(response.data.items);
            setData(response.data.items);
          })
          .catch(error => {
            console.log(error);
          })
        }, [data])

    const handleClick = () =>{
        dispatch(
          addVideo(data[0])
        )
      };

    const likeClick = () => {
      dispatch (
        addLikeVideo(data[0])
      )
    }

  return (
      <> 
      { data && data.length>0 &&         
        data.map((element) => {
          console.log(element);
          const  url=element.player.embedHtml;
          const snippet= element.snippet;
          const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
        return(
          <>
          <Header/>
          <div className="playvideo">
              <div className="reactplayer">
                <ReactPlayer url={url} controls width={1000} height={500}/>
                <div className="title">
                  <h2>{snippet.channelTitle}</h2>
                  <h2>{snippet.title}</h2>
                </div>
                <div className="title_share">
                  <p>{element.statistics.viewCount} views • {timestamp}</p>
                  <div className="icons_block">
                    <LikeOutlined className="icon" onClick ={()=>likeClick()}/>Like
                    <DislikeOutlined className="icon"/>Dislike
                    <ShareAltOutlined className="icon"/>Share
                    <FieldTimeOutlined className="icon" onClick={handleClick}/>Watch Later
                    <DownloadOutlined className="icon"/>Download
                  </div>
                </div>
              </div>
              <RecommendedVideos/>
          </div>
          </>
         )
        })
      }
    
    </>
  );
}

export default PlayVideo;
