import { Box, Flex, Text } from "@chakra-ui/react";
import { Banner } from "../../components/Banner/Banner";
import { Header } from "../../components/Header/Header";

export function Europe() {
  return (
    <Flex direction="column">
      <Header />
      <Banner
        image="/images/europe-banner.png"
        alt="Europe Banner"
        title="Europa"
      />
      <Box textAlign="justify" padding="1.5rem 1rem">
        <Text fontSize="14">
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
      </Box>
      <Flex justifyContent="space-around">
        <Flex direction="column">
          <Text fontWeight="bold" color="yellow.500">
            50
          </Text>
          <Text>países</Text>
        </Flex>
        <Flex direction="column">
          <Text fontWeight="bold" color="yellow.500">
            60
          </Text>
          <Text>línguas</Text>
        </Flex>
        <Flex direction="column">
          <Text fontWeight="bold" color="yellow.500">
            24
          </Text>
          <Text>cidades +100</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
