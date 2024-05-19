import React from 'react';
import { Container } from '@mui/material';
import About from '../About/About';
import Banner from './Banner/Banner';
import './Home.css';
import OurExperts from './OurExperts/OurExperts';
import Whyus from './Whyus/Whyus';

const Home = () => {
  return (
    <div id='home'>
      <Banner />
      <Whyus />
      <Container maxWidth="xl" className="content-container">
        <About /> 
      </Container>
      <OurExperts />
    </div>
  );
};

export default Home;
