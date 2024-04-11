import { Box, Table, Th, Thead, Tr } from "@chakra-ui/react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

const AddtoCart = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Box>
        <Box maxW="1200px" m="0 auto">
          <Table>
            <Thead>
              <Tr>
                <Th>Product name</Th>
                <Th>Product Image</Th>
                <Th>Product Quantity</Th>
                <Th>Product Price</Th>
                <Th>Total Price</Th>
              </Tr>
            </Thead>
          </Table>
        </Box>
      </Box>
    </>
  );
};

export default AddtoCart;
