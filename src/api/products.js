import { instance } from "./index";

export const getProducts = async()=>{
    const respone = await instance.get("/products?populate=*");
    
    return respone;
}

// export const getProductsByCondition = async(brand, color, category)=>{
//     const respone = await instance.get(`/products?populate=*filters[brand.id][$in]=1`);
    
//     return respone;
// }





