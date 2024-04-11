import {
  Box,
  Text,
  Image,
  Heading,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { create } from "zustand";
import Footer from "../Components/Footer";
import { Rating } from "react-simple-star-rating";

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  desc: () =>
    set((state) => ({ count: state.count > 1 ? state.count - 1 : 1 })),
}));

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { count, inc, desc } = useStore();
  const [isSmallerThan680] = useMediaQuery("(max-width: 680px)");
  const [rating, setRating] = useState(0);

  const tooltipArray = [
    "Terrible",
    "Terrible+",
    "Bad",
    "Bad+",
    "Average",
    "Average+",
    "Great",
    "Great+",
    "Awesome",
    "Awesome+",
  ];

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [productId]);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  // const onPointerEnter = () => console.log("Enter");
  // const onPointerLeave = () => console.log("Leave");
  // const onPointerMove = (value: number, index: number) =>
  //   console.log(value, index);
  const discountAmount = (product) => {
    return (product.price * product.discountPercentage) / 100;
  };

  const totalPrice = (product) => {
    const discountedPrice = product.price - discountAmount(product);
    return discountedPrice.toFixed(2);
  };

  return (
    <>
      <Header />
      <Navbar />
      <Box bg="primary.mainbg" color="primary.htext">
        <Box maxW="1200px" m="0 auto">
          {product && (
            <Box
              px="20px"
              py="20px"
              display="flex"
              flexDirection={isSmallerThan680 ? "column" : "row"}
              gap="15px"
            >
              <Box>
                <Image src={product.thumbnail} h="450px" w="auto" />
              </Box>
              <Box p="20px 10px 20px 30px">
                <Heading>{product.title}</Heading>
                <Text fontSize="16px" pt="10px">
                  {product.description}
                </Text>

                <Box pt="10px">
                  <Text>In Stock: {product.stock}</Text>
                </Box>
                <Box>
                  <Text fontSize="20px" pt="10px" color="primary.price" as="s">
                    Rs.{""} {product.price}
                  </Text>
                  <Text fontSize="20px" pt="2px" color="primary.price">
                    Rs.{""} {totalPrice(product)}
                  </Text>
                </Box>
                <Text fontSize="20px" pt="10px" color="primary.price"></Text>
                <Box display="flex" gap="10px" pt="10px">
                  <Button onClick={desc} size="sm">
                    -
                  </Button>
                  <Text fontSize="20px">{count}</Text>
                  <Button onClick={inc} size="sm">
                    +
                  </Button>
                </Box>
                {/* <Box>
                  <Rating
                    onClick={handleRating}
                    size={30}
                    transition
                    allowFraction
                    showTooltip
                    tooltipArray={tooltipArray}
                  />
                  {product.rating}
                </Box> */}

                <Box pt="15px" display="flex" gap="15px">
                  <Button>Buy Now</Button>
                  <Button>Add to Cart</Button>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      <Box pt="10px">
        <Footer />
      </Box>
    </>
  );
};

export default Product;
