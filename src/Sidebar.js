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
        </div>
    )
}

export default Sidebar;
