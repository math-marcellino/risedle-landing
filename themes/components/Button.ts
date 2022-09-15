import { ComponentStyleConfig } from '@chakra-ui/react';
import Text from './Text';

const baseStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2',
    borderRadius: 'lg',
};

const sizes = {
    sm: {
        h: '8',
        px: '3',
        ...Text.variants['heading.h8'](),
    },
    md: {
        h: '10',
        px: '4',
        ...Text.variants['heading.h7'](),
    },
    lg: {
        h: '12',
        px: '4',
        ...Text.variants['heading.h6'](),
    },
};

const Button: ComponentStyleConfig = {
    baseStyle,
    sizes,
    variants: {
        // Primary Type
        'primary.default': {
            color: 'light.neutral.primary',
            bgColor: 'dark.neutral.primary',
        },
        'primary.yellow': {
            color: 'light.neutral.primary',
            bgColor: 'semantic.yellow.strong',
        },
        'primary.purple': {
            color: 'light.neutral.primary',
            bgColor: 'semantic.purple.strong',
        },
        'primary.green': {
            color: 'light.neutral.primary',
            bgColor: 'semantic.green.strong',
        },
        'primary.red': {
            color: 'light.neutral.primary',
            bgColor: 'semantic.red.strong',
        },
        // Secondary Type
        'secondary.default': {
            color: 'dark.neutral.primary',
            bgColor: 'dark.background.subtle',
        },
        'secondary.yellow': {
            color: 'semantic.yellow.strong',
            bgColor: 'semantic.yellow.dim',
        },
        'secondary.purple': {
            color: 'semantic.purple.strong',
            bgColor: 'semantic.purple.dim',
        },
        'secondary.green': {
            color: 'semantic.green.strong',
            bgColor: 'semantic.green.dim',
        },
        'secondary.red': {
            color: 'semantic.red.strong',
            bgColor: 'semantic.red.dim',
        },
        // Ghost Type
        'ghost.default': {
            color: 'dark.neutral.primary',
        },
        'ghost.yellow': {
            color: 'semantic.yellow.strong',
        },
        'ghost.purple': {
            color: 'semantic.purple.strong',
        },
        'ghost.green': {
            color: 'semantic.green.strong',
        },
        'ghost.red': {
            color: 'semantic.red.strong',
        },
    },
};

export default Button;
