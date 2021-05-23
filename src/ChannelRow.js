import React from 'react'
import './ChannelRow.css';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

function ChannelRow({image,channel,verified,subs,noOfVideos,description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt={channel} src={image}/>
            <div className="channelRow__text">
                <h4>{channel} {verified && <CheckCircleOutlineOutlinedIcon className="check" />}</h4>
                <p>{subs} Subscribers . {noOfVideos} videos </p>
                <div className="last">
                <button>SUBSCRIBED</button>
                <NotificationsNoneIcon className="notify"/>
                </div>
            </div>
            
        </div>
    )
}

export default ChannelRow
