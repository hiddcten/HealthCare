import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Whyus = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/fakedata/healthcaredb.json');
        const data = await response.json();
        setServices(data.services);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu dịch vụ:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Box id="whyus" sx={{ bgcolor: '#D3E9F5', color: 'primary.main', p: 2, mb: 2, mt: 6, textAlign: 'center' }}>
      {isLoading ? (
        <Typography variant="h6" align="center">
          Đang tải dữ liệu...
        </Typography>
      ) : (
        <Container maxWidth="xl">
          <Typography sx={{ mt: 2, mb: 2, fontWeight: 600, color: '#0077B2', fontSize: '2rem' }} variant="h6">
            Why Choose Us
          </Typography>
          <Box sx={{ bgcolor: '#ffffff', borderRadius: 2, p: 2, mb: 2, boxShadow: 5 }}>
            <Typography variant="h6" color="textPrimary" align="center">
              gần đh tdt
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {services.slice(0, 3).map((service, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    mx: 'auto',
                    width: 350,
                    height: 350,
                    bgcolor: '#fff',
                    borderRadius: 0,
                    boxShadow: 10,
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    transition: '0.3s all ease-in-out',
                    ':hover': {
                      transform: 'scale(1.05)',
                      boxShadow: 5,
                      color: '#e91e63'
                    }
                  }}
                >
                  <div style={{ width: '100%', height: '60%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={service.service_img} alt={service.name} style={{ width: '100%', height: 'auto' }} />
                  </div>
                  <Box sx={{ width: '100%', height: '40%', bgcolor: '#fff', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <Typography variant="h5" sx={{ mt: 1, fontSize: '1.2rem', color: '#0077B2' }}>{service.name}</Typography>
                    <Typography variant="body1" sx={{ mt: 1, fontSize: '2rem' }}>{service.treatment}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Button
            component={Link}
            to="/services" // Chỉnh đường dẫn đến trang Services
            variant="contained"
            color="primary"
            sx={{ mb: 5, mt: 5, bgcolor: '#0077B2' }} // Đổi màu nút bấm thành màu xanh dương #0077B2
          >
            To Services
          </Button>
        </Container>
      )}
    </Box>
  );
};

export default Whyus;
