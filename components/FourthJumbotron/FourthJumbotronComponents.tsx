import { Text, GridItem, GridItemProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface FourthJumbotronBoxProps extends GridItemProps {
    children: ReactNode;
}

const FourthJumbotronBox = (props: FourthJumbotronBoxProps) => {
    const { children, ...restProps } = props;
    return (
        <GridItem
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            minH="60"
            direction="column"
            bgColor="dark.background.elevated"
            borderRadius="3xl"
            px="8"
            pt="9"
            pb="6"
            {...restProps}
        >
            {children}
        </GridItem>
    );
};

const FourthJumbotronTitle = ({ children }: { children: ReactNode }) => {
    return (
        <Text variant="heading.h5" color="dark.neutral.primary">
            {children}
        </Text>
    );
};

export { FourthJumbotronBox, FourthJumbotronTitle };
