import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  HStack,
  VStack,
  FormLabel,
  Input,
  Textarea,
  Button,
  AbsoluteCenter,
  Divider,
  Box,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaRegCalendarDays } from "react-icons/fa6";
import { MdSchedule } from "react-icons/md";

const Contactos = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_plazasantander", "template_tj28rr4", form.current, {
        publicKey: "YmSn-wUJzwvBLpSxy",
      })
      .then(
        () => {
          alert("Mensaje enviado");
          const inputUser_name = document.getElementById("user_name");
          inputUser_name.value = "";
          const inputUser_email = document.getElementById("user_email");
          inputUser_email.value = "";
          const inputMessage = document.getElementById("message");
          inputMessage.value = "";
        },
        (error) => {
          console.log("Mensaje no enviado...", error.text);
        }
      );
  };

  return (
    <VStack spacing={6} p={4}>
      <Box
        position="relative"
        bg="#FFFFFF"
        w="100%"
        mt={8}
        p={4}
        color="#BA1FB5"
      >
        <Divider border="solid 3px" />
        <AbsoluteCenter bg="#FFFFFF" px={{ base: "4", md: "8", lg: "16" }}>
          <Heading as="h1" fontSize={{ base: "24px", md: "32px", lg: "40px" }} align="center">
            CONTACTO
          </Heading>
        </AbsoluteCenter>
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: "4", md: "8" }}
        justifyContent="center"
        p={4}
      >
        <Box
          flex="1"
          maxW={{ base: "100%", md: "50%" }}
          p={4}
          border="1px solid #e2e8f0"
          borderRadius="md"
          boxShadow="md"
        >
          <form ref={form} onSubmit={sendEmail}>
            <VStack spacing={4} align="stretch">
              <HStack spacing={4}>
                <FormLabel width="100%" mb="0">
                  Nombre
                </FormLabel>
                <Input
                  id="user_name"
                  type="text"
                  name="user_name"
                  width="100%"
                />
              </HStack>
              <HStack spacing={4}>
                <FormLabel width="100%" mb="0">
                  Email
                </FormLabel>
                <Input
                  id="user_email"
                  type="text"
                  name="user_email"
                  width="100%"
                />
              </HStack>
              <HStack spacing={4}>
                <FormLabel width="100%" mb="0">
                  Mensaje
                </FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Escriba aquí su mensaje"
                  width="100%"
                />
              </HStack>
              <Button
                type="submit"
                variant="solid"
                backgroundColor="#BA1FB5"
                color="#FFFFFF"
                width="100%"
              >
                Enviar
              </Button>
            </VStack>
          </form>
        </Box>
        <Box
          flex="1"
          maxW={{ base: "100%", md: "50%" }}
          p={4}
          border="1px solid #e2e8f0"
          borderRadius="md"
          boxShadow="md"
        >
          <VStack spacing={4}>
            <Text fontSize={{ base: "18px", md: "20px" }} as="b">
              Plaza Santander
            </Text>
            <HStack spacing={2}>
              <FaPhone />
              <Text>945 555 567</Text>
            </HStack>
            <HStack spacing={2}>
              <MdEmail />
              <Text>info@plazasantander.com.pe</Text>
            </HStack>
            <HStack spacing={2}>
              <FaRegCalendarDays />
              <Text>Lunes a Sábado</Text>
            </HStack>
            <HStack spacing={2}>
              <MdSchedule />
              <Text>09:00 am a 06:00 pm</Text>
            </HStack>
          </VStack>
        </Box>
      </Stack>
    </VStack>
  );
};

export default Contactos;