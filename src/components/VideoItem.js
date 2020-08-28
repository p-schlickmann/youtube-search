import './VideoItem.css'
import React from 'react'


const VideoItem = ({onClick, video}) => {

    const videoTitle = video.snippet.title
    const videoUrl =`https://youtube.com/watch?v=${video.id.videoId}`
    const channelUrL = `https://www.youtube.com/channel/${video.snippet.channelId}`

    const handleClick = (video) => {
        onClick(video)
    }


    return (
        <div onClick={() => handleClick(video)} className="video-item item">
            <img
            alt={video.snippet.title}
            className="ui image"
            src={video.snippet.thumbnails.medium.url}
            />
            <div className="content">
            <div className="header">{video.snippet.title}</div>
            </div>
        </div> 
    )
}

export default VideoItem
