import React, { useEffect, useState } from 'react';
import { 
  Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography, CardActions 
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { useNavigate } from 'react-router-dom'; // Update this line

const Services = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate(); // Update this line

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/fakedata/healthcaredb.json');
        const data = await response.json();
        setServices(data.services);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu dịch vụ:', error);
        // Xử lý lỗi (ví dụ: hiển thị thông báo lỗi cho người dùng)
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleServiceClick = (servId) => {
    navigate(`/services/details/${servId}`); // Update this line
  };

  return (
    <Box id='services' sx={{ bgcolor: '#fce4ec', color: 'primary.main', p: 2, mb: 2, mt: 6, textAlign: "center" }}>
      {isLoading ? (
        <Typography variant="h6" align="center">
          Đang tải danh sách dịch vụ...
        </Typography>
      ) : (
        <Container maxWidth="xl">
          <Typography sx={{ mt: 2, mb: 2, fontWeight: 600 }} variant='h6'>
            Dịch vụ của chúng tôi
          </Typography>

          <Grid container spacing={3}>
            {services.map((service) => (
              <Grid key={service.id} item xs={12} sm={6} md={4}>
                <Card sx={{
                  mx: 'auto',
                  maxWidth: 345, 
                  transition: '0.5s all ease-in-out', 
                  ':hover': {
                    boxShadow: 10,
                    color: '#e91e63'
                  },
                  'img': { transition: '0.5s all ease-in-out' },
                  ':hover img': {
                    transform: 'scale(1.1)'
                  }
                }}>
                  <CardActionArea onClick={() => handleServiceClick(service.id)}>
                    <CardMedia
                      component="img"
                      height="194" // Điều chỉnh chiều cao hình ảnh
                      image={service.service_img} 
                      alt={`Hình ảnh dịch vụ ${service.treatment}`}
                    />
                    <CardContent>
                      <CardMedia
                        component="img"
                        sx={{ width: 40, mr: 1, display: 'block', margin: '0 auto 16px' }} // Căn giữa biểu tượng
                        image={service.icon}
                        alt="service icon"
                      />
                      <Typography gutterBottom variant="h5" component="div" align="center">
                        {service.treatment}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" align="center">
                        {service.description} 
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions sx={{ justifyContent: 'center' }}> {/* Căn giữa nút */}
                    <Button
                      onClick={() => handleServiceClick(service.id)}
                      variant="contained"
                      color="primary"
                      startIcon={<ReadMoreIcon />}
                    >
                      Xem chi tiết
                    </Button>
                  </CardActions>
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
            sx={{ mb: 5, mt: 5 }}
          >
            Trở về trang chủ
          </Button>
        </Container>
      )}
    </Box>
  );
};

export default Services;
