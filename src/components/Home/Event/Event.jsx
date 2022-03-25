import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Countdown from 'react-countdown';

const Event = () => {
    return (
        <div>
            <Container sx={{py:6}}>
                <Typography sx={{fontSize:24, textAlign: 'center', fontWeight:700, mb:2}} variant='h3'>The event starts in...</Typography>
                {/* event countdown  */}
                <Box>
                    {/* time in millisecond  1000000 */}
                    <Typography sx={{color: '#6A8EFF', fontSize:52, lineHeight:'70px', textAlign: 'center'}}>

                <Countdown date={Date.now() + 1000000} />
                    </Typography>
                </Box>
            </Container>
        </div>
    );
};

export default Event;