import { products } from "../constants/data.js";

import product from "../model/product-schema.js";

const DefaultData = async () => {
  try {
    await product.insertMany(products);
    console.log("Products has been inserted successfully");
  } catch (error) {
    console.log("Error while inserting error data", error.message);
  }
};
export default DefaultData;
