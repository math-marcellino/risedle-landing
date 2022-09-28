import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import colors from './colors';
import Text from './components/Text';
import Button from './components/Button';

const breakpoints = {
    mobile: '375px', // => @media (ming-width: 375px) { ... }
    tablet: '640px', // => @media (min-width: 640px) { ... }
    laptop: '1024px', // => @media (min-width: 1024px) { ... }
    desktop: '1280px', // => @media (min-width: 1280px) { ... }
};

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

const theme = extendTheme({
    components: {
        Text,
        Button,
    },
    colors,
    breakpoints,
    config,
    styles: {
        global: () => ({
            'html, body': {
                bg: '#03050D',
                overflowX: 'hidden',
            },
        }),
    },
});

export default theme;
