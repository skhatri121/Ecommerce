import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  SimpleGrid,
  Card,
  Image,
  CardBody,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { create } from "zustand";

type Store = {
  count: number;
  inc: () => void;
};

const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

const CartSort = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryProduct, setcategoryProduct] = useState([]);
  const { count, inc } = useStore();

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

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products/category/smartphones")
  //     .then((res) => res.json())
  //     .then((data) => setcategoryProduct(data))
  //     .catch((error) => console.error("Error fetching categories:", error));
  // }, []);

  return (
    <Box bg="primary.mainbg">
      <Box
        maxW="1200px"
        m="0 auto"
        display="flex"
        p="10px 5px 10px 0px"
        gap="10px"
      >
        <Box px="20px">
          <Menu>
            <Box>
              <MenuButton
                as={Button}
                textTransform="capitalize"
                cursor="pointer"
                color="primary.header"
                rightIcon={<BiChevronDown />}
                w="125px"
              >
                Categories
              </MenuButton>
            </Box>
            <MenuList>
              {categories.map((category, index) => (
                <MenuItem key={index} textTransform="capitalize">
                  {category}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Menu>
            <Box pt="10px">
              <MenuButton
                as={Button}
                textTransform="capitalize"
                cursor="pointer"
                color="primary.header"
                rightIcon={<BiChevronDown />}
                w="125px"
              >
                Sort By
              </MenuButton>
            </Box>
            <MenuList>
              <MenuItem>Highest Price</MenuItem>
              <MenuItem>Lowest Price</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Divider orientation="vertical" h="auto" />
        <Box pl="10px" pt="5px">
          {products.map((product, index) => (
            <SimpleGrid columns={[1, 2, 3, 4]} spacing="15px">
              {products.map((product) => (
                <Card key={product.id} maxW="sm">
                  <CardBody p="0px">
                    <Image
                      src={product.thumbnail}
                      h="200px"
                      w="100%"
                      cursor="pointer"
                    />
                    <Box p="10px">
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
                      <Button variant="ghost" colorScheme="green" onClick={inc}>
                        Add to cart
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              ))}
            </SimpleGrid>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CartSort;
