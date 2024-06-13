import { Container, VStack, Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to Book Haven</Heading>
        <Text fontSize="lg" textAlign="center">Your one-stop shop for the best books around.</Text>
        <Box boxSize="sm">
          <Image src="/images/bookstore.jpg" alt="Bookstore" borderRadius="md" />
        </Box>
        <Button colorScheme="teal" size="lg" rightIcon={<FaShoppingCart />}>
          Shop Now
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;