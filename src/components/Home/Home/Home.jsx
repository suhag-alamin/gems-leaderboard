import React from 'react';
import BeGemsStar from '../BeGemsStar/BeGemsStar';
import HeroSection from '../HeroSection/HeroSection';
import '../Home.css';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <BeGemsStar />
        </div>
    );
};

export default Home;