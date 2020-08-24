import './VideoItem.css'
import React from 'react'


class VideoItem extends React.Component {
    constructor(props) {
        super(props)    

        this.videoTitle = props.video.snippet.title
        this.videoUrl =`https://youtube.com/watch?v=${props.video.id.videoId}`
        this.channelUrL = `https://www.youtube.com/channel/${props.video.snippet.channelId}`
    }

    handleClick = (video) => {
        this.props.onClick(video)
    }


    render() {
        return (
            <div onClick={() => this.handleClick(this.props.video)} className="video-item item">
                <img
                alt={this.props.video.snippet.title}
                className="ui image"
                src={this.props.video.snippet.thumbnails.medium.url}
                />
                <div className="content">
                <div className="header">{this.props.video.snippet.title}</div>
                </div>
            </div>
            
        )
    }
    
}

export default VideoItem
