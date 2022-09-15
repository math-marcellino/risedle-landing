import { Flex, FlexProps, Link, Button, HStack, Container, Text } from '@chakra-ui/react';
import { Logo } from '../Icons/Logo';

const Navbar = (props: FlexProps) => {
    return (
        <Container maxW="6xl" position="fixed">
            <Flex justifyContent="space-between" alignItems="center" py="4" {...props}>
                <HStack spacing="44px">
                    <Logo />
                    <HStack spacing="8">
                        <Link isExternal>
                            <Text
                                variant="heading.h7"
                                color="dark.neutral.soft"
                                opacity="0.8"
                                textDecoration="none"
                            >
                                Docs
                            </Text>
                        </Link>
                        <Link isExternal>
                            <Text
                                variant="heading.h7"
                                color="dark.neutral.soft"
                                opacity="0.8"
                                textDecoration="none"
                            >
                                Discord
                            </Text>
                        </Link>
                        <Link isExternal>
                            <Text
                                variant="heading.h7"
                                color="dark.neutral.soft"
                                opacity="0.8"
                                textDecoration="none"
                            >
                                Twitter
                            </Text>
                        </Link>
                    </HStack>
                </HStack>
                <Button size="md" variant="secondary.default">
                    Explore Risedle
                </Button>
            </Flex>
        </Container>
    );
};

export default Navbar;
