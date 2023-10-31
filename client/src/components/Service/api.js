import axios from "axios";

const URL = "http://localhost:8000";
// Sending Signup Details
export const signUpData = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log({ error: error.messsage });
  }
};

//  Sending Login Details
export const LoginDetails = async (logindata) => {
  try {
    return await axios.post(`${URL}/login`, logindata);
  } catch (error) {
    console.log("This error is from api section");
    return error.response;
  }
};
