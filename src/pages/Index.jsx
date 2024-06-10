import { Box, Container, Flex, Heading, Text, VStack, HStack, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <Box as="header" bg="brand.700" color="white" py={4} mb={6}>
        <Heading as="h1" size="xl" textAlign="center">
          Tech Forum
        </Heading>
      </Box>

      <Flex>
        {/* Sidebar */}
        <Box as="aside" w="20%" p={4} bg="gray.100" borderRadius="md" mr={6}>
          <Heading as="h2" size="md" mb={4}>
            Categories
          </Heading>
          <VStack align="start" spacing={2}>
            <Link href="#">General Discussion</Link>
            <Link href="#">Programming</Link>
            <Link href="#">Hardware</Link>
            <Link href="#">Software</Link>
            <Link href="#">Networking</Link>
          </VStack>
        </Box>

        {/* Main Content */}
        <Box as="main" flex="1" p={4}>
          <Heading as="h2" size="lg" mb={4}>
            Discussion Topics
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} bg="gray.50" borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md">How to learn JavaScript in 2023?</Heading>
              <Text mt={2}>Started by User123</Text>
            </Box>
            <Box p={4} bg="gray.50" borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md">Best practices for backend development</Heading>
              <Text mt={2}>Started by DevGuru</Text>
            </Box>
            <Box p={4} bg="gray.50" borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md">Understanding cloud computing</Heading>
              <Text mt={2}>Started by CloudMaster</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="brand.700" color="white" py={4} mt={6} textAlign="center">
        <Text>&copy; 2023 Tech Forum. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;