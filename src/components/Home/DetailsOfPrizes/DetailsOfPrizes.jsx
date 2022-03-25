import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const DetailsOfPrizes = () => {
    return (
        <div id='prizes'>
            <Container sx={{py:6}}>
                <Typography sx={{fontSize:18, fontWeight:700, mb:2}} variant='h3'>Details of Prizes</Typography>
                {/* lists  */}
                <Box sx={{px:3}}>
                    <ul>
                        <li>Free NFT rental Pass- rent any (rentable) NFT via the GEMS Marketplace for 7 days.</li>
                        <li>Launcher Sneak Peek Pass- get access to 3 ecosystems!</li>
                        <li>IDO whitelist pass- invest in GEMS at public round price w/ 100USDT.</li>
                        <li>01 GEMS NFT- collect all 10 (in coming weeks) & win!</li>
                    </ul>
                </Box>
            </Container>
        </div>
    );
};

export default DetailsOfPrizes;