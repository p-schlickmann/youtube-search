import axios from 'axios'

const KEY = 'AIzaSyBpxLCUS9bzHJMpttZls4wm9y7rBKcm-yU'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        type:'video',
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        
    }
})
