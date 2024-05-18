import { AppBar, Avatar, Box, Button, Container, Divider, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HealingTwoToneIcon from '@mui/icons-material/HealingTwoTone';
import './NavBar.css';
import { HashLink } from 'react-router-hash-link';

const settings = ['Profile', 'Logout'];

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    const user = { // Giả định user object
        displayName: 'John Doe',
        photoURL: 'https://example.com/photo.jpg',
        email: 'johndoe@example.com'
    };

    useEffect(() => {
        // Kiểm tra trạng thái đăng nhập từ sessionStorage
        const isLoggedInSession = sessionStorage.getItem('isLoggedIn');
        setIsLoggedIn(isLoggedInSession === 'true');
    }, []);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleUserControl = (event) => {
        const userEvent = event.currentTarget.innerText;
        if (userEvent === 'Logout') {
            // Xử lý logout
            sessionStorage.removeItem('isLoggedIn'); // Xóa trạng thái đăng nhập từ sessionStorage
            window.location.reload(); // Reload trang để cập nhật giao diện
        } else if (userEvent === 'Profile') {
            // Điều hướng tới trang profile
            navigate('/profile');
        }
    };

    return (
        <Box sx={{ mt: 8 }}>
            <AppBar position="fixed" color="primary" sx={{ top: 0, bottom: 'auto' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* Phần header */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            <HealingTwoToneIcon fontSize='large' />
                            Health Haven Hospital
                        </Typography>

                        {/* Menu điều hướng cho các màn hình nhỏ */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem component={HashLink} smooth to='/home#home'>Home</MenuItem>
                                <MenuItem component={HashLink} smooth to='/services#services'>Services</MenuItem>
                                <MenuItem component={HashLink} smooth to='/doctors#doctors'>Doctors</MenuItem>
                                <MenuItem component={HashLink} smooth to='/appointment#appointment'>Appointment</MenuItem>
                                <MenuItem component={HashLink} smooth to='/about#about'>About</MenuItem>
                                {!isLoggedIn && <MenuItem component={HashLink} smooth to='/login#login'>Login</MenuItem>}
                            </Menu>
                        </Box>

                        {/* Logo trên màn hình nhỏ */}
                        <Typography
                            variant="h6"
                            align='center'
                            component="div"
                            sx={{ flexGrow: 1, pt: 2, display: { xs: 'flex', md: 'none' } }}
                        >
                            <HealingTwoToneIcon fontSize='large' /> Health Haven Hospital
                        </Typography>

                        {/* Menu điều hướng cho các màn hình lớn */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <HashLink className="text-style text-style-fullscrn" smooth to='/home#home'>
                                <Button sx={{ my: 2, color: 'white', display: 'block' }}>Home</Button>
                            </HashLink>
                            <HashLink className="text-style text-style-fullscrn" smooth to='/services#services'>
                                <Button sx={{ my: 2, color: 'white', display: 'block' }}>Services</Button>
                            </HashLink>
                            <HashLink className="text-style text-style-fullscrn" smooth to='/doctors#doctors'>
                                <Button sx={{ my: 2, color: 'white', display: 'block' }}>Doctors</Button>
                            </HashLink>
                            <HashLink className="text-style text-style-fullscrn" smooth to='/appointment#appointment'>
                                <Button sx={{ my: 2, color: 'white', display: 'block' }}>Appointment</Button>
                            </HashLink>
                            <HashLink className="text-style text-style-fullscrn" smooth to='/about#about'>
                                <Button sx={{ my: 2, color: 'white', display: 'block' }}>About</Button>
                            </HashLink>
                            {!isLoggedIn && <HashLink className="text-style text-style-fullscrn" smooth to='/login#login'>
                                <Button sx={{ my: 2, color: 'white', display: 'block' }}>Login</Button>
                            </HashLink>}
                        </Box>

                        {/* Menu người dùng */}
                        {isLoggedIn && (
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="User Avatar" src={user.photoURL || "/static/images/avatar/2.jpg"} />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <Typography sx={{ p: '5px' }} color="primary" textAlign="center">Hi, {user.displayName}</Typography>
                                    <Divider />
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography onClick={handleUserControl} textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Navbar;

