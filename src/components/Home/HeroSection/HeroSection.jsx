import { Box } from '@mui/system';
import React from 'react';
import '../Home.css';

const HeroSection = () => {
    return (
        <div className="hero-section">
            {/* hero section  */}
            <Box sx={{height:{xs: '20vh', md: '100vh'}}}></Box>
        </div>
    );
};

export default HeroSection;