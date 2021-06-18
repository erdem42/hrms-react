import { api } from "../api"


export default class CandidateService{
    getCandidate(){
        return api().get("/candidates/getall")
    }

    addCandidate(candidate){
        return api().post("/candidates/add",candidate)
    }
}