import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { HiCheckCircle } from "react-icons/hi2";

const PaymentSuccessful = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Box bg="primary.mainbg">
        <Box maxW="1200px" m="0 auto" color="primary.htext" textAlign="center">
          <Box display="flex" justifyContent="center" p="50px">
            <Card maxW="sm">
              <CardBody
                display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                p="80px"
              >
                <HiCheckCircle color="green" fontSize="50px" />
                <Text>Success</Text>
              </CardBody>
              <Divider />
              <Box bg="green" color="primary.htext" p="50px">
                <Text>
                  Congratulations! Your payment has been received successfully.
                </Text>
              </Box>
            </Card>
          </Box>
          <Box pb="20px">
            <Link href="/">
              <Button>Back to Home Page</Button>
            </Link>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default PaymentSuccessful;
