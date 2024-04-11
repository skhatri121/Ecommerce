import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

const SearchFilter = ({ searchQuery, handleSearchInputChange }) => {
  return (
    <InputGroup>
      <Input
        type="search"
        placeholder="Search items"
        sx={{ "::placeholder": { color: "primary.htext" } }}
        w="100%"
        id="search-product"
        className="search-input"
        value={searchQuery}
        onChange={handleSearchInputChange}
        color="primary.htext"
      />
      <InputRightElement>
        <CiSearch color="primary.htext" />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchFilter;
