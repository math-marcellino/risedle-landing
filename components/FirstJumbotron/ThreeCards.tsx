import { Box, BoxProps } from '@chakra-ui/react';
import Card from './Card';

const ThreeCards = (props: BoxProps) => {
    return (
        <Box
            position="relative"
            maxW="fit-content"
            transform={{ base: 'scale(0.8)', tablet: 'none', laptop: 'scale(1.3)' }}
        >
            <Card
                token="DPX"
                position="absolute"
                top="0"
                left="0"
                transform="rotate(-12deg)"
                transformOrigin="bottom right"
                zIndex="1"
            />
            <Card token="AVAX" position="absolute" zIndex="2" />
            <Card token="ETH" transform="rotate(12deg)" transformOrigin="bottom left" zIndex="3" />
        </Box>
    );
};

export default ThreeCards;
