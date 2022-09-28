import { Image, Flex, VStack, Text, Button } from '@chakra-ui/react';
import { EthriseGradient, AvaxriseGradient, GohmriseGradient } from './Gradients';

const ThirdJumbotron = () => {
    return (
        <Flex
            position="relative"
            justifyContent="space-between"
            alignItems="center"
            direction={{ base: 'column', laptop: 'row' }}
            gap={{ base: '72px', tablet: '16', laptop: '0' }}
            py={{ base: '60', laptop: '96' }}
        >
            <VStack
                align={{ base: 'middle', laptop: 'start' }}
                spacing="16"
                maxW={{ desktop: '648px', laptop: '460px' }}
                zIndex="20"
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
                        Risedle protocol working smooth as a butter in the markets. Running like a
                        porsche.
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
                zIndex="20"
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
                    <Text variant={{ base: 'display.d3', laptop: 'display.d2' }}>$2,234,234</Text>
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
                    <Text variant={{ base: 'display.d3', laptop: 'display.d2' }}>$2,234,234</Text>
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
                    <Text variant={{ base: 'display.d3', laptop: 'display.d2' }}>$22,233,335</Text>
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
            <EthriseGradient
                position="absolute"
                top={{ base: '48', tablet: '0' }}
                right={{
                    base: '-730px',
                    tablet: '-670px',
                    laptop: '-1100px',
                    desktop: '-820px',
                }}
                zIndex="10"
            />
            <GohmriseGradient
                position="absolute"
                top="28"
                left={{
                    base: '-1100px',
                    tablet: '-1000px',
                    laptop: '-750px',
                    desktop: '-800px',
                }}
                bottom={{ tablet: '24', laptop: '28', desktop: '8' }}
                zIndex="10"
            />
            <AvaxriseGradient
                position="absolute"
                bottom={{ base: '80', tablet: '36', laptop: '0', desktop: '24' }}
                left={{ base: '-600px', tablet: '-620px', laptop: '-320px', desktop: '-420px' }}
                zIndex="10"
            />
            <Image
                src="/assets/grid.png"
                position="absolute"
                top={{ base: '570px', tablet: '96', laptop: '290px', desktop: '48' }}
                transform="auto"
                scale={{ base: '250%', tablet: '150%', laptop: '100%' }}
                right={{ laptop: '-20', desktop: '-630px' }}
                h={{ laptop: '600px', desktop: '720px' }}
                zIndex="0"
            />
        </Flex>
    );
};

export default ThirdJumbotron;
