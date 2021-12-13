import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex as="header" padding={4} alignItems="center" direction="column">
      <Image
        width={["81px", "81px", "184.06px"]}
        height={["20px", "20px", "45.92px"]}
        src="/logo.svg"
        alt="World trip logo"
      />
    </Flex>
  );
}
