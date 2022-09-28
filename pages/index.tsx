import type { NextPage } from 'next';
import { Container } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import FirstJumbotron from '../components/FirstJumbotron';
import ThirdJumbotron from '../components/ThridJumbotron';

const Home: NextPage = () => {
    return (
        <>
            <Container
                maxW={{ base: '343px', tablet: '552px', laptop: '936px', desktop: '1128px' }}
            >
                <Navbar />
                <FirstJumbotron />
                <ThirdJumbotron />
            </Container>
        </>
    );
};

export default Home;
