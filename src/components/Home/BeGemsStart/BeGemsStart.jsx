import { Container, Typography } from '@mui/material';
import React from 'react';

const BeGemsStart = () => {
    return (
        <div>
           <Container sx={{py:6, textAlign: 'center'}}>
           <Typography sx={{fontSize:42, textAlign: 'center', fontWeight:700, mb:6}} variant='h3'>To be a Gemster</Typography>
            <Typography sx={{width: '75%', margin: 'auto'}} variant='body1'>To participate GEMS NFT Leaderboard, a wide variety of limited edition GEMS’ partner NFTs will be released! <br /> <br />

                To secure your spot in the leaderboard, place your bid using the wallet address below. For this first auction, only <a href="http://example.com" target="_blank" rel="noopener noreferrer">USDT (on Binance Smart Chain)</a> contributions are possible. NFTs will be distributed to the contributing addresses according to the tiers that bids are ranked at the end of the auction. For detailed instructions and disclaimer, please <a href="http://example.com" target="_blank" rel="noopener noreferrer">Click here</a>.
                <br /> <br />
                Best of luck to all of our Gemsters!
            </Typography>
           </Container>
        </div>
    );
};

export default BeGemsStart;