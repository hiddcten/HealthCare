import React from 'react';
import { Box, Typography } from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import { Avatar, Grid, Divider, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    const mailSendBtn = () => {
        return alert("WOW!! Your subscription is done you will get update when we setup our mail server", {
            button: false,
            icon: "success"
        });
    }

    return (
        <footer>
            <Box className='sticky-container' sx={{ bgcolor: '#1b7bc9', color: 'text.secondary', pb: 2, top: 'auto' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid sx={{ m: 'auto' }} item xs={12} sm={6} md={4}>
                        <Box>
                            <Typography
                                variant="h6"
                                component="div"
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                sx={{ mr: 2, display: { xs: 'flex', md: 'flex' }, color: 'white' }}
                            >
                                <Avatar sx={{ mt: 1, mb: 1, mr: 1, bgcolor: '#8FBCDA' }}>
                                    <LocalHospitalRoundedIcon color='blue' fontSize='large' /> {/* Color */}
                                </Avatar>
                                Painless Hospital
                            </Typography>
                            <Divider />
                        </Box>

                        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                            <Avatar sx={{ mt: 1, bgcolor: '#8FBCDA' }}>
                                <LocationOnIcon />
                            </Avatar>
                            <span style={{ color: 'white' }}>9 Nguyen Huu Tho Street, Tan Hung Ward, District 7</span>
                        </Stack>

                        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                            <Avatar sx={{ mb: 1, mt: 1, bgcolor: '#8FBCDA' }}>
                                <EmailIcon />
                            </Avatar>
                            <a className='text-style' href="mailto:GudHospital@gmail.com" style={{ color: 'white' }}>
                                GudHospital@gmail.com
                            </a>
                        </Stack>

                        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                            <Avatar sx={{ mb: 1, bgcolor: '#8FBCDA' }}>
                                <CallIcon />
                            </Avatar>
                            <a className='text-style' href="tel:115***********" style={{ color: 'white' }}>
                                115***********
                            </a>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Box sx={{ p: 2 }}>
                            <HashLink className='text-style' to='/doctors#doctors' color='inherit' style={{ color: 'white' }}>Need a doctor ?</HashLink>
                        </Box>

                        <Box sx={{ p: 2 }}>
                            <HashLink className='text-style' to='/services#services' color='inherit' style={{ color: 'white' }}>All services here!</HashLink>
                        </Box>

                        <Box sx={{ p: 2 }}>
                            <HashLink className='text-style' to='/appointment#appointment' color='inherit' style={{ color: 'white' }}>Make an appointment</HashLink>
                        </Box>

                        <Box sx={{ p: 2 }}>
                            <HashLink className='text-style' to='/register' color='inherit' style={{ color: 'white' }}>Register for fervice </HashLink>
                        </Box>
                    </Grid>
                
                    <Grid item xs={12} sm={4}>
                        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                            <Avatar sx={{ mb: 1, mt: 1, bgcolor: '#8FBCDA' }}>
                                <FacebookIcon />
                            </Avatar>
                            <a className='text-style' href="https://www.facebook.com/tonducthanguniversity" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                                Contact us via Facebook
                            </a>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Typography variant="h5" sx={{ color: 'white' }}>
                            An apple a day keeps the doctor away! ^^ 
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </footer>
    );
};

export default Footer;
