import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import hook useNavigate
import { Box, Container, CssBaseline, Typography, TextField, Button, Grid, Link, Alert } from '@mui/material';
import { Avatar } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { Fingerprint } from '@mui/icons-material';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize navigate function

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        // Validate email and password (additional validation logic can be added here)
        if (!email || !password) {
            setError('Vui lòng nhập đầy đủ email và mật khẩu');
            return;
        }

        try {
            // Perform login request
            const response = await fetch('http://localhost/healthcare-main/api/login.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
            });

            if (response.ok) {
                const data = await response.text();
                if (data === 'success') {
                    // Redirect to Home page upon successful login
                    navigate('/home');
                } else {
                    setError(data);
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
