import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function BackgroundBox({ children }: { children?: ReactNode }) {
  return (
    <Box position="relative" ml={{ base: "0", laptop: "120px" }} w="full">
      <Flex
        mx={{ base: "auto", laptop: "0" }}
        w="360px"
        h="440px"
        alignItems="center"
        rounded="36px"
        bg="dark.background.elevated"
        boxShadow={"10px 12px 141px rgba(93, 93, 93, 0.2)"}
      >
        {children}
      </Flex>
    </Box>
  );
}
