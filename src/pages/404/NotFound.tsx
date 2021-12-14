import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

export function NotFound() {
  return (
    <>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        textAlign="justify"
        bgColor="gray.50"
        h="100vh"
      >
        <Image
          width={["85%", "50%"]}
          marginTop="100px"
          src="/images/workers.jpg"
        />

        <Box
          position="absolute"
          top={["30%", "20%"]}
          left="50%"
          transform="translate(-50%,-70%)"
        >
          <Text as="h1" fontSize="26px" fontWeight="bold">
            Desculpe... Página em construção!
          </Text>
          <Text as="p" width={{ lg: "500px" }}>
            Estamos trabalhando para proporcionar uma melhor experiência.
            Pedimos desculpas pelo transtorno e agradecemos a compreensão!
          </Text>
        </Box>

        <Button as="a" href="/" colorScheme="blue" top={{ lg: "-50px" }}>
          Voltar
        </Button>
      </Flex>
    </>
  );
}
