import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { Banner } from "../../components/Banner/Banner";
import { CityCard } from "../../components/CityCard/CityCard";
import { Header } from "../../components/Header/Header";
import { IoIosArrowBack } from "react-icons/io";

export function Europe() {
  return (
    <Flex direction="column">
      <Header />
      <Box as="a" href="/" position="absolute" margin="20px">
        <IoIosArrowBack />
      </Box>
      <Banner
        image="/images/europe-banner.png"
        alt="Europe Banner"
        title="Europa"
      />
      <Flex
        direction={["column", "column", "row"]}
        justifyContent="space-evenly"
      >
        <Box textAlign="justify" padding="1.5rem 1rem" maxWidth={600}>
          <Text fontSize="14">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </Box>
        <Flex
          justifyContent="space-around"
          padding={{ md: "1.5rem", lg: "1.5rem" }}
        >
          <Flex direction="column" marginRight={{ md: "2rem", lg: "2rem" }}>
            <Text fontWeight="bold" color="yellow.500" fontSize="24">
              50
            </Text>
            <Text fontSize="18">países</Text>
          </Flex>
          <Flex direction="column" marginRight={{ md: "2rem", lg: "2rem" }}>
            <Text fontWeight="bold" color="yellow.500" fontSize="24">
              60
            </Text>
            <Text fontSize="18">línguas</Text>
          </Flex>
          <Flex direction="column">
            <Text fontWeight="bold" color="yellow.500" fontSize="24">
              24
            </Text>
            <Text fontSize="18">cidades +100</Text>
          </Flex>
        </Flex>
      </Flex>

      <Box margin={["30px 15px", "30px 6%"]} display={{ lg: "inline-block" }}>
        <Text
          as="h2"
          fontWeight="500"
          fontSize="24"
          marginLeft={{ lg: "1rem" }}
        >
          Cidades +100
        </Text>

        <Flex flexWrap="wrap">
          <CityCard
            city="Londres"
            country="Reino Unido"
            image="/flags/united-kingdom-flag.svg"
            alt="United Kingdom"
          />
          <CityCard
            city="Paris"
            country="França"
            image="/flags/france-flag.svg"
            alt="France"
          />
          <CityCard
            city="Roma"
            country="Itália"
            image="/flags/italy-flag.svg"
            alt="Italy"
          />
          <CityCard
            city="Praga"
            country="República Tcheca"
            image="/flags/czech-republic-flag.svg"
            alt="Czech Republic"
          />
          <CityCard
            city="Amsterdã"
            country="Holanda"
            image="/flags/netherlands-flag.svg"
            alt="Netherlands"
          />
        </Flex>
      </Box>
    </Flex>
  );
}
