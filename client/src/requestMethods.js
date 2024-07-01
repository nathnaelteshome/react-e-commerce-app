import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDUzZTI2NTNmYTYyMzE5YTI0N2FkYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5OTQ0ODA3MiwiZXhwIjoxNjk5NzA3MjcyfQ.Z-_9sBLpu8D9ZmF_88DEaaXpF8wYpVOQYAjPA3F6if4"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
})