import { extendTheme } from '@chakra-ui/react';

const breakpoints = {
    mobile: '375px', // => @media (ming-width: 375px) { ... }
    tablet: '640px', // => @media (min-width: 640px) { ... }
    laptop: '1024px', // => @media (min-width: 1024px) { ... }
    desktop: '1280px', // => @media (min-width: 1280px) { ... }
};

const theme = extendTheme({
    breakpoints,
    initialColorMode: 'dark',
    useSystemColorMode: false,
    styles: {
        global: () => ({
            body: {
                bg: '#03050D',
            },
        }),
    },
});

export default theme;
