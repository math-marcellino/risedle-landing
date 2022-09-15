import { Flex, Text, Button } from '@chakra-ui/react';
import ThreeCards from './ThreeCards';

const FirstJumbotron = () => {
    return (
        <Flex alignItems="center" py="40">
            <Flex direction="column" gap="12" maxW="2xl">
                <Text
                    display="flex"
                    variant="heading.h0"
                    color="dark.neutral.primary"
                    textShadow="sm"
                >
                    Leverage Everything
                </Text>
                <Text
                    variant="paragraph.xl"
                    color="dark.neutral.medium"
                    opacity="0.7"
                    textShadow="sm"
                >
                    Boost your exposure to any crypto assets or create your own leverage market on
                    top of Fuse
                </Text>
                <Flex gap="2.5">
                    <Button size="lg" variant="primary.default">
                        Explore Risedle
                    </Button>
                    <Button size="lg" variant="secondary.default">
                        Documentation
                    </Button>
                </Flex>
            </Flex>
            <ThreeCards position="absolute" right="0" />
        </Flex>
    );
};

export default FirstJumbotron;
