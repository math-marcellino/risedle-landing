import { Flex, Text, Button } from '@chakra-ui/react';
import ThreeCards from './ThreeCards';

const FirstJumbotron = () => {
    return (
        <Flex
            maxW="6xl"
            w="full"
            direction={{ base: 'column', tablet: 'row' }}
            position="relative"
            alignItems="center"
            py={{ base: '16', tablet: '40' }}
        >
            <Flex
                direction="column"
                alignItems={{ base: 'center', tablet: 'start' }}
                gap={{ base: '10', laptop: '12' }}
                maxW="2xl"
            >
                <Flex
                    direction="column"
                    gap={{ base: '6', laptop: '8' }}
                    maxW={{ tablet: '343px', laptop: '520px', desktop: '1057px' }}
                >
                    <Text
                        display="flex"
                        align={{ base: 'center', tablet: 'left' }}
                        variant={{ base: 'heading.h1', desktop: 'heading.h0' }}
                        color="dark.neutral.primary"
                        textShadow="sm"
                    >
                        Leverage Everything
                    </Text>
                    <Text
                        align={{ base: 'center', tablet: 'left' }}
                        variant={{
                            base: 'paragraph.m',
                            laptop: 'paragraph.l',
                            desktop: 'paragraph.xl',
                        }}
                        color="dark.neutral.medium"
                        opacity="0.7"
                        textShadow="sm"
                    >
                        Boost your exposure to any crypto assets or create your own leverage market
                        on top of Fuse
                    </Text>
                </Flex>
                <Flex gap="2.5">
                    <Button size={{ base: 'md', desktop: 'lg' }} variant="primary.default">
                        Explore Risedle
                    </Button>
                    <Button size={{ base: 'md', desktop: 'lg' }} variant="secondary.default">
                        Documentation
                    </Button>
                </Flex>
            </Flex>
            <ThreeCards
                position={{ base: 'relative', tablet: 'absolute' }}
                right="0"
                translateX={{ base: '0', tablet: '6%', laptop: '5%', desktop: '37%' }}
            />
        </Flex>
    );
};

export default FirstJumbotron;
