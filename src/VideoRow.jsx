import React from 'react'
import "./VideoRow.css";
import Avatar from '@mui/material/Avatar';

function VideoRow({
    views, subs, description, c_img, timestamp, channel, title, image
}) {
  return (
    <div className='videoRow'>
      <img src={image} alt =""/>
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className='video__headline'>
          {views} views • {timestamp}
        </p>
        <div className='video__detail'>
        <Avatar className='logo' src={c_img} />
        <p>{channel}</p>
        </div>
        <p className='videoRow__description'>{description}</p>
      </div>
    </div>
  )
}

export default VideoRow
