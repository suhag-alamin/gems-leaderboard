import React from 'react';
import BeGemsStar from '../BeGemsStar/BeGemsStar';
import Event from '../Event/Event';
import HeroSection from '../HeroSection/HeroSection';
import '../Home.css';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <BeGemsStar />
            <Event />
        </div>
    );
};

export default Home;