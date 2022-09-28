import React from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { DateTime } from 'luxon';
import { LikeOutlined, DislikeOutlined, ShareAltOutlined, DeleteOutlined } from '@ant-design/icons';
import Header from './Header';
import "../Style/App.css";
import { deleteHistory, clearHistory} from '../redux/action/action';

function History() {
  
  const dispatch = useDispatch();

  const listingVideo = useSelector((state) => state.H_reducer.historyList)
  console.log('listing video state',listingVideo);

  const historyclick = () => {
    dispatch(
      clearHistory(listingVideo)
    )
  }

  return (
    <>
      <Header/>
      <button onClick={() =>historyclick()} className="clearBtn" >Clear History</button>
      <br/>
        <div className='full_block'>
          <br/><br/>
          {
            listingVideo && listingVideo.length > 0 && 
            listingVideo.map((listingItem)=>{ 
              // console.log("mapping",listingItem.historyList.id);
              const url =listingItem.historyList.player.embedHtml;
              const channelTitle = listingItem.historyList.snippet.channelTitle;
              const title = listingItem.historyList.snippet.title;
              const viewCount  = listingItem.historyList.statistics.viewCount;
              const snippet = listingItem.historyList.snippet
              const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
              const likes = listingItem.historyList.statistics.likeCount;
              
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
                        <DeleteOutlined className='icon' onClick={()=>dispatch(deleteHistory(listingItem))}/>Remove from History
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

export default History;
