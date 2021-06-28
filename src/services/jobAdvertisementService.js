
import axios from "axios"
import { api } from "../api"


export default class JobAdvertisementService{
    getJobAdvertisements(){
        return api().get("/jobAdvertisements/getall")
    }

    getJobAdvertisementsDisActive(){
        return api().get("/jobAdvertisements/findByIsActive?isActive=false")
    }
    

    addJobAdvertisement(jobAdvertisement){
        return axios.post("http://localhost:8080/api/jobAdvertisements/add",jobAdvertisement)
    }

    confirmJobAdvertisement(isActive,jobAdvertisementId){
        
        return axios.post(`http://localhost:8080/api/jobAdvertisements/confirmJobAdvertisement?isActive=${isActive}&jobAdvertisementId=${jobAdvertisementId}`)
    }
}


