import {
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Button,
  Link,
  Image,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      height={{ base: "auto", md: "308px" }}
      justifyContent="center"
      alignItems="center"
      gap={{ base: "2rem", md: "10rem" }}
      bg="linear-gradient(0deg, rgba(235,235,235,1) 45%, rgba(215,207,207,1) 81%)"
      p={4}
    >
      <VStack height="auto" width={{ base: "100%", md: "359px" }} spacing={4}>
        <HStack>
          <Text fontSize="32px" fontWeight="bold">
            CONTACTO
          </Text>
          <Link href="https://web.whatsapp.com/" isExternal>
            <Image src="../src/img/wsp.png" alt="whatsapp" />
          </Link>
        </HStack>
        <VStack spacing={2}>
          <Text>Dirección: Jr. Manuel Villavicencio 472</Text>
          <Text>Chimbote, Perú</Text>
          <Text>Correo: info@plazasantander.com.pe</Text>
          <Button height="60px" width="320px" colorScheme="black" variant="outline">
            COMO LLEGAR
          </Button>
        </VStack>
      </VStack>

      <VStack height="auto" width={{ base: "100%", md: "359px" }} spacing={4}>
        <Text fontSize="32px" fontWeight="bold" marginTop="5px">
          HORARIO
        </Text>
        <Text marginTop="7px">Lunes a Domingo</Text>
        <Text>10:00 am - 10:00 pm</Text>
      </VStack>

      <VStack height="auto" width={{ base: "100%", md: "400px" }} spacing={4}>
        <Text fontSize="32px" fontWeight="bold" marginTop="5px">
          SÍGUENOS
        </Text>
        <HStack spacing={4}>
          <Link href="https://www.facebook.com/" isExternal>
            <Image src="../src/img/f-removebg-preview 1.png" alt="Facebook" />
          </Link>
          <Link href="https://www.instagram.com/" isExternal>
            <Image src="../src/img/i-removebg-preview 1.png" alt="Instagram" />
          </Link>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Footer;