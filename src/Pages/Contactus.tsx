import { Box, Text } from "@chakra-ui/react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Contactus = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Box>
        <Box maxW="1200px" m="0 auto">
          <Text>This is contact</Text>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Contactus;
