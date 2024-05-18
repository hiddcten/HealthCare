import React from 'react';
import Carousel from 'react-material-ui-carousel';
import './Banner.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { HashLink } from 'react-router-hash-link';
import { Button, Paper, Typography } from '@mui/material';
import { Box, Container } from '@mui/material';

const Banner = () => {
  const items = [
    {
      //name: "Check Your Health Condition Regularly",
      //description: "Upto date with your health condition prevention is always better than cure",
      //img: 
    }
  ];

  return (
    <div></div>
  );
};

const About = () => {
  return (
    <Box id='about' sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '70vh'
    }}>
        <Container maxWidth="xl" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/young-male-psysician-with-patient-measuring-blood-pressure_1303-17879.jpg?t=st=1651807889~exp=1651808489~hmac=72e2292253947f9900d3250347f844e08a169fc70d5fb64d4cf51674000033fa&w=996')` }}>
        <Typography sx={{ color: 'primary.main', mx: 2, p: 2, textAlign: "center" }}
          variant='h4'>
          All-in-One Website Health Solution
        </Typography>

        <Typography sx={{ mx: 2, p: 2, textAlign: "center" }}
          variant='h6'>
          10 Years Of Experience in Medical Services
        </Typography>

        <Typography sx={{ mx: 2, p: 2, mb: 4, textAlign: "justify" }}
          variant='p'>One big thing I wanted to highlight is that our methodology is fairer to hospitals and health systems than horizontal sites. CareDash has many hospital reviews from real users, but the way we survey our patient users has less “motivated complainer bias.” Thus, I think the CareDash hospital reviews provider a more accurate view of real patient satisfaction. <br /><br />

          We think something between 8 to 9 out of 10 patients walks out of the hospital satisfied, but typical web reviews make hospitals look much worse. This negative bias in hospital reviews is a big deal because people are walking into their care journey with a negative mindset about the care they are going to get, and that’s not good. The scale is just off because of the motivated complainers.<br /><br />

          Be sure to leave a review on <strong>Health Haven</strong> of any hospital you’ve visited, whether you’ve had a negative or a positive experience. Share your suggestions about writing hospital reviews in the comments below or message us on facebook <a href="https://www.facebook.com/iamfoysal.h" target="_blank" rel="noopener noreferrer" >
            @Foysal
          </a>.
          <br /><br /><br />
        </Typography>
        
      </Container>
    </Box>
  );
};
export default Banner;