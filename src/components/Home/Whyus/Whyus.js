import React, { useEffect, useState } from 'react';
import { Avatar, Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography, Link } from '@mui/material';

const Whyus = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lấy dữ liệu dịch vụ từ nguồn dữ liệu của bạn (ví dụ: API, file JSON)
    const fetchData = async () => {
      try {
        const response = await fetch('/api/services'); // Thay '/api/services' bằng đường dẫn API thực tế
        const data = await response.json();
        setServices(data.slice(0, 3)); // Giới hạn hiển thị 3 dịch vụ
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu dịch vụ:', error);
        // Xử lý lỗi (ví dụ: hiển thị thông báo lỗi cho người dùng)
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ bgcolor: '#fce4ec', color: 'primary.main', p: 2, mb: 2, textAlign: "center" }}>
      <Container maxWidth="xl">
        <Typography sx={{ mt: 2, mb: 2, fontWeight: 600 }} variant="h6">
          Lý do bạn nên chọn Health Haven Hospital
        </Typography>

        <Typography sx={{ mb: 8, fontWeight: 600 }} variant="h5">
          Chất lượng vượt trội, dịch vụ tận tâm
        </Typography>

        {isLoading ? (
          <Typography variant="h6" align="center">
            Đang tải dữ liệu dịch vụ...
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {services.map((service) => (
              <Grid key={service.id} item xs={12} md={6} lg={4}>
                <Link href={`/services/${service.id}`}> {/* Liên kết đến trang chi tiết dịch vụ */}
                  <Card sx={{
                    maxWidth: 345,
                    transition: '0.5s all ease-in-out',
                    mb: 2,
                    ':hover': {
                      boxShadow: 10,
                      color: '#e91e63',
                    },
                    'img': { transition: '0.5s all ease-in-out' },
                    ':hover img': {
                      transform: 'scale(1.1)',
                    },
                  }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="240"
                        image={service.serviceImg} // Sửa tên trường hình ảnh
                        alt={`Hình ảnh dịch vụ ${service.treatment}`}
                      />
                      <CardContent>
                        <Avatar
                          alt="Biểu tượng dịch vụ"
                          src={service.icon} // Sửa tên trường biểu tượng
                          sx={{ width: 40, height: 40, mx: 'auto', mb: 2 }}
                        />
                        <Typography gutterBottom variant="h5" component="div">
                          {service.treatment}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {service.description} 
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        )}

        <Typography sx={{ mx: 2, p: 2, textAlign: "end" }}>
          <Link href="/services" className='text-style' color="primary">
            Xem tất cả dịch vụ
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Whyus;
