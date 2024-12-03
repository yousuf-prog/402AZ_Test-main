import axios from "axios";


const http = axios.create({
    baseURL: "https://dummyapi.online/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// Add an interceptor to include the token in requests

export default http;
