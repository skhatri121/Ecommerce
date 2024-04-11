import {
  Heading,
  Box,
  Link,
  Input,
  InputGroup,
  InputRightElement,
  useMediaQuery,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { CiSearch, CiMenuBurger, CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  const [isSmallerThan790] = useMediaQuery("(max-width: 790px)");
  const [isSmallerThan560] = useMediaQuery("(max-width: 560px)");
  const navItems = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "About Us",
      to: "/about",
    },
    {
      title: "Contact",
      to: "/contact",
    },
  ];

  return (
    <Box>
      <Box maxW="1400px" m="0 auto">
        <Box
          p="20px 10px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection={isSmallerThan790 ? "column" : "row"}
        >
          <Heading size="lg" fontFamily="Dancing Script">
            <a href="/">CH-Ecommerce</a>
          </Heading>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pt={isSmallerThan790 ? "10px" : "0px"}
          >
            {isSmallerThan560 ? (
              <CiMenuBurger />
            ) : (
              <Box display="flex" justifyContent="center">
                {navItems.map((item, index) => (
                  <Box key={index} mx="10px" textAlign="center">
                    <Link href={item.to}>{item.title}</Link>
                  </Box>
                ))}
              </Box>
            )}
            <Box display="flex" alignItems="center" ml="10px">
              {/* <InputGroup>
                <Input
                  type="search"
                  placeholder="Search for products"
                  w="auto"
                  id="search-product"
                  className="search-input"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <InputRightElement>
                  <CiSearch />
                </InputRightElement>
              </InputGroup> */}
              <Box ml="10px">
                <Link href="/addtocart">
                  <CiShoppingCart fontSize="x-large" />
                </Link>
                {/* <Text>{count}</Text> */}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
