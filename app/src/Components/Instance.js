import axios from 'axios'

const Instance = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 2500
})

export default Instance