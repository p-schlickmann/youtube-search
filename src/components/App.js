import React, {useState} from 'react'

import youtube from '../api/youtube'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'

const App = () => {
    const [videos, setVideos] = useState([])
    const [selectedVideo, setSelectedVideo] = useState({})

    const callApi = async query => {
        const response = await youtube.get('/search', {
            params: {
                q: query
            }
        })
        setSelectedVideo({})
        setVideos(response.data.items)
    }

    const onClickVideo = (video) => {
        setSelectedVideo(video)
    }

    const isObjectEmpty = (object) => {
        for(var prop in object) {
            if(object.hasOwnProperty(prop)) {
              return false;
            }
          }
        
          return JSON.stringify(object) === JSON.stringify({});
        }

    const renderContent = () => {
        if (isObjectEmpty(selectedVideo)) {
            return (
                <div className="ui container">
                    <SearchBar onSubmit={ callApi } />
                    <VideoList videos={videos} onClick={onClickVideo}/>
                </div>
            )
        }
        return (
            <div className="ui container">
                <SearchBar onSubmit={ callApi } />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={videos} onClick={onClickVideo}/>
                        </div>
                    </div>
                </div>
                
                
            </div>
        )
    }

    return renderContent()
}

export default App
