import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';

// Components
import About from './components/About/About';
import Header from './components/Header/Header/Header';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import Footer from './components/Header/Footer/Footer';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Login/Register/Register';
import Services from './components/Services/Services';
import Doctors from './components/Services/Doctors/Doctors';
import Appointment from './components/Services/Appointment/Appointment';
import ServiceDetails from './components/Services/ServiceDetails/ServiceDetails';
import Profile from './components/Login/Login/UserProfile/UserProfile';

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#e91e63',
    },
    secondary: {
      main: '#f48fb1',
    },
    alternate: {
      main: '#fff',
    },
    text: {
      secondary: '#212121',
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/details/:servId" element={<ServiceDetails />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/profile" element={<Profile />} />
          
          <Route path="*" element={<Notfound />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}


export default App;
