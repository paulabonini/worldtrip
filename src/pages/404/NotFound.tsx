import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

export function NotFound() {
  return (
    <>
      <Flex
        padding="1rem 0"
        direction="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        bgColor="gray.50"
        h="100vh"
      >
        <Image width="50%" src="/images/workers.jpg" />

        <Box
          position="absolute"
          top="20%"
          left="50%"
          transform="translate(-50%,-70%)"
        >
          <Text as="h1" fontSize="26px" fontWeight="bold">
            Desculpe... Página em construção!
          </Text>
          <Text as="p" width="500px">
            Estamos trabalhando para proporcionar uma melhor experiência.
            Pedimos desculpas pelo transtorno e agradecemos a compreensão!
          </Text>
        </Box>

        <Button as="a" href="/" colorScheme="blue">
          Voltar
        </Button>
      </Flex>
    </>
  );
}
