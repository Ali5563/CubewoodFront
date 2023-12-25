import { instance } from "./index";

export const getColors = async()=>{
    const respone = await instance.get("/colors?populate=*");
    
    return respone;
}