import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import logo from '../../images/logo.svg';
import './Footer.css';
import twitter from '../../images/twitter-icon.svg'
import discord from '../../images/discord-icon.svg'
import teligram from '../../images/teligram-icon.svg'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { NavHashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className='footer'>
              {/* <Button sx={{fontSize:18, textAlign: 'center', p:0, justifyContent: 'center'}}  startIcon={} /> */}
              <NavHashLink smooth="true" className="nav-link" to="/home#home">

              <button id="back-to-top"><KeyboardArrowUpIcon sx={{p:0,margin:0}} /></button>
              </NavHashLink>
            <Container sx={{py:6}}>
                <Box sx={{textAlign: {xs: 'center', md: 'inherit'}}}>
                    <img src={logo} alt="" />
                </Box>

                <Box sx={{ flexGrow: 1, marginTop:4 }}>
                <Grid sx={{display: 'flex', justifyContent: {xs: 'center', md: 'inherit'}, alignItems: {xs: 'center', md: 'inherit'}, textAlign:  {xs: 'center', md: 'inherit'}}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                  <Grid item xs={2} sm={4} md={3}>
                    <Typography sx={{color: '#777777', mb:3}} variant='subtitle1'>FOLLOW US</Typography>
                    {/* social links  */}
                 <Box sx={{display: 'flex', justifyContent: {xs: 'center', md: 'inherit'}, alignItems: 'center', gap:2}}>
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