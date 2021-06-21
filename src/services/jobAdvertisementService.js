
import axios from "axios"
import { api } from "../api"


export default class JobAdvertisementService{
    getJobAdvertisements(){
        return api().get("/jobAdvertisements/getall")
    }

    addJobAdvertisement(jobAdvertisement){
        return axios.post("http://localhost:8080/api/jobAdvertisements/add",jobAdvertisement)
    }
}


