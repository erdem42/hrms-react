import { api } from "../api"


export default class WorkTimeTypeService{
    getWorkTimeTypes(){
        return api().get("/worktimetypes/getall")
    }

    addCity(workTimeType){
        return api().post("/worktimetype/add",workTimeType)
    }
}