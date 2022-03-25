import React from 'react';
import AuctionRules from '../AuctionRules/AuctionRules';
import BeGemsStar from '../BeGemsStar/BeGemsStar';
import DetailsOfPrizes from '../DetailsOfPrizes/DetailsOfPrizes';
import Event from '../Event/Event';
import GemsCollection from '../GemsCollection/GemsCollection';
import HeroSection from '../HeroSection/HeroSection';
import '../Home.css';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <BeGemsStar />
            <Event />
            <GemsCollection />
            <DetailsOfPrizes />
            <AuctionRules />
        </div>
    );
};

export default Home;