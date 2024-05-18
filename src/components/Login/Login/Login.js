import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography, Link, Alert } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { Fingerprint } from '@mui/icons-material';
import { AuthContext } from '../../../Context/Authprovider';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    // Kiểm tra email và mật khẩu (bạn có thể thêm logic validate ở đây)
    if (!email || !password) {
      setError('Vui lòng nhập đầy đủ email và mật khẩu');
      return;
    }

    try {
      const response = await fetch('http://localhost/healthcare-main/api/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
      });

      if (response.ok) {
        const data = await response.text();
        if (data === 'success') {
            // Lưu trạng thái đăng nhập vào sessionStorage
            sessionStorage.setItem('isLoggedIn', 'true');
            // Chuyển hướng về trang home
            navigate('/home');
            // Tải lại trang để áp dụng các thay đổi mới
            window.location.reload();
        } else {
            setError(data); // Hiển thị thông báo lỗi từ server
        }
    } else {
        setError('Có lỗi xảy ra khi đăng nhập');
    }
    
    } catch (error) {
      setError('Lỗi kết nối tới máy chủ');
      console.error(error);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container id="login" maxWidth="xl">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box sx={{ marginTop: 15, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LoginIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Đăng nhập
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Địa chỉ Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={handleEmailChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mật khẩu"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={handlePasswordChange}
              />
              {error && (
                <Alert severity="error">{error}</Alert>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                <Fingerprint /> Đăng nhập
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Chưa có tài khoản? Đăng ký"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Container>
    </Box>
  );
};

export default Login;
