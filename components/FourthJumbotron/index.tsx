import { Grid, VStack, Text, Button } from '@chakra-ui/react';
import { FourthJumbotronBox, FourthJumbotronTitle } from './FourthJumbotronComponents';

const FourthJumbotron = () => {
    return (
        <VStack spacing={{ base: '16', laptop: '68px', desktop: '20' }}>
            <VStack spacing="7" align="start">
                <Text
                    variant={{ base: 'heading.h1', desktop: 'heading.h0' }}
                    color="dark.neutral.primary"
                    textAlign={{ base: 'center', laptop: 'start' }}
                >
                    Dive Deeper Into Risedle
                </Text>
                <Text
                    variant={{
                        base: 'paragraph.m',
                        laptop: 'paragraph.l',
                        desktop: 'paragraph.xl',
                    }}
                    color="dark.neutral.soft"
                    maxW={{ base: 'full', laptop: '434px' }}
                >
                    Read our docs, join our Discord, or jump into our Twitter account to get more
                    learning resources!
                </Text>
            </VStack>
            <Grid
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    tablet: 'repeat(2, 1fr)',
                    laptop: 'repeat(3, 1fr)',
                }}
                gap="6"
                w="full"
            >
                <FourthJumbotronBox>
                    <FourthJumbotronTitle>Documentation</FourthJumbotronTitle>
                    <Button
                        variant="secondary.default"
                        bgColor="dark.primary"
                        size="md"
                        w="fit-content"
                    >
                        Read Docs
                    </Button>
                </FourthJumbotronBox>
                <FourthJumbotronBox>
                    <FourthJumbotronTitle>Discord Server</FourthJumbotronTitle>
                    <Button
                        variant="secondary.default"
                        bgColor="brand.discord"
                        size="md"
                        w="fit-content"
                    >
                        Join Discord
                    </Button>
                </FourthJumbotronBox>
                <FourthJumbotronBox colSpan={{ tablet: 2, laptop: 1 }}>
                    <FourthJumbotronTitle>Twitter</FourthJumbotronTitle>
                    <Button
                        variant="secondary.default"
                        bgColor="brand.twitter"
                        size="md"
                        w="fit-content"
                    >
                        Follow @risedle
                    </Button>
                </FourthJumbotronBox>
            </Grid>
        </VStack>
    );
};

export default FourthJumbotron;
