import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardBody,
  SimpleGrid,
  Text,
  Image,
  Heading,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
const CommonLayout = ({ category }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [category]);

  return (
    <>
      <Header />
      <Navbar />
      <Box bg="primary.mainbg" color="primary.htext">
        <Box maxW="1200px" m="0 auto" px="10px" py="30px">
          <Text as="u" textTransform="capitalize" fontSize="20px">
            {category}
          </Text>
          <Box pt="20px" pb="20px">
            <SimpleGrid columns={[1, 2, 3, 4]} spacing="15px">
              {products.map((product) => (
                <Card key={product.id} maxW="sm">
                  <CardBody p="0px">
                    <Image
                      src={product.thumbnail}
                      h="200px"
                      w="100%"
                      cursor="pointer"
                      onClick={() => navigate(`/products/${product.id}`)}
                    />
                    <Box
                      p="10px"
                      onClick={() => navigate(`/products/${product.id}`)}
                    >
                      <Heading size="sm" pt="5px" cursor="pointer">
                        {product.title}
                      </Heading>
                      <Text color="blue.600" fontSize="xl">
                        Rs. {product.price}
                      </Text>
                    </Box>
                  </CardBody>

                  <CardFooter p="0px 5px 10px 10px ">
                    <ButtonGroup spacing="2" pt="0px" mt="0px" size="sm">
                      <Button variant="solid" colorScheme="blue">
                        Buy now
                      </Button>
                      <Button variant="ghost" bg="green" color="primary.htext">
                        Add to cart
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default CommonLayout;
