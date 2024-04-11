import {
  Box,
  Divider,
  Text,
  SimpleGrid,
  Card,
  Image,
  CardBody,
  Heading,
  CardFooter,
  ButtonGroup,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryFilter from "./CategoryFilter";
import SortFilter from "./SortFilter";
import SearchFilter from "./SearchFilter";

const CartSort = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [isSmallerThan420] = useMediaQuery("(max-width: 420px)");

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        const fetchedProducts = data.products;
        setProducts(fetchedProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const sortHighestPrice = () => {
    const sortedProducts = [...products].sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
    setProducts(sortedProducts);
  };

  const sortLowestPrice = () => {
    const sortedProducts = [...products].sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    );
    setProducts(sortedProducts);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box bg="primary.mainbg">
      <Box
        maxW="1400px"
        m="0 auto"
        display="flex"
        p="40px 5px 30px 0px"
        gap="10px"
        flexDirection={isSmallerThan420 ? "column" : "row"}
      >
        <Box px="20px" h="fit-content">
          <CategoryFilter categories={categories} />
          <Box pt="10px">
            <SortFilter
              sortHighestPrice={sortHighestPrice}
              sortLowestPrice={sortLowestPrice}
            />
          </Box>
          <Box pt="10px">
            <SearchFilter
              searchQuery={searchQuery}
              handleSearchInputChange={handleSearchInputChange}
            />
          </Box>
        </Box>
        <Divider orientation="vertical" h="auto" />
        <Box pl="10px" pt="5px">
          <Text color="primary.htext" fontSize="24px" pb="10px">
            Product List
          </Text>
          <SimpleGrid columns={[1, 2, 3, 4]} spacing="15px">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Card key={product.id} maxW="sm">
                  <CardBody p="0px" key={product.id} cursor="pointer">
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
                    <ButtonGroup
                      spacing="2"
                      pt="0px"
                      mt="0px"
                      size="sm"
                      flexWrap="wrap"
                      display="flex"
                      rowGap="5px"
                    >
                      <Button variant="solid" colorScheme="blue">
                        Buy now
                      </Button>
                      <Button variant="ghost" bg="green" color="primary.htext">
                        Add to cart
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <Box textAlign="center">
                <Text color="primary.htext">Product not found...</Text>
              </Box>
            )}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default CartSort;
