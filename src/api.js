import axios from "axios";




export function api() {
    return axios.create({
        baseURL:"http://localhost:8080/api"
    })
    
}