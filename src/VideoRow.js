import { Avatar } from '@material-ui/core';
import React from 'react';
import './VideoRow.css';

function VideoRow({views,subs,timetamp,description,channel,image,title,Icon}) {
    return (
        <div className="VideoRow__details">
        <img src={image} alt={channel}/>
        <div className="VideoRow__text">
          <h3>🔴{title}</h3>
          <p className="videoRow__headline" >
          {channel} . <span>{subs} Subscribers</span> . {views} Views . {timetamp} 
          
          </p>
          <div className="VideoRow__avatar">
          <Avatar src="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj-mo" className="avatar"/>
          <p className="VideoRow__description">{description}</p>
          </div>
          
        </div>
            
        </div>
    )
}

export default VideoRow
