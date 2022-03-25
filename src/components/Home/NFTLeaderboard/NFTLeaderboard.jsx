import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Container, Grid, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import React from 'react';
import gems1 from '../../../images/GEMS01-2.svg';
import gems2 from '../../../images/GEMS02.svg';
import gems3 from '../../../images/GEMS03.svg';
import gems4 from '../../../images/GEMS04.svg';
import '../Home.css'


const NFTLeaderboard = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
      <div id='leaderBoard'>
          <Container sx={{py:6}}>
                <Typography sx={{fontSize:28, textAlign: 'center', fontWeight:700, mb:6}} variant='h3'>GEMS NFT Leaderboard</Typography>
                  <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList sx={{wordWrap: 'wrap'}} indicatorColor='secondary' onChange={handleChange} >
                          <Tab  sx={{color: '#fff !important'}}  label="Legandary" value="1" />
                          <Tab sx={{color: '#fff !important'}} label="Epic" value="2" />
                          <Tab sx={{color: '#fff !important'}} label="Rare" value="3" />
                          <Tab sx={{color: '#fff !important'}} label="Common" value="4" />
                        </TabList>
                      </Box>
                      {/* tab panel 1 start  */}
                      <TabPanel value="1">
                        <Box sx={{display: {xs:'inherit', md: 'flex', textAlign: {xs: 'center',md: 'left'}}, gap:8}}>
                          <img src={gems1} alt="" />
                          <Box className='level-description'>
                            <Typography variant='h4' sx={{fontSize:16, fontWeight:700, mb:4}}>Legandary Level</Typography>
                            <Box sx={{px:3}}>
                              <ul>
                                  <li>FCustomized Avater (3D) - Customized Avater (3D) <br />
                                  Private Events Invitation - Private Events Invitation</li>
                                  <li>Private Discord Channel</li>
                                  <li>Merchandise</li>
                                  <li>Whitelist on XXX Project</li>
                                  <li>Early Drop</li>
                                  <li>Membership NFT</li>
                              </ul>
                            </Box>
                          </Box>
                        </Box>
                      </TabPanel>
                      {/* tab panel 1 end  */}

                      {/* tab panel 2 start  */}
                      <TabPanel value="2">
                      <Box sx={{display: {xs:'inherit', md: 'flex', textAlign: {xs: 'center',md: 'left'}}, gap:8}}>
                          <img src={gems2} alt="" />
                          <Box className='level-description'>
                            <Typography variant='h4' sx={{fontSize:16, fontWeight:700, mb:4}}>Legandary Level</Typography>
                            <Box sx={{px:3}}>
                              <ul>
                                  <li>FCustomized Avater (3D) - Customized Avater (3D) <br />
                                  Private Events Invitation - Private Events Invitation</li>
                                  <li>Private Discord Channel</li>
                                  <li>Merchandise</li>
                                  <li>Whitelist on XXX Project</li>
                                  <li>Early Drop</li>
                                  <li>Membership NFT</li>
                              </ul>
                            </Box>
                          </Box>
                        </Box>
                      </TabPanel>
                      {/* tab panel 2 end  */}
                      {/* tab panel 3 start  */}
                      <TabPanel value="3">
                      <Box sx={{display: {xs:'inherit', md: 'flex', textAlign: {xs: 'center',md: 'left'}}, gap:8}}>
                          <img src={gems3} alt="" />
                          <Box className='level-description'>
                            <Typography variant='h4' sx={{fontSize:16, fontWeight:700, mb:4}}>Legandary Level</Typography>
                            <Box sx={{px:3}}>
                              <ul>
                                  <li>FCustomized Avater (3D) - Customized Avater (3D) <br />
                                  Private Events Invitation - Private Events Invitation</li>
                                  <li>Private Discord Channel</li>
                                  <li>Merchandise</li>
                                  <li>Whitelist on XXX Project</li>
                                  <li>Early Drop</li>
                                  <li>Membership NFT</li>
                              </ul>
                            </Box>
                          </Box>
                        </Box>
                      </TabPanel>
                      {/* tab panel 3 end  */}
                      {/* tab panel 4 start  */}
                      <TabPanel value="4">
                      <Box sx={{display: {xs:'inherit', md: 'flex', textAlign: {xs: 'center',md: 'left'}}, gap:8}}>
                          <img src={gems4} alt="" />
                          <Box className='level-description'>
                            <Typography variant='h4' sx={{fontSize:16, fontWeight:700, mb:4}}>Legandary Level</Typography>
                            <Box sx={{px:3}}>
                              <ul>
                                  <li>FCustomized Avater (3D) - Customized Avater (3D) <br />
                                  Private Events Invitation - Private Events Invitation</li>
                                  <li>Private Discord Channel</li>
                                  <li>Merchandise</li>
                                  <li>Whitelist on XXX Project</li>
                                  <li>Early Drop</li>
                                  <li>Membership NFT</li>
                              </ul>
                            </Box>
                          </Box>
                        </Box>
                      </TabPanel>
                      {/* tab panel 4 end  */}
                    </TabContext>
                  </Box>
          </Container>
      </div>
    );
};

export default NFTLeaderboard;