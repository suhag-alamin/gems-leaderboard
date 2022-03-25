import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const AuctionRules = () => {
    return (
        <div>
             <Container sx={{py:6}}>
                <Typography sx={{fontSize:18, fontWeight:700, mb:2}} variant='h3'>Auction Rules</Typography>
                {/* lists  */}
                <Box sx={{px:3}}>
                    <ul>
                        <li>Auction Period: 15 April 2022, 10:00AM UTC - 22 April 2022 10:00AM UTC (TBC)</li>
                        <li>Bids placed outside the auction period will be not counted or refunded.</li>
                        <li>The minimum bid is 50 USDT. Any bids under 50 USDT is invalid and will not be refunded.</li>
                        <li>Each transaction is counted as one entry, even if the fund is sent from the same address.</li>
                        <li>Bid is final once sent. No refunds.</li>
                        <li>Bid is not adjustable or withdrawn.</li>
                        <li>All bids are placed in one pool. Bids are ranked at the end of the auction, and NFTs are distributed according to the ranking of bids.</li>
                        <li>The top 100 Bidders will guarantee an NFTs (Epic or Rare, depending on final rank of bids)</li>
                        <li>DO NOT send funds from an exchange address. Funds from exchange addresses are not counted as we cannot track them.</li>
                    </ul>
                </Box>
            </Container>
        </div>
    );
};

export default AuctionRules;