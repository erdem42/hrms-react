import { api } from "../api"


export default class JobPositionService{
    getJobPositions(){
        return api().get("/jobpositions/getall")
    }

    addJobPosition(jobPosition){
        return api().post("/jobposition/add",jobPosition)
    }
}