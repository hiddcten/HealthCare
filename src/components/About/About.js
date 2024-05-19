import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

const About = () => {
  const imageUrl1 = 'https://www.sojitz.com/jp/news/images/200521_00.jpg';
  const imageUrl2 = 'https://th.bing.com/th/id/R.527e17cde0a96ab3a221bec29c1e553e?rik=ilEQUdbeVL2R4A&pid=ImgRaw&r=0';

  return (
    <Box id="about" className="about-container" boxShadow={3} borderRadius={2} p={3} mb={4}>
      <Container maxWidth="xl">
        <Grid container direction="column" alignItems="center" spacing={3}>
          <Grid item xs={12}>
            <Typography variant='h4' gutterBottom align="center" color="#2E90D7">
              <strong>Experience Lightning-Fast Service!</strong>
            </Typography>
            <Typography variant="body1" paragraph align="justify">
              At Painless Hospital, we're not just about healing; we're about speed. With a rich legacy of 3 glorious days, our cutting-edge facilities and a team of medical professionals who are practically legends in their own right, we're committed to providing you with the most comfortable and efficient care possible.
            </Typography>
            <Typography variant='body1' paragraph align="justify">
              Conveniently located at 19 Nguyen Huu Tho Street, Tan Hung Ward, District 7, our hospital boasts stunning natural scenery and the intellectual buzz of a nearby university. With such inspiring surroundings and a team of top-notch doctors, we're confident that your visit will be nothing short of extraordinary.
            </Typography>
            <Typography variant='body1' paragraph align="justify">
              So why wait? Come experience the Painless difference today!
            </Typography>
          </Grid>

          <Grid container item justifyContent="center" spacing={3}>
            {[imageUrl1, imageUrl2].map((url, index) => (
              <Grid key={index} item xs={8} sm={6}>
                <Box
                  height={300}
                  boxShadow={5}
                  p={0.3}
                  borderRadius={0.5}
                  overflow="hidden"
                >
                  <img
                    src={url}
                    alt={`Image ${index + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
