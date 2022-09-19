import type { NextPage } from 'next';
import { Container } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import FirstJumbotron from '../components/FirstJumbotron';
const Home: NextPage = () => {
    return (
        <>
            <Container maxW="6xl" px={{ base: '4', tablet: '44px' }}>
                <Navbar />
                <FirstJumbotron />
            </Container>
        </>
    );
};

export default Home;
