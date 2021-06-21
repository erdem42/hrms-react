import axios from "axios"
import { api } from "../api"


export default class CityService{
    getCities(){
        return axios.get("http://localhost:8080/api/cities/getall")
    }

    addCity(city){
        return api().post("/city/add",city)
    }
}