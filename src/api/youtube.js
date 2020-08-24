import axios from 'axios'

const KEY = 'AIzaSyAhu0kRIgbD_vBA59xEhEfcz_jFhnwksPk'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        type:'video',
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        
    }
})
