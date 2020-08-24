import React from 'react'

import VideoItem from './VideoItem'

const VideoList = (props) => {
    const renderedList = props.videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} onClick={props.onClick}/>
    })

    return <div className="videos">{renderedList}</div>
}


export default VideoList
