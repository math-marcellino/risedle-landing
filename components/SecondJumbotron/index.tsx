import { Box, Image } from "@chakra-ui/react";
import BackgroundBox from "./BackgroundBox";
import { SecondJumbotronSection } from "./Section";

function SecondJumbotron() {
    return (
        <div className="mx-auto max-w-[343px] pt-32 sm:max-w-[552px] lg:max-w-[936px] xl:max-w-[1128px]">
            <SecondJumbotronSection>
                <SecondJumbotronSection.Section>
                    <SecondJumbotronSection.SmallTitle>TRADER</SecondJumbotronSection.SmallTitle>
                    <SecondJumbotronSection.Title>Boost Any Token And Earn More</SecondJumbotronSection.Title>
                    <SecondJumbotronSection.JumbotronExplanation>Boost various strategy in Risedle based on the market condition. It’s fully on your hand.</SecondJumbotronSection.JumbotronExplanation>
                    <SecondJumbotronSection.Button>Try Boost </SecondJumbotronSection.Button>
                </SecondJumbotronSection.Section>
                <SecondJumbotronSection.Section>
                    <BackgroundBox>
                        <Image left='0' mt="14" maxW="1000px" pos={{ base: "absolute", laptop: 'relative' }} src="/assets/homepage/section-1.svg" alt="section-1"/>
                    </BackgroundBox>
                </SecondJumbotronSection.Section>
            </SecondJumbotronSection>
            <SecondJumbotronSection>
                <SecondJumbotronSection.Section>
                    <SecondJumbotronSection.SmallTitle>Liquidity Provider</SecondJumbotronSection.SmallTitle>
                    <SecondJumbotronSection.Title>Earn by Providing Liquidity</SecondJumbotronSection.Title>
                    <SecondJumbotronSection.JumbotronExplanation>Earn high APY on Risedle Fuels by supplying liquidity to our pools</SecondJumbotronSection.JumbotronExplanation>
                    <SecondJumbotronSection.Button>Try Fuel </SecondJumbotronSection.Button>
                </SecondJumbotronSection.Section>
                <SecondJumbotronSection.Section>
                    <BackgroundBox>
                        <Image left='0' mt="14" maxW="1000px" pos="absolute" src="/assets/homepage/section-2.svg" alt="section-2"/>
                    </BackgroundBox>
                </SecondJumbotronSection.Section>
            </SecondJumbotronSection>
            <SecondJumbotronSection>
                <SecondJumbotronSection.Section>
                    <SecondJumbotronSection.SmallTitle>Crypto Project</SecondJumbotronSection.SmallTitle>
                    <SecondJumbotronSection.Title>Leverage Liquidity Using Boost Pro</SecondJumbotronSection.Title>
                    <SecondJumbotronSection.JumbotronExplanation>Risedle Boost Pro enable levaraging any liquidity pool in Rari Fuse pool. No creating smart contracts just configure and good to go!</SecondJumbotronSection.JumbotronExplanation>
                    <SecondJumbotronSection.Button>Try Boost Pro</SecondJumbotronSection.Button>
                </SecondJumbotronSection.Section>
                <SecondJumbotronSection.Section>
                    <BackgroundBox>
                        <Image zIndex="20" mt={{ base: '14', mobile: '0'}} ml={{ base: '-86px', mobile: '0' }} maxW={{ base: '600px', sm: '1000px', md: '600px' }} src="/assets/homepage/section-3.svg" alt="section-3"/>
                    </BackgroundBox>
                </SecondJumbotronSection.Section>
            </SecondJumbotronSection>
        </div>
    );
}

export default SecondJumbotron;
