import * as actionType from "../constants/ProductConstant.js";

const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCT_SUCCESS:
      // console.log(
      //   "GET_PRODUCT_SUCCESS payload:",
      //   "This is from reducer",
      //   action.payload
      // );

      return { ...state, products: action.payload.data };

    case actionType.GET_PRODUCT_FAIL:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;
