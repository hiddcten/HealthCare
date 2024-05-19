import React, { useState, useEffect } from 'react';
import {
    Avatar,
    Box,
    Button,
    CssBaseline,
    TextField,
    Grid,
    Typography,
    Container,
    Link,
    Alert,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom'; 

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        // Get the "error" query string parameter
        const urlParams = new URLSearchParams(window.location.search);
        const error = urlParams.get('error');
        if (error) {
            setError(error); 
        }
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        if (formData.password !== formData.confirmPassword) {
            setError('Incorrect confirm password!');
            return;
        }

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('firstName', formData.firstName);
            formDataToSend.append('lastName', formData.lastName);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('password', formData.password);

            const response = await fetch('http://localhost/healthcare-main/api/register.php', {
                method: 'POST',
                body: formDataToSend,
            });

            const result = await response.text();

            if (result.includes('Register successfully!')) {
                alert('Register successfully!');
                console.log('Redirecting to login page...');
                navigate('/login'); 
            } else {
                setError(result);
            }
        } catch (error) {
            setError('Please try again...');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    marginBottom: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: '#0077B2' }}> 
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" sx={{ color: '#0077B2' }}> 
                    Đăng ký
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        mt: 3,
                        p: 3,
                        boxShadow: '0px 50px 50px rgba(0, 0, 0, 0.1)', 
                        bgcolor: '#ffffff', 
                        borderRadius: '16px', 
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="firstName"
                                autoFocus
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="lastName"
                                name="lastName"
                                autoComplete="family-name"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="email"
                                name="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="confirmPassword"
                                label="confirmPassword"
                                type="password"
                                id="confirmPassword"
                                autoComplete="new-password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </Grid>
                        {error && ( 
                            <Grid item xs={12}>
                                <Alert severity="error">{error}</Alert>
                            </Grid>
                        )}
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, bgcolor: '#0077B2' }} 
                    >
                        Register
                    </Button>
                    <Grid container justifyContent = "flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2" sx={{ color: '#0077B2' }}> 
                                Already had an account ? Log in now
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;

