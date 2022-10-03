import { Button, Flex, Grid, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

function SecondJumbotronSection({ children }: { children: ReactNode }) {
    return (
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            laptop: "repeat(2, 1fr)",
          }}
          textAlign={{ base: "center", laptop: "left" }}
          w="full"
        >
          {children}
        </Grid>
      );
}

function SecondJumbotronTitle({ children }: { children: ReactNode }) {
    return <Text color="white" mt={{ base: "4", laptop: "10" }} variant={{ base: 'heading.h3', laptop: 'heading.h2' }}>{children}</Text>
}

function Section({ children, className }: { children?: ReactNode; className?: string }) {
    return <Flex flexDir="column" justifyContent="center" alignItems={{base: 'center', laptop: 'baseline'}} py={{base: 4, laptop: "24"}}>{children}</Flex>
}

function SmallTitle({ children }: { children: ReactNode }) {
    return <Text mt="4" color="gray.light.10" variant="paragraph.xs" lineHeight="leading-relaxed">{children}</Text>
}

function JumbotronExplanation({ children }: { children: ReactNode }) {
    return <Text mt="6" color="dark.neutral.soft" variant="paragraph.l">{children}</Text>
}

function JumbotronButton({ children }: { children: ReactNode }) {
    return <Button variant="secondary.default" mx={{base: "auto", laptop: '0'}} mt="10">{children} &rarr;</Button>
    ;
}

SecondJumbotronSection.Title = SecondJumbotronTitle;
SecondJumbotronSection.Section = Section;
SecondJumbotronSection.SmallTitle = SmallTitle;
SecondJumbotronSection.Button = JumbotronButton;
SecondJumbotronSection.JumbotronExplanation = JumbotronExplanation;

export { SecondJumbotronSection };