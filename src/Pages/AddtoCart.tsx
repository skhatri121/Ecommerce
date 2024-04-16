import {
  Box,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Image,
  Tfoot,
  Button,
  TableContainer,
} from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import useCartStore from "../Store/useCartStore";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const AddtoCart = () => {
  const navigate = useNavigate();
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = (itemId) => {
    useCartStore.setState((state) => {
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== itemId
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      alert("Removed from cart");
      return { cartItems: updatedCartItems };
    });
  };

  const grandPrice = () => {
    return cartItems.reduce((total, item) => total + totalprice(item), 0);
  };

  const totalprice = (item) => {
    return item.quantity * item.price;
  };

  return (
    <>
      <Header />
      <Navbar />
      <Box>
        <Box
          maxW="1200px"
          m="0 auto"
          pb="10px"
          display="grid"
          minH="100vh"
          gridTemplateRows="1fr auto"
        >
          <TableContainer bg="#edf2f7" h="fit-content">
            <Table textAlign="center" variant="striped">
              <Thead color="black">
                <Tr>
                  <Th>S.N</Th>
                  <Th>Product name</Th>
                  <Th>Product Image</Th>
                  <Th>Quantity</Th>
                  <Th>Product Price</Th>
                  <Th>Total Price</Th>

                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody color="primary.header">
                {cartItems.map((item, index) => (
                  <Tr key={item.id}>
                    <Td>{index + 1}</Td>
                    <Td>{item.title}</Td>
                    <Td>
                      <Image src={item.thumbnail} w="80px" />
                    </Td>
                    <Td>{item.quantity}</Td>
                    <Td>Rs. {item.price}</Td>
                    <Td>Rs. {totalprice(item)}</Td>

                    <Td>
                      <AiFillDelete
                        cursor="pointer"
                        onClick={() => removeFromCart(item.id)}
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot color="primary.header">
                <Tr>
                  <Td>{""}</Td>
                  <Td>{""}</Td>
                  <Td>{""}</Td>
                  <Td>{""}</Td>
                  <Td>Grand Total</Td>

                  <Td>Rs. {grandPrice()}</Td>
                  <Td>{""}</Td>
                </Tr>
              </Tfoot>
            </Table>
            <Box
              pt="20px"
              pb="20px"
              px="20px"
              display="flex"
              justifyContent="end"
            >
              <Button
                onClick={() => navigate("/paymentsuccessful")}
                bg="primary.header"
                color="primary.htext"
              >
                Proceed for payment
              </Button>
            </Box>
          </TableContainer>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default AddtoCart;
