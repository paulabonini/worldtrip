import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface CityCardProps {
  city: string;
  country: string;
  image: string;
  alt: string;
}

export function CityCard({ city, country, image, alt }: CityCardProps) {
  return (
    <Box margin="0 auto" maxWidth="256">
      <Image w="100%" src="/images/london.png" alt="London" />
      <Flex
        border="1px solid"
        borderColor="yellow.500"
        borderTop="0"
        padding="12px 0"
        justifyContent="space-around"
        backgroundColor="white"
        fontFamily="Barlow"
      >
        <Box lineHeight="32px">
          <Text fontWeight="600" fontSize="20">
            {city}
          </Text>
          <Text fontWeight="500" fontSize="16" color="GrayText">
            {country}
          </Text>
        </Box>
        <Image src={image} alt={alt} />
      </Flex>
    </Box>
  );
}
