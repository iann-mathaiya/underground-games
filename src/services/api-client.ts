import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '0c854bf4da844b09a2b0a8a88ba80403'
    }
})