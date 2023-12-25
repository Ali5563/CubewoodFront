import { instance } from "./index";

export const getCategories = async()=>{
    const respone = await instance.get("/categories?populate=*");
    
    return respone;
}