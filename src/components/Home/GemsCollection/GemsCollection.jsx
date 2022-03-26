import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import gems1 from '../../../images/GEMS01.svg'
import gems2 from '../../../images/GEMS02.svg'
import gems3 from '../../../images/GEMS03.svg'
import gems4 from '../../../images/GEMS04.svg'



const GemsCollection = () => {
    return (
        <div>
            <Container sx={{py:8}}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid sx={{  textAlign: 'center'}} container spacing={{ xs: 4, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={2} sm={4} md={3} >
                            <img src={gems1} alt="" />
                        </Grid>
                        <Grid sx={{marginTop: {xs: -5, md: -7}}} item xs={2} sm={4} md={3} >
                            <img src={gems2} alt="" />
                        </Grid>
                        <Grid item xs={2} sm={4} md={3} >
                            <img src={gems3} alt="" />
                        </Grid>
                        <Grid sx={{marginTop: {xs: -5, md: -7}}} item xs={2} sm={4} md={3} >
                            <img src={gems4} alt="" />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default GemsCollection;