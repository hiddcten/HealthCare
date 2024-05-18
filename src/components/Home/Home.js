import { Button, Container, TextField, Typography } from '@mui/material';
import { Box, width } from '@mui/system';
import React from 'react';
import About from '../About/About';
import Banner from './Banner/Banner';
import './Home.css'
import OurExperts from './OurExperts/OurExperts';
import Whyus from './Whyus/Whyus';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EmailIcon from '@mui/icons-material/Email';
import swal from 'sweetalert';

const Home = () => {
    //swal alert

    return (
        <div id='home'>
            <Banner></Banner>
            <Whyus></Whyus>
            <Container className='content-container' maxWidth="xl" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/young-male-psysician-with-patient-measuring-blood-pressure_1303-17879.jpg?t=st=1651807889~exp=1651808489~hmac=72e2292253947f9900d3250347f844e08a169fc70d5fb64d4cf51674000033fa&w=996')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <About></About>
            </Container>
            <OurExperts></OurExperts>
            
        </div>
    );
};

export default Home;