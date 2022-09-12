import { Flex, Text, Button } from '@chakra-ui/react';
import ThreeCards from './ThreeCards';

const FirstJumbotron = () => {
    return (
        <Flex alignItems="center" py="40">
            <Flex direction="column" gap="8">
                <Text fontWeight="bold" fontSize="9xl" lineHeight="136px">
                    Leverage Everything
                </Text>
                <Text>
                    Boost your exposure to any crypto assets or create your own leverage market on
                    top of Fuse
                </Text>
                <Flex gap="2.5">
                    <Button>Explore Risedle</Button>
                    <Button>Documentation</Button>
                </Flex>
            </Flex>
            <ThreeCards />
        </Flex>
    );
};

export default FirstJumbotron;
