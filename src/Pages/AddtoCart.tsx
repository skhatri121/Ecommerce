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
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <>
      <Header />
      <Navbar />
      <Box bgColor="primary.mainbg">
        <Box maxW="1200px" m="0 auto" pb="10px">
          <Table textAlign="center" w="100%">
            <Thead color="primary.htext">
              <Tr>
                <Td>S.N</Td>
                <Td>Product name</Td>
                <Td>Product Image</Td>
                <Td>Product Price</Td>
                <Td>Action</Td>
              </Tr>
            </Thead>
            <Tbody color="primary.htext">
              {cartItems.map((item, index) => (
                <Tr key={item.id}>
                  <Td>{index + 1}</Td>
                  <Td>{item.title}</Td>
                  <Td>
                    <Image src={item.thumbnail} w="80px" />
                  </Td>
                  <Td>Rs. {item.price}</Td>
                  <Td>
                    <AiFillDelete
                      cursor="pointer"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot color="primary.htext">
              <Tr>
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
            <Button onClick={() => navigate("/paymentsuccessful")}>
              Proceed for payment
            </Button>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default AddtoCart;
