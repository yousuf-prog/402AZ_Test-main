import axios from "axios";


const http = axios.create({
    baseURL: "https://kpu8ehxa4a.execute-api.us-east-1.amazonaws.com",
    headers: {
        "Content-Type": "application/json",
    },
});

// Add an interceptor to include the token in requests

export default http;
