import type { NextPage } from 'next';
import { Container } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import FirstJumbotron from '../components/FirstJumbotron';
import ThirdJumbotron from '../components/ThridJumbotron';

const Home: NextPage = () => {
    return (
        <>
            <Container maxW="6xl" px={{ base: '4', tablet: '44px' }}>
                <Navbar />
                <FirstJumbotron />
                <ThirdJumbotron />
            </Container>
        </>
    );
};

export default Home;
