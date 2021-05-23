import React ,{useState} from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';

function Header() {
    const [inputSearch,setSearch]  = useState("");
    return (
        <div className="header">
        <div className="header__left">
            <MenuIcon className="menu" />
            
            <img className="header__logo" src="data:image/png;base64,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" alt="cloneName" />
            
        </div>    
        <div className="header__center">
            <input className="input" placeholder="Search" value={inputSearch} onChange={(e) => setSearch(e.target.value)} type="text" />
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="search_icons"/>
            </Link>
        </div>    
        <div className="header__right">
            <VideoCallIcon className="material__icons"/>
            <AppsIcon className="material__icons"/>
            <NotificationsIcon className="material__icons"/>
            <Avatar src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__340.png" alt="avatar" className="avatar"/>
        </div>
        </div>
    )
}

export default Header
