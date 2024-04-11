import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

const CategoryFilter = ({ categories }) => {
  return (
    <Menu>
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
      <MenuList>
        {categories.map((category, index) => (
          <a key={index} href={`/products/${category}`}>
            <MenuItem textTransform="capitalize">{category}</MenuItem>
          </a>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CategoryFilter;
