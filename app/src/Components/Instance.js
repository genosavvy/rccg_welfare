import React from 'react'
import axios from 'axios'

const Instance = axios.create({
    baseURL: 'https://0.0.0.0:3002',
    timeout: 2500    
})
  

export default Instance