import {
  Box,
  Flex,
  Container,
  Spacer,
  Link,
  Center,
  ListItem,
  List,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import links from "../../utils/links";
import { Logo } from "../Icons/Logo";
import { FooterSection } from "./FooterComponent";

export default function Footer() {
  const gray3 = useColorModeValue("gray.light.3", "gray.dark.3");
  const gray10 = useColorModeValue("gray.light.10", "gray.dark.10");
  const gray12 = useColorModeValue("gray.light.12", "gray.dark.12");

  return (
    <Container
      as="footer"
      maxW="7xl"
      mt="120px"
    >
      <Flex
        mx={{ mobile: "auto", tablet: "0" }}
        borderTop="1px"
        borderColor={gray3}
        pt="9"
        pb="12"
        direction={{ base: "column-reverse", tablet: "row" }}
      >
        <Flex direction="column" mt={{ base: "0", mobile: "16", tablet: '0' }} as="section">
          <Logo />
          <NextLink href="https://risedle.com" passHref>
            <Link
              fontSize="sm"
              lineHeight="4"
              color={gray10}
              _hover={{ color: gray12 }}
              data-testid="FooterBarLinkLabs"
              pt={{ mobile: "2", tablet: "16" }}
            >
              © 2022 Risedle Labs, Inc. All rights reserved.
            </Link>
          </NextLink>
        </Flex>
        <Spacer />
        <FooterSection>
          <FooterSection.List leftItem>
            <FooterSection.ListTitle>Product</FooterSection.ListTitle>
            <FooterSection.ListItem>Leverage</FooterSection.ListItem>
            <FooterSection.ListItem>Margin</FooterSection.ListItem>
            <FooterSection.ListItem>Boost</FooterSection.ListItem>
          </FooterSection.List>
          <FooterSection.List>
            <FooterSection.ListTitle>Community</FooterSection.ListTitle>
            <FooterSection.ListItem links={links.discord}>Discord</FooterSection.ListItem>
            <FooterSection.ListItem links={links.twitter}>Twitter</FooterSection.ListItem>
            <FooterSection.ListItem links={links.blog}>Mirror</FooterSection.ListItem>
          </FooterSection.List>
          <FooterSection.List>
            <FooterSection.ListTitle>Resource</FooterSection.ListTitle>
            <FooterSection.ListItem links={links.docs}>Documentation</FooterSection.ListItem>
            <FooterSection.ListItem links={links.github}>Github</FooterSection.ListItem>
            <FooterSection.ListItem>Press</FooterSection.ListItem>
          </FooterSection.List>
        </FooterSection>
      </Flex>
    </Container>
  );
}
