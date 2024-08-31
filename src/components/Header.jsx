import { Box, Flex, HStack, VStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      bgColor="#F5F5F5"
      height="100px"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      px={{ base: 4, md: 10 }}
    >
      <Image
        height="100px"
        width="150px"
        src="../src/img/logo.png"
        alt="logo de la plaza"
        display={{ base: "block", md: "block" }}
      />
      <HStack
        display={{ base: "none", md: "flex" }}
        spacing={8}
        fontSize="20px"
        textTransform="uppercase"
        textAlign="center"
      >
        <Link to="/">Home</Link>
        <Link to="/tiendas">Tiendas</Link>
        <Link to="/eventos">Eventos</Link>
        <Link to="/Comollegar">Ubícanos</Link>
        <Link to="/contactos">Contactos</Link>
        <Link to="/login">Login</Link>
      </HStack>
      <Box display={{ base: "block", md: "none" }}>
        <Menu>
          <MenuButton as={Box} cursor="pointer">
            ☰
          </MenuButton>
          <MenuList>
            <MenuItem as={Link} to="/">Home</MenuItem>
            <MenuItem as={Link} to="/tiendas">Tiendas</MenuItem>
            <MenuItem as={Link} to="/eventos">Eventos</MenuItem>
            <MenuItem as={Link} to="/Comollegar">Ubícanos</MenuItem>
            <MenuItem as={Link} to="/contactos">Contactos</MenuItem>
            <MenuItem as={Link} to="/login">Login</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};
export default Header;