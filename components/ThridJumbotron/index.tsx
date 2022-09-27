import { Box, Flex, VStack, Text, Button } from '@chakra-ui/react';

const ThirdJumbotron = () => {
    return (
        <Box>
            <Flex
                justifyContent="space-between"
                alignItems="center"
                direction={{ base: 'column', laptop: 'row' }}
                gap={{ base: '72px', tablet: '16', laptop: '0' }}
            >
                <VStack
                    align={{ base: 'middle', laptop: 'start' }}
                    spacing="16"
                    maxW={{ desktop: '648px', laptop: '460px' }}
                >
                    <VStack align={{ base: 'center', laptop: 'start' }} spacing="6">
                        <Text
                            variant={{ base: 'heading.h1', desktop: 'heading.h0' }}
                            color="dark.neutral.primary"
                            textAlign={{ base: 'center', laptop: 'left' }}
                        >
                            Reliable & Trusted
                        </Text>
                        <Text
                            variant={{
                                base: 'paragraph.m',
                                laptop: 'paragraph.l',
                                desktop: 'paragraph.xl',
                            }}
                            color="dark.neutral.soft"
                            textAlign={{ base: 'center', laptop: 'left' }}
                        >
                            Risedle protocol working smooth as a butter in the markets. Running like
                            a porsche.
                        </Text>
                    </VStack>
                    <Button
                        variant="primary.default"
                        size={{ base: 'md', desktop: 'lg' }}
                        display={{ base: 'none', laptop: 'flex' }}
                    >
                        Open Position &rarr;
                    </Button>
                </VStack>
                <Flex
                    direction={{ base: 'row', laptop: 'column' }}
                    justifyContent="center"
                    flexWrap="wrap"
                    gap="72px"
                >
                    <VStack align={{ base: 'center', laptop: 'start' }} spacing="4">
                        <Text
                            fontSize="xs"
                            textTransform="uppercase"
                            fontWeight="semibold"
                            color="dark.neutral.soft"
                        >
                            Trading Volume 24H
                        </Text>
                        <Text variant={{ base: 'display.d3', laptop: 'display.d2' }}>
                            $2,234,234
                        </Text>
                    </VStack>
                    <VStack align={{ base: 'center', laptop: 'start' }} spacing="4">
                        <Text
                            fontSize="xs"
                            textTransform="uppercase"
                            fontWeight="semibold"
                            color="dark.neutral.soft"
                        >
                            Transaction 24H
                        </Text>
                        <Text variant={{ base: 'display.d3', laptop: 'display.d2' }}>
                            $2,234,234
                        </Text>
                    </VStack>
                    <VStack align={{ base: 'center', laptop: 'start' }} spacing="4">
                        <Text
                            fontSize="xs"
                            textTransform="uppercase"
                            fontWeight="semibold"
                            color="dark.neutral.soft"
                        >
                            Total AUM
                        </Text>
                        <Text variant={{ base: 'display.d3', laptop: 'display.d2' }}>
                            $22,233,335
                        </Text>
                    </VStack>
                </Flex>
                <Button
                    variant="primary.default"
                    size={{ base: 'md', desktop: 'lg' }}
                    display={{ base: 'flex', laptop: 'none' }}
                    w="fit-content"
                >
                    Open Position &rarr;
                </Button>
            </Flex>
        </Box>
    );
};

export default ThirdJumbotron;
