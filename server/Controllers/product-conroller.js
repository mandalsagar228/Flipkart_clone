import product from "../model/product-schema.js";
// Fetching Default Products That Stored in DB.
const getProducts = async (request, response) => {
  try {
    let fetchProducts = await product.find({});
    return response.status(200).json({
      msg: "Products has been fetched successfully.",
      data: fetchProducts,
    });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};

export default getProducts;
