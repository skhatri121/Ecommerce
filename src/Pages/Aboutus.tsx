import { Box, Text } from "@chakra-ui/react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Aboutus = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Box>
        <Box maxW="1200px" m="0 auto">
          <Text>This is about us page </Text>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Aboutus;
