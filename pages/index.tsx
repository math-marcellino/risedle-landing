import type { NextPage } from 'next';
import { Container } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import FirstJumbotron from '../components/FirstJumbotron';
const Home: NextPage = () => {
    return (
        <>
            <Container maxW="6xl">
                <Navbar />
                <FirstJumbotron />
            </Container>
        </>
    );
};

export default Home;
