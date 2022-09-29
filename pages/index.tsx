import type { NextPage } from 'next';
import { Container } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import FirstJumbotron from '../components/FirstJumbotron';
import ThirdJumbotron from '../components/ThridJumbotron';
import FourthJumbotron from '../components/FourthJumbotron';

const Home: NextPage = () => {
    return (
        <>
            <Container
                px="0"
                maxW={{ base: '343px', tablet: '552px', laptop: '936px', desktop: '1128px' }}
            >
                <Navbar />
                <FirstJumbotron />
                <ThirdJumbotron />
                <FourthJumbotron />
            </Container>
        </>
    );
};

export default Home;
