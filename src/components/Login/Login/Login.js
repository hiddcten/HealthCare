import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography, Link, Alert } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (!email || !password) {
      setError('Enter email or password.');
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
          sessionStorage.setItem('isLoggedIn', 'true');
          navigate('/home');
          window.location.reload();
        } else {
          setError(data);
        }
      } else {
        setError('error');
      }
    } catch (error) {
      setError('error');
      console.error(error);
    }
  };

  return (
    <Box sx={{ bgcolor: '#D3E9F5', color: 'primary.main', minHeight: '100vh', pt: 8 }}>
      <Container id="login" maxWidth="xl">
        <Container component="main" maxWidth="xs" sx={{ bgcolor: '#ffffff', borderRadius: '16px', p: 6, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <CssBaseline />
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ m: 1, bgcolor: '#0077B2' }}>
              <AccountCircle />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: '#0077B2' }}>
              Log in
            </Typography>

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="email"
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
                label="password"
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
                sx={{ mt: 3, mb: 2, bgcolor: '#0077B2' }}
              >
                Login
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="/register" variant="body2" sx={{ color: '#0077B2' }}>
                    {"Don't have an account?Register! :)"}
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
