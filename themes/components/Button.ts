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
            _hover: { bgColor: 'dark.neutral.soft' },
        },
        'primary.yellow': {
            color: 'light.neutral.primary',
            bgColor: 'semantic.yellow.strong',
            _hover: { bgColor: 'semantic.yellow.medium' },
        },
        'primary.purple': {
            color: 'light.neutral.primary',
            bgColor: 'semantic.purple.strong',
            _hover: { bgColor: 'semantic.purple.medium' },
        },
        'primary.green': {
            color: 'light.neutral.primary',
            bgColor: 'semantic.green.strong',
            _hover: { bgColor: 'semantic.green.medium' },
        },
        'primary.red': {
            color: 'light.neutral.primary',
            bgColor: 'semantic.red.strong',
            _hover: { bgColor: 'semantic.red.medium' },
        },
        // Secondary Type
        'secondary.default': {
            color: 'dark.neutral.primary',
            bgColor: 'dark.background.subtle',
            _hover: { color: 'dark.neutral.soft' },
        },
        'secondary.yellow': {
            color: 'semantic.yellow.strong',
            bgColor: 'semantic.yellow.dim',
            _hover: { color: 'semantic.yellow.medium' },
        },
        'secondary.purple': {
            color: 'semantic.purple.strong',
            bgColor: 'semantic.purple.dim',
            _hover: { color: 'semantic.purple.medium' },
        },
        'secondary.green': {
            color: 'semantic.green.strong',
            bgColor: 'semantic.green.dim',
            _hover: { color: 'semantic.green.medium' },
        },
        'secondary.red': {
            color: 'semantic.red.strong',
            bgColor: 'semantic.red.dim',
            _hover: { color: 'semantic.red.medium' },
        },
        // Ghost Type
        'ghost.default': {
            color: 'dark.neutral.primary',
            _hover: { bgColor: 'dark.background.subtle' },
        },
        'ghost.yellow': {
            color: 'semantic.yellow.strong',
            _hover: { bgColor: 'semantic.yellow.dim' },
        },
        'ghost.purple': {
            color: 'semantic.purple.strong',
            _hover: { bgColor: 'semantic.purple.dim' },
        },
        'ghost.green': {
            color: 'semantic.green.strong',
            _hover: { bgColor: 'semantic.green.dim' },
        },
        'ghost.red': {
            color: 'semantic.red.strong',
            _hover: { bgColor: 'semantic.red.dim' },
        },
    },
};

export default Button;
