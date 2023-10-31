import {
  Dialog,
  Box,
  Typography,
  Button,
  TextField,
  styled,
} from "@mui/material";
import { useState, useContext } from "react";

import { signUpData, LoginDetails } from "../Service/api.js";
import { DataContext } from "../../context/Dataprovider.jsx";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;
const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;

  height: 84%;
  width: 40%;
  padding: 45px 35px;
  & > p,
  h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  button,
  p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  :hover {
    background: #b8663d;
  }
`;
const OTPButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #fb641b;
  height: 48px;
  border-radius: 2px;
`;
const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;
const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const accountInitialValue = {
  Login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders Wishlists and Recomendations",
  },
  Signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};
const Error = styled(Typography)`
  font-size: 10px;
  color: red;
  line-height: 0;
  margin-top: 10px;
  font-size: 600;
`;
const signupInitialValue = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValue = {
  username: "",
  password: "",
};
const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValue.Login);
  const [signup, setSignup] = useState(signupInitialValue);
  const [login, setLogin] = useState(loginInitialValue);
  const { setAccount } = useContext(DataContext);
  const [error, setError] = useState(false);

  const handleChange = () => {
    setOpen(false);
    toggleAccount(accountInitialValue.Login);
    setError(false);
  };

  const toggleSinup = () => {
    toggleAccount(accountInitialValue.Signup);
  };

  //   Function for taking singup value from the form
  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });

    console.log({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  };

  //   sending data to the api
  const signUpValue = async () => {
    let response = await signUpData(signup);
    if (!response) {
      console.log("this is error from signupData", response);
    } else {
      console.log(response);
    }
    handleChange();
    setAccount(signup.username);
  };

  const LoginUsers = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    console.log({ ...login, [e.target.name]: e.target.value });
  };
  const SendLoginDetails = async () => {
    try {
      const response = await LoginDetails(login);

      if (response.status === 200) {
        handleChange();
        setAccount(response.data.data.firstname);
      } else {
        setError(response.data.msg);
      }
    } catch (error) {
      console.log(" something went wrong", error.response);
    }
  };
  return (
    <Dialog
      open={open}
      onClose={() => handleChange()}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: "20px" }}>
              {account.subHeading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField
                variant="standard"
                name="username"
                onChange={(e) => LoginUsers(e)}
                label="Enter Username."
              />
              {error && <Error>{error}</Error>}
              <TextField
                variant="standard"
                name="password"
                onChange={(e) => LoginUsers(e)}
                label="Enter Password."
              />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton onClick={() => SendLoginDetails()}>
                Login
              </LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <OTPButton>Request OTP</OTPButton>
              <CreateAccount onClick={() => toggleSinup()}>
                New to flipkart? Create Account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="firstname"
                label="Enter Firstname"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="lastname"
                label="Enter Lastname"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="username"
                label="Enter username"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="email"
                label="Enter email"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter password"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="phone"
                label="Enter phone"
              />

              <LoginButton onClick={() => signUpValue()}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
