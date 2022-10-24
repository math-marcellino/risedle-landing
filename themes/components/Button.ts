import { ComponentStyleConfig } from '@chakra-ui/react';
import Text from './Text';

const baseStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2',
    borderRadius: 'lg',
    _disabled: {
        pointerEvents: 'none',
        bgColor: 'dark.background.disabled',
        color: 'dark.neutral.soft',
    },
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
            _active: {
                boxShadow: '0px 0px 0px 3px rgba(252, 253, 255, 0.2)',
                bgColor: 'dark.neutral.primary',
            },
        },
        'primary.yellow': {
            color: 'light.neutral.primary',
            bgColor: 'semantic.yellow.strong',
            _hover: { bgColor: 'semantic.yellow.medium' },
            _active: {
                boxShadow: '0px 0px 0px 3px rgba(237, 162, 17, 0.3)',
                bgColor: 'semantic.yellow.strong',
            },
        },
        'primary.purple': {
            color: 'light.neutral.primary',
            bgColor: 'semantic.purple.strong',
            _hover: { bgColor: 'semantic.purple.medium' },
            _active: {
                boxShadow: '0px 0px 0px 3px rgba(184, 39, 252, 0.3)',
                bgColor: 'semantic.purple.strong',
            },
        },
        'primary.green': {
            color: 'light.neutral.primary',
            bgColor: 'semantic.green.strong',
            _hover: { bgColor: 'semantic.green.medium' },
            _active: {
                boxShadow: '0px 0px 0px 3px rgba(24, 204, 204, 0.3)',
                bgColor: 'semantic.green.strong',
            },
        },
        'primary.red': {
            color: 'light.neutral.primary',
            bgColor: 'semantic.red.strong',
            _hover: { bgColor: 'semantic.red.medium' },
            _active: {
                boxShadow: '0px 0px 0px 3px rgba(253, 17, 159, 0.3)',
                bgColor: 'semantic.red.strong',
            },
        },
        // Secondary Type
        'secondary.default': {
            color: 'dark.neutral.primary',
            bgColor: 'dark.background.subtle',
            _hover: { color: 'dark.neutral.soft' },
            _active: {
                boxShadow: '0px 0px 0px 3px rgba(252, 253, 255, 0.2)',
                color: 'dark.neutral.primary',
            },
        },
        'secondary.yellow': {
            color: 'semantic.yellow.strong',
            bgColor: 'semantic.yellow.dim',
            _hover: { color: 'semantic.yellow.medium' },
            _active: {
                boxShadow: '0px 0px 0px 3px rgba(237, 162, 17, 0.3)',
                color: 'semantic.yellow.strong',
            },
        },
        'secondary.purple': {
            color: 'semantic.purple.strong',
            bgColor: 'semantic.purple.dim',
            _hover: { color: 'semantic.purple.medium' },
            _active: {
                boxShadow: '0px 0px 0px 3px rgba(184, 39, 252, 0.3)',
                color: 'semantic.purple.strong',
            },
        },
        'secondary.green': {
            color: 'semantic.green.strong',
            bgColor: 'semantic.green.dim',
            _hover: { color: 'semantic.green.medium' },
            _active: {
                boxShadow: '0px 0px 0px 3px rgba(24, 204, 204, 0.3)',
                color: 'semantic.green.strong',
            },
        },
        'secondary.red': {
            color: 'semantic.red.strong',
            bgColor: 'semantic.red.dim',
            _hover: { color: 'semantic.red.medium' },
            _active: {
                boxShadow: '0px 0px 0px 3px rgba(253, 17, 159, 0.3)',
                color: 'semantic.red.strong',
            },
        },
        // Ghost Type
        'ghost.default': {
            color: 'dark.neutral.primary',
            _hover: { bgColor: 'dark.background.subtle' },
            _active: {
                boxShadow: '0px 0px 0px 3px rgba(252, 253, 255, 0.2)',
                color: 'dark.neutral.primary',
                bgColor: 'dark.background.subtle',
            },
            _disabled: { bgColor: 'transparent' },
        },
        'ghost.yellow': {
            color: 'semantic.yellow.strong',
            _hover: { bgColor: 'semantic.yellow.dim' },
            _active: {
                boxShadow: '0px 0px 0px 3px rgba(237, 162, 17, 0.3)',
                color: 'semantic.yellow.strong',
                bgColor: 'semantic.yellow.dim',
            },
            _disabled: { bgColor: 'transparent' },
        },
        'ghost.purple': {
            color: 'semantic.purple.strong',
            _hover: { bgColor: 'semantic.purple.dim' },
            _active: {
                boxShadow: '0px 0px 0px 3px rgba(184, 39, 252, 0.3)',
                color: 'semantic.purple.strong',
                bgColor: 'semantic.purple.dim',
            },
            _disabled: { bgColor: 'transparent' },
        },
        'ghost.green': {
            color: 'semantic.green.strong',
            _hover: { bgColor: 'semantic.green.dim' },
            _active: {
                boxShadow: '0px 0px 0px 3px rgba(24, 204, 204, 0.3)',
                color: 'semantic.green.strong',
                bgColor: 'semantic.green.dim',
            },
            _disabled: { bgColor: 'transparent' },
        },
        'ghost.red': {
            color: 'semantic.red.strong',
            _hover: { bgColor: 'semantic.red.dim' },
            _active: {
                boxShadow: '0px 0px 0px 3px rgba(253, 17, 159, 0.3)',
                color: 'semantic.red.strong',
                bgColor: 'semantic.red.dim',
            },
            _disabled: { bgColor: 'transparent' },
        },
    },
};

export default Button;
