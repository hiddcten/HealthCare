import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const Banner = () => {
  return (
    <Container id="banner" maxWidth="xl">
      <Box boxShadow={3} p={3} borderRadius={2} bgcolor="background.paper" display="flex" justifyContent="center" alignItems="center" mb={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box p={3}>
              <Typography variant='h4' gutterBottom align="center">
                All-in-One Website Health Solution
              </Typography>
              <Typography variant='h6' gutterBottom align="center">
                10 Years Of Experience in Medical Services
              </Typography>
              <Typography variant='body1' paragraph align="justify">
                One big thing I wanted to highlight is that our methodology is fairer to hospitals and health systems than horizontal sites. CareDash has many hospital reviews from real users, but the way we survey our patient users has less “motivated complainer bias.” Thus, I think the CareDash hospital reviews provider a more accurate view of real patient satisfaction.
              </Typography>
              <Typography variant='body1' paragraph align="justify">
                We think something between 8 to 9 out of 10 patients walks out of the hospital satisfied, but typical web reviews make hospitals look much worse. This negative bias in hospital reviews is a big deal because people are walking into their care journey with a negative mindset about the care they are going to get, and that’s not good. The scale is just off because of the motivated complainers.
              </Typography>
              <Typography variant='body1' paragraph align="justify">
                Be sure to leave a review on <strong>Health Haven</strong> of any hospital you’ve visited, whether you’ve had a negative or a positive experience. Share your suggestions about writing hospital reviews in the comments below or message us on facebook <a href="https://www.facebook.com/iamfoysal.h" target="_blank" rel="noopener noreferrer">
                  @Foysal
                </a>.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box boxShadow={6} p={0.2} borderRadius={0.2} bgcolor="background.paper" display="flex" justifyContent="center" alignItems="center">
              <img
                src="https://img.freepik.com/premium-vector/general-practitioner-examining-kid-flat-vector-illustration_151150-282.jpg?w=2000"
                alt="Hình ảnh banner"
                className="banner-image"
                style={{ maxWidth: '70%', maxHeight: '60%' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Banner;
