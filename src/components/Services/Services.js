import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/healthcaredb.json');
        const data = await response.json();
        setServices(data.services);
      } catch (error) {
        console.error('Error fetching service data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleServiceClick = (servId) => {
    navigate(`/services/details/${servId}`);
  };

  const cardStyles = {
    display: 'flex',
    flexDirection: 'row',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '20px 0',
    padding: '0.5rem',
    textAlign: 'left',
    position: 'relative',
  };

  const buttonWrapperStyles = {
    position: 'absolute',
    bottom: '0',
    right: '0',
  };

  return (
    <Box id="services" sx={{ bgcolor: '#D3E9F5', color: 'primary.main', p: 2, mb: 2, mt: 6, textAlign: "center" }}>
      {isLoading ? (
        <Typography variant="h6" align="center">
          Loading . . 
        </Typography>
      ) : (
        <Container maxWidth="xl">
          <Typography variant="h2" sx={{ color: '#0077B2', fontSize: '3.5rem', fontWeight: 'bold', marginBottom: 3, textAlign: 'center' }}>
            Our Services
          </Typography>

          <Grid container spacing={3} direction="column">
            {services.map((service) => (
              <Grid key={service.id} item xs={12}>
                <Card sx={cardStyles}> 
                  <Grid container alignItems="stretch">
                    <Grid item>
                      <CardMedia
                        component="img"
                        sx={{
                          aspectRatio: '1/1',
                          objectFit: 'cover',
                          marginRight: 6,
                          borderRadius: 1,
                        }}
                        image={service.service_img}
                        alt={`Service Pic ${service.treatment}`}
                      />
                    </Grid>
                    <Grid item xs>
                      <CardContent>
                        <Typography variant="h1" sx={{ color: '#0077B2', fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px', textAlign: 'center' }}>
                          {service.treatment}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '1.75rem', lineHeight: 1.6 }} color="text.secondary">
                          {service.description}
                        </Typography>

                        <CardActions sx={{ justifyContent: 'flex-start', padding: 0, paddingTop: '10px' }}>
                          <div style={buttonWrapperStyles}>
                            <Button
                              onClick={() => handleServiceClick(service.id)}
                              variant="contained"
                              sx={{ backgroundColor: '#0077B2' }}
                              startIcon={<ReadMoreIcon />}
                            >
                              View Details
                            </Button>
                          </div>
                        </CardActions>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Button
            component={Link}
            to="/home#home"
            variant="contained"
            color="primary"
            startIcon={<HomeIcon />}
            sx={{ mb: 5, mt: 5, backgroundColor: '#0077B2' }}
          >
            Back to Homepage
          </Button>
        </Container>
      )}
    </Box>
  );
};

export default Services;
