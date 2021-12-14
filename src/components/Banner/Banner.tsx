import { Box, Image, Text } from "@chakra-ui/react";

interface BannerProps {
  image: string;
  alt: string;
  title: string;
}

export function Banner({ image, alt, title }: BannerProps) {
  return (
    <>
      <Image w="100%" src={image} alt={alt} />
      <Box
        position="absolute"
        top={["6%", "8%", "21%", "33%"]}
        left={["50%", "50%", "16%"]}
        transform="translate(-50%, -50%)"
        textAlign="center"
        color="white.50"
      >
        <Text
          fontSize={["28", "42"]}
          letterSpacing="wider"
          fontWeight="semibold"
        >
          {title}
        </Text>
      </Box>
    </>
  );
}
