import React from 'react';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import { LikeOutlined,DislikeOutlined, ShareAltOutlined, DeleteOutlined} from '@ant-design/icons';
import Header from './Header';
import { DateTime } from 'luxon';
import { deleteLikeVideo, clearLikeVideo} from '../redux/action/action';
import { useDispatch } from 'react-redux';
import "../Style/App.css";

const LikeVideo = () => {

    const dispatch = useDispatch();

    const listingVideo = useSelector ((state) => state.L_reducer.likeVideoList)
    console.log('listing video state',listingVideo);

    const likeVideoClick = () => {
        dispatch(
            clearLikeVideo(listingVideo)
        )
    }
  return (
   <>
   <Header/>
   <button onClick={() =>likeVideoClick()} className="clearBtn">Clear Likes</button>
   <br/>
        <div className='full_block'>
          <br/><br/>
          {
            listingVideo && listingVideo.length > 0 && 
            listingVideo.map((listingItem)=>{ 
              const url =listingItem.likeVideoList.player.embedHtml;
              const channelTitle = listingItem.likeVideoList.snippet.channelTitle;
              const title = listingItem.likeVideoList.snippet.title;
              const viewCount  = listingItem.likeVideoList.statistics.viewCount;
              const snippet = listingItem.likeVideoList.snippet
              const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
              const likes = listingItem.likeVideoList.statistics.likeCount;
              
              return(
                <>
                  <div className='block'>
                    <div className='video_block'>
                      <ReactPlayer url={url}  controls width={600} height={300}/>
                    </div>
                    <div className='content_block'>
                      <h1>{title}</h1>
                      <h2>{channelTitle}</h2>
                      <p>{viewCount} views • {timestamp}  </p>
                      <div className="icons_block">
                        <LikeOutlined className="icon"/>{likes}
                        <DislikeOutlined className="icon"/>Dislike
                        <ShareAltOutlined className="icon"/>Share
                        <DeleteOutlined className='icon' onClick={()=>dispatch(deleteLikeVideo(listingItem))}/>Remove from Likes 
                      </div>
                    </div>
                  </div>
                  <br/>
                  <br/>
                </>
              )
            })
          }
        </div>
    </>
  )
}

export default LikeVideo;
