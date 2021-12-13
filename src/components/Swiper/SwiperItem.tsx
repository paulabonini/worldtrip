import { Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

interface SwiperItemProps {
  path: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export function SwiperItem({
  path,
  image,
  imageAlt,
  title,
  description,
}: SwiperItemProps) {
  return (
    <>
      <Image w="100%" src={image} alt={imageAlt} />
      <Link href={path}>
        <Flex
          as="a"
          width="100%"
          height="100%"
          direction="column"
          align="center"
          justifyContent="center"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          bg="rgba(0, 0 , 0, 0.35)"
          textAlign="center"
          color="white.50"
        >
          <Text fontSize="xl" fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="xs">{description}</Text>
        </Flex>
      </Link>
    </>
  );
}
