import Carousel from "react-multi-carousel";
import { useSelector } from "react-redux";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Slide = ({ products }) => {
  //   const { products } = useSelector((state) => state.getproducts);
  //   console.log("from slide", products);
  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
    >
      {products
        ? products.map((product) => (
            <img src={product.url} alt="productImage" />
          ))(console.log("this is the map product", products))
        : (<div>No Data Available</div>)(console.log("No data availabe"))}
      <p>This is data</p>
    </Carousel>
  );
};
