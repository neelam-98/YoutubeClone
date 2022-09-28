import React from "react";
import {HomeOutlined, SortDescendingOutlined, SubnodeOutlined, HistoryOutlined, FieldTimeOutlined, LikeFilled,DownloadOutlined, YoutubeFilled} from "@ant-design/icons";
import SideBarRow from "./SideBarRow";
import "../Style/SideBar.css";
import { Link } from 'react-router-dom';


const SideBar = () => {
    return (
        <div className='sidebar'>
            <SideBarRow Icon={HomeOutlined} title='Home'/>
            <SideBarRow Icon={SortDescendingOutlined} title='Trending' />
            <SideBarRow Icon={SubnodeOutlined} title='Subscription' />
            <hr />
            <SideBarRow Icon={YoutubeFilled} title='Library' />
            <Link to="/history">
                <SideBarRow Icon={HistoryOutlined} title='History' />
            </Link>
            <Link to="/watchlater">
                <SideBarRow Icon={FieldTimeOutlined} title='Watch Later' />
            </Link>
            <SideBarRow Icon={DownloadOutlined } title='Downloads' />
            <Link to="likevideo">
                <SideBarRow Icon={LikeFilled} title='Liked Videos' />
            </Link>
            <hr />
        </div>
    )
}

export default SideBar;