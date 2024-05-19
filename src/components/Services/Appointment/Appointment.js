import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  Alert
} from '@mui/material';
import { LocalizationProvider, MobileDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Appointment = () => {
  const [docName, setDocName] = useState('');
  const [value, setValue] = useState(new Date());
  const [problemType, setProblemType] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetch('/data/doctordb.json')
      .then(res => res.json())
      .then(data => {
        console.log('Doctors data:', data);
        setDoctors(data.docs);
      })
      .catch(error => console.error('Error fetching doctors:', error));
  }, []);

  const handleChange = (event) => {
    setDocName(event.target.value);
  };

  const handleProblemTypeChange = (event) => {
    setProblemType(event.target.value);
  };

  const handleDateChange = (newValue) => {
    setValue(newValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!docName || !value || !problemType) {
      setErrorMessage('Please fill in information.');
    } else {
      setSuccessMessage('Make appointment successfully :)!');
      setErrorMessage('');
    }
  };

  return (
    <Box id='appointment' sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container maxWidth="xl">
        <Typography variant='h6' sx={{ mt: 5, mb: 5 }}>Select your time and data for Appointment</Typography>

        <FormControl sx={{ mb: 5, minWidth: '50%' }}>
          <InputLabel id="demo-simple-select-autowidth-label">Select Doctor Name</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={docName}
            onChange={handleChange}
            autoWidth
            label="Select Doctor Name"
          >
            {doctors.length > 0 ? (
              doctors.map((doctor) => (
                <MenuItem key={doctor.doc_id} value={doctor.name}>
                  {doctor.name}
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled>No doctors available</MenuItem>
            )}
          </Select>
        </FormControl>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <MobileDateTimePicker
              value={value}
              onChange={handleDateChange}
              label="Appointment Date"
              onError={console.log}
              minDate={new Date()}
              inputFormat="yyyy/MM/dd hh:mm a"
              mask="___/__/__ __:__ _M"
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>

        <TextField sx={{ mt: 2, mb: 2 }} fullWidth label="Problem type" id="fullWidth" value={problemType} onChange={handleProblemTypeChange} />

        {errorMessage && <Alert severity="error" sx={{ mt: 2, mb: 2 }}>{errorMessage}</Alert>}
        {successMessage && <Alert severity="success" sx={{ mt: 2, mb: 2 }}>{successMessage}</Alert>}

        <Button
          sx={{ p: 1, mt: 2, mb: 5, bgcolor: '#4caf50', '&:hover': { bgcolor: '#388e3c' } }}
          onClick={handleSubmit}
          fullWidth
          variant="contained"
        >
          <AddCircleIcon /> Confirm
        </Button>

      </Container>
    </Box>
  );
};

export default Appointment;
