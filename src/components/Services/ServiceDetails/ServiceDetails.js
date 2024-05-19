import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActionArea, CardContent, Container, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
  const { servId } = useParams();
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(`/data/healthcaredb.json`);
        const data = await response.json();
        const foundService = data.services.find(item => item.id === Number(servId));
        setService(foundService);
      } catch (error) {
        console.error('Error fetching service data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [servId]); 

  return (
    <Box sx={{ bgcolor: '#e3f2fd', color: 'primary.main', p: 2, mb: 2, textAlign: "center" }}>
      <Container maxWidth="xl">
        {isLoading ? (
          <Typography variant="h6" align="center">
            Loading service information...
          </Typography>
        ) : service ? (
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h5" component="div" sx={{ textAlign: 'center', mt: 2 }}>
                      {service.treatment}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardContent>
                  <Typography sx={{ p: 2 }} align="justify" gutterBottom variant="p" component="div">
                    {service.description}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center' }}>
                    Price: {service.price}
                  </Typography>
                </CardContent>
                <CardActionArea>
                  <Link to="/appointment" className='text-style'>
                    <Button sx={{ mt: 40, mb: 2, bgcolor: '#4caf50' }} variant="contained" className="CheckButton">
                      Book Appointment
                      <AddCircleIcon />
                    </Button>
                  </Link>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        ) : (
          <Typography variant="h6" align="center">
            Service not found
          </Typography>
        )}

       
      </Container>
    </Box>
  );
};

export default ServiceDetails;
