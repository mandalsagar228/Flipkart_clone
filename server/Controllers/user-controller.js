import user from "../model/user-schema.js";
// controller for signup Data
export const signupData = async (request, response) => {
  try {
    const exist = await user.findOne({ username: request.body.username });
    if (exist) {
      return response.status(401).json({ msg: "username already exist" });
    }

    console.log(request.body);
    const data = await new user(request.body);
    await data.save();
    return response
      .status(201)
      .json({ msg: "signup data has been saved succesfully", data: data });
  } catch (error) {
    // console.log(error);
    return response.status(500).json({ error: error.message });
  }
};

// controller for login Data

export const LoginDetail = async (request, response) => {
  try {
    let username = request.body.username;
    let password = request.body.password;
    const validateLogin = await user.findOne({
      username: username,
      password: password,
    });
    if (validateLogin) {
      return response.status(200).json({
        msg: "Login Successfull from the server",
        data: validateLogin,
      });
    } else {
      return response
        .status(401)
        .json({ msg: "invalid Login Details from the server" });
    }
  } catch (error) {
    console.log(error);
    return response.status(500).json({ msg: "error from the server", error });
  }
};
