import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import colors from './colors';
import Text from './components/Text';
import Button from './components/Button';

const breakpoints = {
    mobile: '23.438em', // => @media (ming-width: 375px) { ... }
    tablet: '40em', // => @media (min-width: 640px) { ... }
    laptop: '64em', // => @media (min-width: 1024px) { ... }
    desktop: '80em', // => @media (min-width: 1280px) { ... }
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
