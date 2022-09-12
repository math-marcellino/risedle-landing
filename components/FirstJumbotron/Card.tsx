import { Flex, FlexProps, Image, VStack, Text, chakra, shouldForwardProp } from '@chakra-ui/react';
import { Logo } from '../Icons/Logo';
import { isValidMotionProp, motion } from 'framer-motion';

interface CardProps extends FlexProps {
    token: 'ETH' | 'AVAX' | 'DPX';
}

const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Card = (props: CardProps) => {
    const { token, zIndex, ...restProps } = props;

    const options = {
        ETH: {
            color: 'linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, rgba(29, 29, 29, 0.4) 100%), linear-gradient(0deg, rgba(220, 44, 128, 0.6), rgba(220, 44, 128, 0.6)), radial-gradient(139.04% 139.04% at 3.93% 2.25%, rgba(0, 0, 0, 0) 22.95%, rgba(0, 0, 0, 0.8) 62.72%), radial-gradient(98.85% 98.53% at 20.91% 26.36%, #FA55AE 0%, #CAB2FF 79.17%)',
            translateX: '10px',
            delay: 2,
        },
        AVAX: {
            color: 'linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, rgba(29, 29, 29, 0.4) 100%), linear-gradient(0deg, rgba(211, 37, 37, 0.6), rgba(211, 37, 37, 0.6)), radial-gradient( 139.04% 139.04% at 3.93% 2.25%, rgba(0, 0, 0, 0) 22.95%, #000000 62.72%), radial-gradient( 121.58% 154.55% at 15% 38.86%, #f56e6e 0%, #ffeab3 93.24%)',
            translateX: '0',
            delay: 1,
        },
        DPX: {
            color: 'linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, rgba(29, 29, 29, 0.4) 100%), linear-gradient(0deg, rgba(67, 84, 239, 0.6), rgba(67, 84, 239, 0.6)), radial-gradient(139.04% 139.04% at 3.93% 2.25%, rgba(0, 0, 0, 0) 22.95%, rgba(0, 0, 0, 0.8) 62.72%), radial-gradient(133.02% 113.64% at 19.09% 25.45%, #4354EF 0%, #23A9F5 84.38%)',
            translateX: '-10px',
            delay: 0,
        },
    };

    return (
        <ChakraBox
            zIndex={zIndex}
            initial={{
                opacity: 0,
                translateY: '50px',
                translateX: options[token].translateX,
            }}
            animate={{ opacity: 1, translateY: token === 'ETH' ? '20px' : '0px' }}
            // @ts-ignore
            transition={{
                translateY: { type: 'spring', stiffness: 700 },
                opacity: { duration: 0.1 },
                duration: 0.7,
                delay: options[token].delay,
            }}
        >
            <Flex
                as={motion.div}
                bg={options[token].color}
                backgroundBlendMode="multiply, overlay, overlay, normal"
                justifyContent="space-between"
                w="296px"
                h="408px"
                direction="column"
                py="6"
                alignItems="center"
                borderRadius="3xl"
                boxShadow="0px 25px 50px 4px rgba(0, 0, 0, 0.45)"
                {...restProps}
            >
                <Logo />
                <Image src={`/assets/${token}.svg`} w="175px" h="175px" />
                <VStack>
                    <Text>Auto-boosted ETH</Text>
                    <Text>Boost to claim your position</Text>
                </VStack>
            </Flex>
        </ChakraBox>
    );
};

export default Card;
