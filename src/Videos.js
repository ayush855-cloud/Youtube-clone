import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import'./Video.css';

function Videos({image,title,channel,channelImage,views,timestamp}) {
    return (
        <div className="video">
            <img className="video__thumbnail" src={image} alt=""/>
            <div className="video__info">
                <Avatar className="video__avatar" alt={channel} src={channelImage}/>
            
            <div className="video__text">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>{views}-{timestamp}</p>
            </div>
            </div>
        </div>
    )
}

export default Videos
