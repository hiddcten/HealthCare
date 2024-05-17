import React, { useEffect, useState } from 'react';
import { Avatar, Box, Card, CardActionArea, CardContent, Container, Grid, Typography, Link } from '@mui/material';

const OurExperts = () => {
  const [experts, setExperts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lấy dữ liệu bác sĩ từ nguồn dữ liệu của bạn (ví dụ: API, file JSON)
    const fetchData = async () => {
      try {
        const response = await fetch('/api/experts'); // Thay '/api/experts' bằng đường dẫn API thực tế
        const data = await response.json();
        setExperts(data.slice(0, 3)); // Giới hạn hiển thị 3 chuyên gia
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu chuyên gia:', error);
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
        <Typography sx={{ mt: 2, mb: 2, fontWeight: 600 }} variant='h6'>
          Gặp gỡ đội ngũ chuyên gia của chúng tôi
        </Typography>

        <Typography sx={{ mb: 8, fontWeight: 600 }} variant='h5'>
          Chúng tôi cam kết mang đến cho bạn dịch vụ tốt nhất
        </Typography>

        {isLoading ? (
          <Typography variant="h6" align="center">
            Đang tải dữ liệu chuyên gia...
          </Typography>
        ) : (
          <Grid container spacing={3}>
            {experts.map((expert) => (
              <Grid key={expert.id} item xs={12} sm={6} md={4} lg={3} sx={{ mx: 'auto' }}>
                <Card sx={{
                  mx: 'auto',
                  boxShadow: 10,
                  maxWidth: 345,
                  transition: '0.5s all ease-in-out',
                  ':hover': {
                    color: '#e91e63',
                    boxShadow: 1,
                  },
                  'img': { transition: '0.5s all ease-in-out' },
                  ':hover img': {
                    transform: 'scale(1.1)',
                  },
                }}>
                  <CardActionArea>
                    <Avatar
                      alt="Ảnh chuyên gia"
                      src={expert.img} // Thay đổi tên trường hình ảnh cho phù hợp
                      sx={{ width: 256, height: 256, mx: 'auto' }}
                    />
                    <CardContent sx={{ display: 'flex', mx: 'auto', my: 2 }}>
                      <Typography gutterBottom variant="h5" component="div">
                        Chuyên khoa {expert.specialize}
                      </Typography>
                    </CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {expert.name}
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        <Typography sx={{ mx: 2, p: 2, textAlign: "end" }}>
          <Link href="/doctors" className='text-style' color="primary">
            Gặp gỡ đội ngũ chuyên gia
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default OurExperts;
