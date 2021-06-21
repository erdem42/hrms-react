import { api } from "../api"


export default class WorkTypeService{
    getWorkTypes(){
        return api().get("/worktypes/getall")
    }

    addCity(workType){
        return api().post("/worktype/add", workType)
    }
}