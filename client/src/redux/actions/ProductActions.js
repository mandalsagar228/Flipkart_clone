import axios from "axios";
import * as actionTypes from "../constants/ProductConstant.js";
const URL = "http://localhost:8000";
export const ProductActions = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}/products`);
      // console.log(" This data is from productaction", data);
      dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: data });
      return data;
    } catch (error) {
      dispatch({ type: actionTypes.GET_PRODUCT_FAIL, payload: error.message });
      console.log("This is error from product action", error);
    }
  };
};

//   const response = await axios.get(`${URL}/products`);
//   console.log("this is from productadction", response);
// };
