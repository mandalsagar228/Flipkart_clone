import NavBar from "./Navbar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import { ProductActions } from "../../redux/actions/ProductActions.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Slide } from "./Slide";

const Component = styled(Box)`
  padding: 10px;
  background-color: #e4e5e9;
`;

const Home = () => {
  // fetching data from redux store

  // calling the productAction function.
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(ProductActions());
        // console.log("this is product from useeffect", res);
      } catch (error) {
        console.log("something error");
      }
    };
    fetchData();
  }, [dispatch]);

  const { products } = useSelector((state) => state.getproducts);
  console.log(products);

  // Promise.resolve(response).then((resolvedResponse) => {
  //   if (resolvedResponse.error) {
  //     console.log("Error occurred:", resolvedResponse.error);
  //   } else if (
  //     resolvedResponse.products &&
  //     resolvedResponse.products.length > 0
  //   ) {
  //     console.log("This is the products", resolvedResponse.products);
  //   } else {
  //     console.log("Products data is not available");
  //   }
  // });

  // const response = useSelector((State) => State.getproducts);
  // console.log("this is from state", response);
  // const { products } = response;

  if (Array.isArray(products) && products.length > 0) {
    console.log("This is the products", products);
  } else if (products.loading) {
    // Render a loading state
    console.log("Loading...");
  } else {
    console.log("Products data is not available");
  }

  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <Slide products={products} />
      </Component>
    </>
  );
};

export default Home;
