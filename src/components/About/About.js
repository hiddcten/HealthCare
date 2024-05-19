import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

const About = () => {
  // Thay đổi các URL hình ảnh tại đây
  const imageUrl1 = 'https://www.sojitz.com/jp/news/images/200521_00.jpg'; // Thêm URL hình ảnh 1 vào đây
  const imageUrl2 = 'https://th.bing.com/th/id/R.527e17cde0a96ab3a221bec29c1e553e?rik=ilEQUdbeVL2R4A&pid=ImgRaw&r=0'; // Thêm URL hình ảnh 2 vào đây

  return (
    <Box id="about" className="about-container" boxShadow={3} borderRadius={2} p={3} mb={4}>
      <Container maxWidth="xl">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h4" color="primary.main" gutterBottom align="center">
              Đặt dịch vụ nhanh cho nóng
            </Typography>
            <Typography variant="h6" gutterBottom align="center">
              10 Năm phát triển bệnh viện
            </Typography>
            <Typography variant="body1" paragraph align="center">
              Mại zô anh em 
            </Typography>
          </Grid>
          <Grid container item xs={12} justifyContent="center" spacing={3}>
            <Grid item xs={8} sm={6}>
              <Box
                height={300} // Đặt chiều cao cố định cho hình ảnh
                boxShadow={5}
                p={0.3}
                borderRadius={0.5}
                overflow="hidden"
              >
                <img
                  src={imageUrl1}
                  alt="Image 1"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}
                />
              </Box>
            </Grid>
            <Grid item xs={8} sm={6}>
              <Box
                height={300} // Đặt chiều cao cố định cho hình ảnh
                boxShadow={5}
                p={0.3}
                borderRadius={0.5}
                overflow="hidden"
              >
                <img
                  src={imageUrl2}
                  alt="Image 2"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
