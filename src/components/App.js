import React from 'react'

import youtube from '../api/youtube'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'


class App extends React.Component {
    state = { videos: [] , selectedVideo:{}}

    callApi = async query => {
        const response = await youtube.get('/search', {
            params: {
                q: query
            }
        })

        this.setState({videos: response.data.items, selectedVideo: {}})
    }

    onClickVideo = (video) => {
        this.setState({selectedVideo: video})
    }
    isEmpty = (object) => {
        for(var prop in object) {
            if(object.hasOwnProperty(prop)) {
              return false;
            }
          }
        
          return JSON.stringify(object) === JSON.stringify({});
        }
    
    renderContent() {
        if (this.isEmpty(this.state.selectedVideo)) {
            return (
                <div className="ui container">
                    <SearchBar onSubmit={ this.callApi } />
                    <VideoList videos={this.state.videos} onClick={this.onClickVideo}/>
                </div>
            )
        }
        return (
            <div className="ui container">
                <SearchBar onSubmit={ this.callApi } />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onClick={this.onClickVideo}/>
                        </div>
                    </div>
                </div>
                
                
            </div>
        )
    }
    render() {
        return this.renderContent()
    }
}

export default App
