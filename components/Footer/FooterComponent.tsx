import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import NextLink from "next/link";

function FooterSection({ children }: { children: ReactNode }) {
  return (
    <Flex margin={{ base: "auto", tablet: "0" }} as="nav" textAlign="left">
      {children}
    </Flex>
  );
}

function FooterList({ children, leftItem }: { children: ReactNode; leftItem?: boolean }) {
  return (
    <List display="flex" flexDir="column" textAlign="left" ml={leftItem ? "0" : "6"}>
      {children}
    </List>
  );
}

function FooterListTitle({ children }: { children: ReactNode }) {
  return (
    <Text
      variant="paragraph.xs"
      color="dark.neutral.primary"
      fontWeight="semibold"
      as="li"
    >
      {children}
    </Text>
  );
}

function FooterListItem({ children, links }: { children: ReactNode; links?: string; }) {
  return (
    <ListItem>
      <NextLink href={links ?? ""} passHref>
        <Link target="_blank" data-testid="FooterBarLinkTwitter">
          <Text pt="4" variant="paragraph.xs" color="dark.neutral.soft">
            {children}
          </Text>
        </Link>
      </NextLink>
    </ListItem>
  );
}

FooterSection.List = FooterList;
FooterSection.ListTitle = FooterListTitle;
FooterSection.ListItem = FooterListItem;

export { FooterSection };
