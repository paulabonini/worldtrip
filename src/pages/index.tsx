import Head from "next/head";

import {
  Box,
  Flex,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Swiper } from "../components/Swiper/Swiper";

export default function Home() {
  return (
    <>
      <Head>
        <title>Worldtrip | Home</title>
      </Head>
      <Flex direction="column" align="center" justify="center">
        <Box as="header" padding={4}>
          <Image src="/logo.svg" alt="World trip logo" />
        </Box>
        <Box
          as="section"
          backgroundImage="url(/background.png)"
          backgroundRepeat="no-repeat"
          padding={4}
        >
          <Text as="h2" color="white.50" fontSize="20px">
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text as="p" color="gray.50" fontSize="14px">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
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
        <Box as="section" width="100%">
          <Swiper />
        </Box>
      </Flex>
    </>
  );
}
