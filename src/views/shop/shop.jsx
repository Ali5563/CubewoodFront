import React, { useState, useEffect } from "react";
import "./shop.css";
import { getProducts } from "../../api/products";
import { getBrands } from "../../api/brand";
import { getCategories } from "../../api/category";
import { getColors } from "../../api/colors";
import Productitem from "../../components/productItem/productitem";

const shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getAllProducts() {
      const data = await getProducts();

      setProducts(data?.data?.data);
    }

    getAllProducts();
  }, []);

  // useEffect(() => {
  //   async function getProductsByCondition() {
  //     const data = await getProductsByCondition();

  //     console.log(data?.data?.data);

  //     setProducts(data?.data?.data);
  //   }

  //   getProductsByCondition();
  // }, []);

  return (
    <div>
      {/* {products?.map((product) => {
        console.log(product);
        return (
          <div className="product" key={product?.id}>
            {product?.attributes?.images?.data.map((image) => {
              return (
                <div className="">
                  <img src={import.meta.env.VITE_SERVER_IMAGES+image?.attributes?.url} alt="" />
                </div>
              );
            })}

            <h1>{product?.attributes?.title}</h1>
            <h1>{product?.attributes?.isWishlist}</h1>
            <h1>{product?.attributes?.inBasket}</h1>
            <h1>{product?.attributes?.price}</h1>
          </div>
        );
      })} */}
      <Productitem></Productitem>
    </div>
  );
};

export default shop;

// {
//   "id": 1,
//   "attributes": {
//       "title": "Jalis Counter stool",
//       "price": 10.2,
//       "createdAt": "2023-12-24T14:05:34.948Z",
//       "updatedAt": "2023-12-25T13:30:49.507Z",
//       "publishedAt": "2023-12-24T14:09:57.353Z",
//       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam convallis augue eget faucibus. Vivamus accumsan enim vitae maximus convallis. In tincidunt porttitor faucibus. Aliquam sed nunc ex. Praesent sit amet lacus ut elit auctor pulvinar molestie id erat. Fusce dolor dui, lacinia vitae urna quis, hendrerit volutpat felis. Quisque.",
//       "isWishlist": false,
//       "inBasket": false,
//       "images": {
//           "data": [
//               {
//                   "id": 22,
//                   "attributes": {
//                       "name": "product_5.png",
//                       "alternativeText": null,
//                       "caption": null,
//                       "width": 235,
//                       "height": 300,
//                       "formats": {
//                           "thumbnail": {
//                               "name": "thumbnail_product_5.png",
//                               "hash": "thumbnail_product_5_c952053113",
//                               "ext": ".png",
//                               "mime": "image/png",
//                               "path": null,
//                               "width": 122,
//                               "height": 156,
//                               "size": 9.46,
//                               "url": "/uploads/thumbnail_product_5_c952053113.png"
//                           }
//                       },
//                       "hash": "product_5_c952053113",
//                       "ext": ".png",
//                       "mime": "image/png",
//                       "size": 5.6,
//                       "url": "/uploads/product_5_c952053113.png",
//                       "previewUrl": null,
//                       "provider": "local",
//                       "provider_metadata": null,
//                       "createdAt": "2023-12-25T13:30:47.929Z",
//                       "updatedAt": "2023-12-25T13:30:47.929Z"
//                   }
//               },
//               {
//                   "id": 23,
//                   "attributes": {
//                       "name": "product_4.png",
//                       "alternativeText": null,
//                       "caption": null,
//                       "width": 236,
//                       "height": 300,
//                       "formats": {
//                           "thumbnail": {
//                               "name": "thumbnail_product_4.png",
//                               "hash": "thumbnail_product_4_f852bc388b",
//                               "ext": ".png",
//                               "mime": "image/png",
//                               "path": null,
//                               "width": 123,
//                               "height": 156,
//                               "size": 18.81,
//                               "url": "/uploads/thumbnail_product_4_f852bc388b.png"
//                           }
//                       },
//                       "hash": "product_4_f852bc388b",
//                       "ext": ".png",
//                       "mime": "image/png",
//                       "size": 13.49,
//                       "url": "/uploads/product_4_f852bc388b.png",
//                       "previewUrl": null,
//                       "provider": "local",
//                       "provider_metadata": null,
//                       "createdAt": "2023-12-25T13:30:47.952Z",
//                       "updatedAt": "2023-12-25T13:30:47.952Z"
//                   }
//               }
//           ]
//       },
//       "brand": {
//           "data": {
//               "id": 2,
//               "attributes": {
//                   "name": "Basket",
//                   "createdAt": "2023-12-24T13:54:27.080Z",
//                   "updatedAt": "2023-12-24T14:08:42.224Z",
//                   "publishedAt": "2023-12-24T14:08:42.223Z"
//               }
//           }
//       },
//       "category": {
//           "data": {
//               "id": 1,
//               "attributes": {
//                   "title": "Tea Kettle",
//                   "createdAt": "2023-12-24T13:54:58.374Z",
//                   "updatedAt": "2023-12-24T14:09:22.463Z",
//                   "publishedAt": "2023-12-24T14:09:22.462Z"
//               }
//           }
//       },
//       "colors": {
//           "data": [
//               {
//                   "id": 4,
//                   "attributes": {
//                       "name": "Black",
//                       "createdAt": "2023-12-24T13:56:23.720Z",
//                       "updatedAt": "2023-12-24T14:09:45.185Z",
//                       "publishedAt": "2023-12-24T14:09:45.182Z"
//                   }
//               },
//               {
//                   "id": 1,
//                   "attributes": {
//                       "name": "Orange",
//                       "createdAt": "2023-12-24T13:55:33.400Z",
//                       "updatedAt": "2023-12-24T14:09:50.884Z",
//                       "publishedAt": "2023-12-24T14:09:50.882Z"
//                   }
//               },
//               {
//                   "id": 3,
//                   "attributes": {
//                       "name": "Blue",
//                       "createdAt": "2023-12-24T13:56:12.739Z",
//                       "updatedAt": "2023-12-24T14:09:48.049Z",
//                       "publishedAt": "2023-12-24T14:09:48.048Z"
//                   }
//               }
//           ]
//       }
//   }
// }
