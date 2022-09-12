import { Flex, FlexProps, Link, Button, HStack, Container } from '@chakra-ui/react';
import { Logo } from '../Icons/Logo';

const Navbar = (props: FlexProps) => {
    return (
        <Container maxW="6xl">
            <Flex justifyContent="space-between" alignItems="center" py="4" {...props}>
                <HStack spacing="44px">
                    <Logo />
                    <HStack spacing="8">
                        <Link>Docs</Link>
                        <Link>Discord</Link>
                        <Link>Twitter</Link>
                    </HStack>
                </HStack>
                <Button>Explore Risedle</Button>
            </Flex>
        </Container>
    );
};

export default Navbar;
