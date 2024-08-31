import React, {useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import {
  Button,
  HStack,
  VStack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Mantenimiento = () => {
  const { user, logout, isAuth } = useContext(AuthContext);
  if (!isAuth()) {
    return <Navigate to="/login" />;
  }

  return (
    <VStack spacing={4} align="stretch" p={5}>
      <FormControl as="fieldset">
        <HStack justifyContent="space-between" p={2}>
          <FormLabel as="legend">Usuario: {user.name}</FormLabel>
          <FormLabel as="legend">
            <Link onClick={logout}>
              Cerrar Sesión
            </Link>
          </FormLabel>
        </HStack>
        <VStack>
        <Button>
          <Link to={"/allstores"} >Administrar Tiendas</Link>
        </Button>
        <Button>
          <Link to={"/allevents"} >Administrar Eventos</Link>
        </Button>
        </VStack>
      </FormControl>
    </VStack>
  );
};

export default Mantenimiento;
