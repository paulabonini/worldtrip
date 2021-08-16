import Head from "next/head";

import {
  Box,
  Flex,
  Image,
  ListItem,
  Text,
  UnorderedList,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Swiper } from "../components/Swiper/Swiper";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Head>
        <title>Worldtrip | Home</title>
      </Head>
      <Flex direction="column">
        <Box as="header" padding={4} alignSelf="center">
          <Image
            width={["81px", "81px", "184.06px"]}
            height={["20px", "20px", "45.92px"]}
            src="/logo.svg"
            alt="World trip logo"
          />
        </Box>
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
          <UnorderedList padding="8px 0" color="gray.100" fontWeight={500}>
            <ListItem>vida noturna</ListItem>
            <ListItem>praia</ListItem>
            <ListItem>
              <Text display="inline" alignSelf="flex-start">
                moderno
              </Text>
            </ListItem>
            <ListItem>
              <Text display="inline" alignSelf="flex-end">
                clássico
              </Text>
            </ListItem>

            <ListItem>
              <Text textAlign="center" marginTop="8px">
                e mais...
              </Text>
            </ListItem>
          </UnorderedList>
          <Box
            _after={{ content: `""` }}
            border="1px solid"
            borderColor="gray.100"
            width="20%"
            margin="16px auto"
            opacity="0.5"
          >
            <span></span>
          </Box>
          <Box fontWeight={500} textAlign="center" color="gray.100">
            <Text>Vamos nessa?</Text>
            <Text>Então escolha seu continente</Text>
          </Box>
        </Box>
        <Box as="section" marginTop="16px" width={["100%", "50%"]}>
          <Swiper />
        </Box>
      </Flex>
    </>
  );
}
