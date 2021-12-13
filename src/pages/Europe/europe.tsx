import { Box, Flex, Image, Text } from "@chakra-ui/react";
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
    </Flex>
  );
}
