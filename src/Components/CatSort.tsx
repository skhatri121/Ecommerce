import React, { useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import CategoryFilter from "./CategoryFilter";
import SortFilter from "./SortFilter";
import SearchFilter from "./SearchFilter";
import useCartStore from "../Store/useCartStore";
import ReactPaginate from "react-paginate";
import "../pagination.css";
const CartSort = () => {
  const productperPage = 15;
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [isSmallerThan1100] = useMediaQuery("(max-width: 1100px)");
  // const [isSmallerThan961] = useMediaQuery("(max-width: 961px)");

  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

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
        setFilteredProducts(fetchedProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const sortHighestPrice = () => {
    const sortedProducts = [...filteredProducts].sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
    setFilteredProducts(sortedProducts);
  };

  const sortLowestPrice = () => {
    const sortedProducts = [...filteredProducts].sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    );
    setFilteredProducts(sortedProducts);
  };

  const filteredAndSlicedProducts = filteredProducts
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(currentPage * productperPage, (currentPage + 1) * productperPage);

  const pageCount = Math.ceil(filteredProducts.length / productperPage);

  return (
    <Box
      bg="primary.mainbg"
      minHeight="100vh"
      display="grid"
      gridTemplateRows="1fr auto"
    >
      <Box
        maxW="1400px"
        m="0 auto"
        display="flex"
        p="40px 5px 30px 0px"
        gap="10px"
        flexDirection={isSmallerThan1100 ? "column" : "row"}
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
            {filteredAndSlicedProducts.length > 0 ? (
              filteredAndSlicedProducts.map((product) => (
                <Card key={product.id} maxW="sm">
                  <CardBody p="0px" key={product.id} cursor="pointer">
                    <Image
                      src={product.thumbnail}
                      h="200px"
                      w="100%"
                      cursor="pointer"
                      objectFit="cover"
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
                      <Button
                        variant="solid"
                        colorScheme="blue"
                        onClick={() => navigate("/paymentsuccessful")}
                      >
                        Buy now
                      </Button>
                      <Button
                        variant="ghost"
                        bg="green"
                        color="primary.htext"
                        onClick={() => handleAddToCart(product)}
                      >
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
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CartSort;
