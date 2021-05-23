import React from 'react';
import ReactDOM from 'react-dom';

import './Sidebar.css';
import SidebarRow from './SidebarRow';
import Home from '@material-ui/icons/Home';
import Subscription from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { Avatar } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={Home} Title="Home" />
            <SidebarRow Icon={Whatshot} Title="Trending" />
            <SidebarRow Icon={Subscription} Title="Subscription" />
            <hr/>
            <SidebarRow Icon={VideoLibraryIcon} Title="Library" />
            <SidebarRow Icon={HistoryIcon} Title="History" />
            <SidebarRow Icon={OndemandVideoIcon} Title="Your Videos" />
            <SidebarRow Icon={WatchLaterIcon} Title="Watch later" />
            <SidebarRow Icon={ThumbsUpDownIcon} Title="Liked videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} Title="Show more" />
            <hr/>
            <h3 className="sub">SUBSCRIPTIONS</h3>
            <SidebarRow Icon={Avatar} Title="England and Cricket Wales" />
            <SidebarRow Icon={Avatar} Title="Melodity Hits" />
            <SidebarRow Icon={Avatar} Title="BB KI Vines" />
            <SidebarRow Icon={Avatar} Title="Harsh Beniwal" />
            <SidebarRow Icon={Avatar} Title="Sundar Pichai" />
            <SidebarRow Icon={Avatar} Title="Clever Programmer" />
        </div>
    )
}

export default Sidebar;
