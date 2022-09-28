
import React from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { LikeOutlined, DislikeOutlined, ShareAltOutlined, DeleteOutlined } from '@ant-design/icons';
import { DateTime } from 'luxon';
import "../Style/PlayVideo.css";
import Header from './Header';
import { clearWatchLater, deleteWatchLater } from '../redux/action/action';

function WatchLater() {
  // const state = useSelector((state) => state.w_reducer);
  // console.log('state',state.list);
  // const videoList =state.list ;

  const dispatch = useDispatch();
   
  //or this way
  const listingVideo = useSelector((state) => state.W_reducer.watchlaterList)
  console.log('listing video state',listingVideo);

  const watchLaterClick = () => {
    dispatch (
      clearWatchLater(listingVideo)
    )
  }
  return (
      <>
      <Header/>
      <br/>
      <button onClick={() =>watchLaterClick()}  className="clearBtn">Clear Watchlater</button>        
        <div className='full_block'>
          <br/><br/>
          {
            listingVideo && listingVideo.length > 0 && 
            listingVideo.map((listingItem)=>{ 
              const url = listingItem.watchlaterList.player.embedHtml;
              const channelTitle = listingItem.watchlaterList.snippet.channelTitle;
              const viewCount  = listingItem.watchlaterList.statistics.viewCount;
              const title = listingItem.watchlaterList.snippet.title;
              const likes = listingItem.watchlaterList.statistics.likeCount;
              const snippet = listingItem.watchlaterList.snippet
              const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();

              return(
                <>
                  <div className='block'>
                    <div className='video_block'>
                      <ReactPlayer url={url} controls width={600} height={300}/>
                    </div>
                    <div className='content_block'>
                      <h2>{channelTitle}</h2>
                      <h3>{title}</h3>
                        <p>{viewCount} views • {timestamp}</p>
                        <div className="icons_block">
                          <LikeOutlined className="icon"/>{likes} 
                          <DislikeOutlined className="icon"/>Dislike
                          <ShareAltOutlined className="icon" />Share
                          <DeleteOutlined className='icon' onClick={() => dispatch(deleteWatchLater(listingItem))} />Remove from Watchlater
                        </div>
                    </div>
                  </div>
                  <br/><br/>
                </>
              )
            })
          }
        </div>
      </>
    )
  }

export default WatchLater;
