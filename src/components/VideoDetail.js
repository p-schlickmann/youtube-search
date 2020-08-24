import React from 'react'

const VideoDetail = (props) => {
    const videoUrl = `https://youtube.com/embed/${props.video.id.videoId}` 
    return (
    <div>
        <div className='ui embed'>
            <iframe src={videoUrl} title='video player'/>
        </div>
        <div className="ui segment">
            <h4 className="ui header">{props.video.snippet.title}</h4>
            <p>{props.video.snippet.description}</p>
        </div>
    </div>
    )
    
}

export default VideoDetail
