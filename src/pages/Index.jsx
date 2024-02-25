import { Box, Flex, Heading, Text, Button, Image, VStack, HStack, Container } from "@chakra-ui/react";
import { FaBookOpen, FaFeatherAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={10} py={20}>
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-around" py={10}>
          <VStack spacing={5} maxW="lg" align="start">
            <Heading as="h1" size="2xl" fontWeight="bold">
              Rotheon's Quest
            </Heading>
            <Text fontSize="xl" color="gray.600">
              Dive into an epic tale of adventure and mystery as Rotheon embarks on a journey that will take him across magical landscapes and into the depths of ancient secrets.
            </Text>
            <HStack>
              <Button leftIcon={<FaBookOpen />} colorScheme="teal" size="lg">
                Read a Sample
              </Button>
              <Button leftIcon={<FaFeatherAlt />} variant="outline" size="lg">
                Learn More
              </Button>
            </HStack>
          </VStack>
          <Box boxSize="sm" boxShadow="lg" borderRadius="md" overflow="hidden">
            <Image src="https://images.unsplash.com/photo-1529158062015-cad636e205a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwYm9vayUyMGNvdmVyfGVufDB8fHx8MTcwODg3MTM2N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Rotheon's Quest Book Cover" />
          </Box>
        </Flex>
        <Flex direction="column" align="center" justify="center">
          <Heading as="h2" size="lg" fontWeight="semibold" mb={3}>
            About the Author
          </Heading>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdXRob3IlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MDg4NzEzNjh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Author Portrait" mb={3} />
          <Text fontSize="md" color="gray.600" maxW="lg" textAlign="center">
            An enthusiast of mythical lore and grand adventures, the author brings to life this vivid world through a tapestry of words that will leave readers yearning for more.
          </Text>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
