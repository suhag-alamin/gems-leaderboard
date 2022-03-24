import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import logo from '../../images/logo.svg';
import './Footer.css';
import twitter from '../../images/twitter-icon.svg'
import discord from '../../images/discord-icon.svg'
import teligram from '../../images/teligram-icon.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <Container sx={{py:6}}>
                <Box>
                    <img src={logo} alt="" />
                </Box>

                <Box sx={{ flexGrow: 1, marginTop:4 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                  <Grid item xs={2} sm={4} md={3}>
                    <Typography sx={{color: '#777777', mb:3}} variant='subtitle1'>FOLLOW US</Typography>
                    {/* social links  */}
                 <Box sx={{display: 'flex', alignItems: 'center', gap:2}}>
                  <Box sx={{backgroundColor:'#6A8EFF', padding:1, borderRadius:50, width:30, height:30, lineHeight:'10px', textAlign: 'center'}}>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                      <img src={twitter} alt="" />
                    </a>
                  </Box>
                  <Box sx={{backgroundColor:'#6A8EFF', padding:1, borderRadius:50, width:30, height:30, lineHeight:'10px', textAlign: 'center'}}>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                      <img src={discord} alt="" />
                    </a>
                  </Box>
                  <Box sx={{backgroundColor:'#6A8EFF', padding:1, borderRadius:50, width:30, height:30, lineHeight:'10px', textAlign: 'center'}}>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                      <img src={teligram} alt="" />
                    </a>
                  </Box>
                </Box>  
                  </Grid>

                  <Grid item xs={2} sm={4} md={3}>
                    <Typography sx={{color: '#777777', mb:3}} variant='subtitle1'>LEARN MORE</Typography>
                    <Box>
                      <a className='footer-link' href="#" target="_blank" rel="noopener noreferrer">Pitch Deck</a>
                      <a className='footer-link' href="#" target="_blank" rel="noopener noreferrer">Tokenomics</a>
                      <a className='footer-link' href="#" target="_blank" rel="noopener noreferrer">2 Pager</a>
                      <a className='footer-link' href="#" target="_blank" rel="noopener noreferrer">Gitbook</a>
                    </Box>
                  </Grid>
                  <Grid item xs={2} sm={4} md={3}>
                    <Typography sx={{color: '#777777', mb:3}} variant='subtitle1'>LINKS</Typography>
                    <Box>
                    <a className='footer-link' href="#" target="_blank" rel="noopener noreferrer">Terms of Use</a>
                    <a className='footer-link' href="#" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                    </Box>
                  </Grid>
                  <Grid item xs={2} sm={4} md={3}>
                    <Typography sx={{color: '#777777', mb:3}} variant='subtitle1'>EMAIL</Typography>
                    <Box>
                    <a className='footer-link' href="mailto:info@thegems.gg" target="_blank" rel="noopener noreferrer">info@thegems.gg</a>
                    </Box>
                  </Grid>
              </Grid>
              </Box>
            </Container>
        </div>
    );
};

export default Footer;