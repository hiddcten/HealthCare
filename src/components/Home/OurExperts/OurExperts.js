import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, Card, CardActionArea, CardContent, Container, Grid, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';
import { CardActions } from '@mui/material'; 

const OurExperts = () => {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/fakedata/doctordb.json');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setDoctors(data.docs);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu chuyên gia:', error);
        setError('Có lỗi xảy ra khi tải danh sách chuyên gia.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="our-experts">
      {isLoading ? (
        <Typography variant="h6" align="center">
          Đang tải danh sách chuyên gia...
        </Typography>
      ) : error ? (
        <Typography variant="h6" align="center" color="error">
          {error}
        </Typography>
      ) : (
        <Box sx={{ bgcolor: '#fce4ec', color: 'primary.main', p: 2, mb: 2, mt: 6, textAlign: "center" }}>
          <Container maxWidth="xl">
            <Typography sx={{ mt: 2, mb: 2, fontWeight: 600 }} variant="h5">
              Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ bạn
            </Typography>

            <Grid container spacing={3}>
              {doctors && doctors.length > 0 && doctors.slice(0, 3).map((doctor) => (
                <Grid key={doctor.doc_id} item xs={12} sm={6} md={4} lg={3} sx={{ mx: 'auto' }}>
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
                        src={doctor.doc_img}
                        sx={{ width: 256, height: 256, mx: 'auto' }}
                      />
                      <CardContent sx={{ display: 'flex', mx: 'auto', my: 2 }}>
                        <Typography gutterBottom variant="h5" component="div">
                          Chuyên khoa {doctor.specialize}
                        </Typography>
                      </CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Chuyên gia {doctor.name}
                      </Typography>
                    </CardActionArea>
                    <CardActions sx={{ textAlign: "center" }}>
                      <Button
                        component={Link}
                        to={`/appointment?doctorId=${doctor.doc_id}`}
                        sx={{ mt: 2, mb: 1 }}
                        variant="contained"
                        className="CheckButton"
                      >
                        Đặt lịch hẹn
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

export default OurExperts;
