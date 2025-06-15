import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000
})

instance.interceptors.request.use(
    async (config) => {
        try {
            const token = localStorage.getItem("token")
            if (token) {
                config.headers = config.headers || {}
                config.headers.Authorization = `Bearer ${token}`
            }
            return config
        }
        catch(err){
            console.error("Request Interceptor Error", err);
            return config
        }
    }
)

instance.interceptors.response.use(
    (response) => {
        console.log(response.data);
        return response
    },
    (err) =>{
        console.error("Response Error" , err);
        return Promise.reject(err)
        
    }
)

export default instance

