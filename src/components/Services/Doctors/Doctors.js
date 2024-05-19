import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, Card, CardActionArea, CardContent, Container, Grid, Typography, CardActions } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/doctordb.json');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setDoctors(data.docs);
      } catch (error) {
        console.error('Error:', error);
        setError('No doctors list.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="doctors">
      {isLoading ? (
        <Typography variant="h6" align="center">
          Loading . . 
        </Typography>
      ) : error ? (
        <Typography variant="h6" align="center" color="error">
          {error}
        </Typography>
      ) : (
        <Box sx={{ bgcolor: '#D3E9F5', color: 'primary.main', p: 2, mb: 2, mt: 6, textAlign: "center" }}>
          <Container maxWidth="xl">
            <Typography sx={{ mt: 2, mb: 2, fontWeight: 600, color: '#0077B2', fontSize: '3.5rem' }} variant="h5">
              Our Doctors
            </Typography>

            <Grid container spacing={3}>
              {doctors.map((doctor) => (
                <Grid key={doctor.doc_id} item xs={12} sm={6} md={4} lg={3} sx={{ mx: 'auto' }}>
                  <Card sx={{
                    mx: 'auto',
                    boxShadow: 10,
                    maxWidth: 345,
                    transition: '0.5s all ease-in-out',
                    ':hover': {
                      color: '#076EA2',
                      boxShadow: 1,
                    },
                    'img': { transition: '0.5s all ease-in-out' },
                    ':hover img': {
                      transform: 'scale(1.1)',
                    },
                  }}>
                    <CardActionArea>
                      <Avatar
                        alt="pic_doc"
                        src={doctor.doc_img}
                        sx={{ width: 256, height: 256, mx: 'auto' }}
                      />
                      <CardContent sx={{ display: 'flex', mx: 'auto', my: 2 }}>
                        <Typography gutterBottom variant="h5" component="div">
                          {doctor.specialize}
                        </Typography>
                      </CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Dr.{doctor.name}
                      </Typography>
                    </CardActionArea>
                    <CardActions sx={{ textAlign: "center" }}>
                      <Button
                        component={Link}
                        to={`/appointment?doctorId=${doctor.doc_id}`}
                        sx={{ mt: 2, mb: 1, bgcolor: '#0077B2' }}
                        variant="contained"
                        className="CheckButton"
                      >
                        Make Appointment
                        <AddCircleIcon />
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      )}
    </div>
  );
};

export default Doctors;
