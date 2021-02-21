import React from 'react';
import './VideoRow.css';

function VideoRow({views,subs,timetamp,description,channel,image,title}) {
    return (
        <div className="VideoRow__details">
        <img src={image} alt={channel}/>
        <div className="VideoRow__text">
          <h3>🔴{title}</h3>
          <p className="videoRow__headline" >
          {channel} . <span>{subs} Subscribers</span> . {views} Views . {timetamp} 
          
          </p>
          <p className="VideoRow__description">{description}</p>
        </div>
            
        </div>
    )
}

export default VideoRow
