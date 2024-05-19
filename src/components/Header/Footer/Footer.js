import React from 'react';
import { TextField, Button } from '@mui/material';
import { 
  Avatar, 
  Box, 
  Chip, 
  Container, 
  Divider, 
  Grid, 
  Stack, 
  styled, 
  Typography 
} from '@mui/material';
import { pink } from '@mui/material/colors';
import { HashLink } from 'react-router-hash-link';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import HealingTwoToneIcon from '@mui/icons-material/HealingTwoTone';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

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
                <Container maxWidth="xl">
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
                                    <Avatar sx={{ mt: 1, mb: 1, mr: 1, bgcolor: 'white' }}>
                                        <HealingTwoToneIcon color='primary' fontSize='large' />
                                    </Avatar>
                                    Health Haven Hospital
                                </Typography>
                                <Divider />
                            </Box>

                            <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                                <Avatar sx={{ mt: 1, bgcolor: pink[500] }}>
                                    <LocationOnIcon />
                                </Avatar>
                                <span style={{ color: 'white' }}>Tejgaon I/A, Dhaka-1208</span>
                            </Stack>

                            <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                                <Avatar sx={{ mb: 1, mt: 1, bgcolor: pink[500] }}>
                                    <EmailIcon />
                                </Avatar>
                                <a className='text-style' href="mailto:mh.foysal.h@gmail.com" style={{ color: 'white' }}>
                                    mh.foysal.h@gmail.com
                                </a>
                            </Stack>

                            <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                                <Avatar sx={{ mb: 1, bgcolor: pink[500] }}>
                                    <CallIcon />
                                </Avatar>
                                <a className='text-style' href="tel:01680xxx86" style={{ color: 'white' }}>
                                    01680xxx86
                                </a>
                            </Stack>
                        </Grid>

                        {/* ----------service part ---------------*/}
                        <Grid item xs={12} sm={4}>
                            <Root>
                                <Divider>
                                    <Chip label="Our Services" />
                                </Divider>
                            </Root>

                            <Box sx={{ p: 2 }}><HashLink className='text-style' to='/doctors#doctors' color='inherit' style={{ color: 'white' }}>Find a Doctor</HashLink></Box>

                            <Box sx={{ p: 2 }}><HashLink className='text-style' to='/services#services' color='inherit' style={{ color: 'white' }}>All services</HashLink></Box>

                            <Box sx={{ p: 2 }}><HashLink className='text-style' to='/appointment#appointment' color='inherit' style={{ color: 'white' }}>Make An Appointment</HashLink></Box>

                            <Box sx={{ p: 2 }}><HashLink className='text-style' to='/register' color='inherit' style={{ color: 'white' }}>Register For Service </HashLink></Box>
                        </Grid>

                        {/* ----------social media part ------------*/}
                        <Grid item xs={12} sm={4}>
                            <Root>
                                <Divider>
                                    <Chip label="Find us on social media" />
                                </Divider>
                            </Root>

                            <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                                <Avatar sx={{ mb: 1, mt: 1, bgcolor: pink[500] }}>
                                    <FacebookIcon />
                                </Avatar>
                                <a className='text-style' href="https://www.facebook.com/iamfoysal.h" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                                    Foysal on Facebook
                                </a>
                            </Stack>

                            <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                                <Avatar sx={{ mb: 1, bgcolor: pink[500] }}>
                                    <LinkedInIcon />
                                </Avatar>
                                <a className='text-style' href="https://www.linkedin.com/in/md-foysal-h/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                                    Foysal on LinkedIn
                                </a>
                            </Stack>

                            <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                                <Avatar sx={{ mb: 1, bgcolor: pink[500] }}>
                                    <GitHubIcon />
                                </Avatar>
                                <a className='text-style' href="https://github.com/Foy5al" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                                    Foysal on GitHub
                                </a>
                            </Stack>
                        </Grid>
                    </Grid>

                    <Box sx={{ p: 5, mb: 2, alignItems: 'center' }}>
                        <Typography sx={{ textAlign: "center", color: 'white' }} variant="h5">
                            <SubscriptionsIcon sx={{ color: 'primary.main', mr: 1, my: 0.5 }} /> Subscribe for our latest services and details
                        </Typography>

                        <Box sx={{ display: { xs: 'flex-wrap', md: 'flex' }, p: 2, mt: 1, mx: 'auto', minWidth: "70%" }}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 2, mx: 'auto', minWidth: "70%" }}>
                                <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField fullWidth id="fullWidth" label="Enter Your Mail Address" variant="standard" />
                            </Box>
                            <Button variant="outlined" color="primary" onClick={mailSendBtn} startIcon={<SubscriptionsIcon />}>
                                Subscribe
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </footer>
    );
};

export default Footer;
