import Head from "next/head";

import {
  Box,
  Flex,
  Icon,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { Swiper } from "../components/Swiper/Swiper";

import { FaCircle } from "react-icons/fa";
import { Header } from "../components/Header/Header";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    xl: true,
  });

  return (
    <>
      <Head>
        <title>Worldtrip | Home</title>
      </Head>
      <Flex direction="column">
        <Header />
        <Box
          as="section"
          backgroundImage="url(/banner.png)"
          backgroundRepeat="no-repeat"
          width="100vw"
          height={["163px", "163px", "335px"]}
          padding={4}
        >
          <Box
            marginTop={["0", "0", "5%"]}
            marginLeft={["2%", "8%"]}
            width={["350px", "350px", "470px"]}
          >
            <Text
              fontSize={["20px", "20px", "36px"]}
              fontWeight="500"
              color="white.50"
            >
              5 Continentes,
            </Text>
            <Text
              fontSize={["20px", "20px", "36px"]}
              fontWeight="500"
              color="white.50"
            >
              infinitas possibilidades.
            </Text>
            <Text
              as="p"
              color="gray.50"
              marginTop={3}
              fontSize={["14px", "14px", "20px"]}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
            {isWideVersion && (
              <Image
                right="100"
                top="150"
                position="absolute"
                src="/Airplane.png"
                alt="airplane"
              />
            )}
          </Box>
        </Box>
        <Box as="section">
          {isWideVersion ? (
            <Flex
              margin="6rem 0"
              alignItems="center"
              justifyContent="space-evenly"
              textAlign="center"
              fontSize="24"
              fontWeight="600"
            >
              <Box>
                <Image src="/icons/cocktail.svg" alt="Cocktail" mb="1rem" />
                <Text>vida noturna</Text>
              </Box>
              <Box>
                <Image src="/icons/surf.svg" alt="Surf" mb="1rem" />
                <Text>praia</Text>
              </Box>
              <Box>
                <Image src="/icons/building.svg" alt="Building" mb="1rem" />
                <Text>moderno</Text>
              </Box>
              <Box>
                <Image src="/icons/museum.svg" alt="museum" mb="1rem" />
                <Text>clássico</Text>
              </Box>
              <Box>
                <Image src="/icons/earth.svg" alt="earth" mb="1rem" />
                <Text>e mais...</Text>
              </Box>
            </Flex>
          ) : (
            <Flex
              direction="column"
              margin="1rem auto"
              alignItems="center"
              maxWidth="200px"
              flexWrap="wrap"
            >
              <Flex justifyContent="space-between" flexWrap="wrap">
                <Flex alignItems="center" justifyContent="center">
                  <Icon
                    as={FaCircle}
                    fontSize="0.5rem"
                    color="yellow.500"
                    mr={2}
                  />
                  <Text>vida noturna</Text>
                </Flex>
                <Flex alignItems="center" justifyContent="center">
                  <Icon
                    as={FaCircle}
                    fontSize="0.5rem"
                    color="yellow.500"
                    mr={2}
                  />
                  <Text>praia</Text>
                </Flex>
                <Flex alignItems="center" justifyContent="center">
                  <Icon
                    as={FaCircle}
                    fontSize="0.5rem"
                    color="yellow.500"
                    mr={2}
                  />
                  <Text>moderno</Text>
                </Flex>
                <Flex alignItems="center" justifyContent="center">
                  <Icon
                    as={FaCircle}
                    fontSize="0.5rem"
                    color="yellow.500"
                    mr={2}
                  />
                  <Text>clássico</Text>
                </Flex>
              </Flex>

              <Flex alignItems="center">
                <Icon
                  as={FaCircle}
                  fontSize="0.5rem"
                  color="yellow.500"
                  mr={2}
                />
                <Text>e mais...</Text>
              </Flex>
            </Flex>
          )}
          <Box
            _after={{ content: `""` }}
            border="1px solid"
            borderColor="gray.100"
            width="20%"
            maxWidth="90px"
            margin="24px auto"
            opacity="0.5"
          >
            <span></span>
          </Box>
          <Box
            fontWeight={500}
            fontSize={["20px", "20px", "36px"]}
            textAlign="center"
            color="gray.100"
          >
            <Text>Vamos nessa?</Text>
            <Text>Então escolha seu continente</Text>
          </Box>
        </Box>
        <Box as="section" margin="24px auto" width={["100%", "50%"]}>
          <Swiper />
        </Box>
      </Flex>
    </>
  );
}
