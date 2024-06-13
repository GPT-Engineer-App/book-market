import { Container, VStack, Box, Heading, Text, Image, SimpleGrid } from "@chakra-ui/react";

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "/images/great-gatsby.jpg",
    description: "A novel set in the Roaring Twenties, exploring themes of wealth, society, and the American Dream."
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "/images/to-kill-a-mockingbird.jpg",
    description: "A story of racial injustice and childhood innocence in the Deep South."
  },
  {
    title: "1984",
    author: "George Orwell",
    image: "/images/1984.jpg",
    description: "A dystopian novel about totalitarianism and surveillance."
  }
];

const BookList = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Available Books</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {books.map((book, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
              <Image src={book.image} alt={book.title} borderRadius="md" mb={4} />
              <Heading as="h2" size="md" mb={2}>{book.title}</Heading>
              <Text fontSize="sm" color="gray.500" mb={4}>by {book.author}</Text>
              <Text>{book.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default BookList;