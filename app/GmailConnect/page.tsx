import { Box, ChakraProvider } from "@chakra-ui/react";
import GmailConnect from "./GmailConnect";

const Page = () => {
  return (
    <ChakraProvider>
      <Box bg="#000319" w="full" h="full" minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <GmailConnect />
      </Box>
    </ChakraProvider>
  );
};

export default Page;
