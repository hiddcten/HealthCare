import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const Banner = () => {
  return (
    <Container id="banner" maxWidth="xl">
      <Box boxShadow={3} p={3} borderRadius={2} bgcolor="background.paper" display="flex" justifyContent="center" alignItems="center" mb={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box p={3}>
              <Typography variant='h4' gutterBottom align="center" color="#2E90D7">
                <strong>Welcome to Painless Hospital! :)</strong>
              </Typography>
              <Typography variant='body1' paragraph align="justify">
                If life's got you down, come on down to Painless Hospital,
                we'll patch you up for a price that won't make you frown.
              </Typography>
              <Typography variant='body1' paragraph align="justify">
                Our doctors are the best in Vietnam, or so we've been told,
                with a whopping 3 days of history, we're practically ancient, I'm bold.
              </Typography>
              <Typography variant='body1' paragraph align="justify">
                So come on down to <strong>Painless Hospital !!!</strong>, where we mend hearts and funny bones,
                and leave with a smile, not a groan.
              </Typography>
              <Typography variant='body1' paragraph align="justify">
                it won't hurt, we promiseeee :)
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box boxShadow={6} p={0.2} borderRadius={0.2} bgcolor="background.paper" display="flex" justifyContent="center" alignItems="center">
              <img
                src="https://thumbs.dreamstime.com/b/happy-male-patient-lying-hospital-bed-pose-thumbs-up-health-care-insurance-concept-happy-male-patient-lying-hospital-169415780.jpg"
                alt="Hình ảnh banner"
                className="banner-image"
                style={{ maxWidth: '100%', maxHeight: '60%' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Banner;
