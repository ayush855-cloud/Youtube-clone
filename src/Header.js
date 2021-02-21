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
            <MenuIcon />
            <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_(2013-2015).svg/120px-Logo_of_YouTube_(2013-2015).svg.png" alt="cloneName" />

        </div>    
        <div className="header__center">
            <input placeholder="Search" value={inputSearch} onChange={(e) => setSearch(e.target.value)} type="text" />
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
