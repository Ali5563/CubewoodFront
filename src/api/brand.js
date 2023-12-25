import { instance } from "./index";

export const getBrands = async()=>{
    const respone = await instance.get("/brands?populate=*");
    
    return respone;
}