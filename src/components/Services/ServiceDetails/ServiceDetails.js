import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';
import { CardActions } from '@mui/material'; 


const ServiceDetails = () => {
  const { servId } = useParams();
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lấy chi tiết dịch vụ từ nguồn dữ liệu của bạn (ví dụ: API, file JSON)
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/services/${servId}`); // Thay '/api/services' bằng đường dẫn API thực tế
        const data = await response.json();
        setService(data);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu dịch vụ:', error);
        // Xử lý lỗi (ví dụ: hiển thị thông báo lỗi cho người dùng)
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [servId]); // Gọi lại useEffect khi servId thay đổi

  return (
    <Box sx={{ bgcolor: '#fce4ec', color: 'primary.main', p: 2, mb: 2, textAlign: "center" }}>
      <Container maxWidth="xl">
        {isLoading ? (
          <Typography variant="h6" align="center">
            Đang tải thông tin dịch vụ...
          </Typography>
        ) : service ? (
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Card sx={{
                mx: 'auto',
                maxWidth: 550,
                transition: '0.5s all ease-in-out',
                ':hover': {
                  boxShadow: 10
                },
                'img': { transition: '0.5s all ease-in-out' },
                ':hover img': {
                  transform: 'scale(1.05)'
                }
              }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    width="100%"
                    height="550px"
                    image={service.serviceImg}
                    alt={`Hình ảnh dịch vụ ${service.treatment}`}
                  />
                  <CardContent sx={{ display: 'flex' }}>
                    <Avatar
                      width='50px'
                      height='50px'
                      alt="service icon"
                      src={service.icon}
                      sx={{
                        width: 40, height: 40
                      }}
                    />
                    <Typography variant="h5" component="div">
                      {service.treatment}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardContent>
                  <Typography sx={{ p: 2 }} align="justify" gutterBottom variant="p" component="div">
                    {service.description}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    Chi phí: {service.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to="/appointment" className='text-style'>
                    <Button sx={{ mt: 2, mb: 2 }} variant="contained" className="CheckButton">
                      Đặt lịch hẹn
                      <AddCircleIcon />
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        ) : (
          <Typography variant="h6" align="center">
            Không tìm thấy dịch vụ
          </Typography>
        )}

        <Link to="/home#home" className='text-style'>
          <Button variant="contained" color="primary" sx={{ mb: 5, mt: 5 }}>
            Trở về trang chủ
          </Button>
        </Link>
      </Container>
    </Box>
  );
};

export default ServiceDetails;
