import React, { useState, useEffect } from 'react';
import { LocalizationProvider, MobileDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Appointment = () => {
  const [docName, setDocName] = useState('');
  const [value, setValue] = useState(new Date());
  const [problemType, setProblemType] = useState('');
  const [doctors, setDoctors] = useState([]); // Danh sách bác sĩ từ PHPMyAdmin

  useEffect(() => {
    // Lấy danh sách bác sĩ từ PHPMyAdmin (thay bằng code thực tế của bạn)
    fetch('/api/get_doctors.php')
      .then(res => res.json())
      .then(data => setDoctors(data));
  }, []);

  const handleChange = (event) => {
    setDocName(event.target.value);
  };

  const handleProblemTypeChange = (event) => {
    setProblemType(event.target.value);
  };

  // Hàm xử lý thay đổi ngày giờ hẹn
  const handleDateChange = (newValue) => {
    setValue(newValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate dữ liệu
    if (!docName || !value || !problemType) {
      alert('Vui lòng điền đầy đủ thông tin.');
      return;
    }

    // Gửi dữ liệu lên server (thay bằng code PHP thực tế của bạn)
    try {
      const response = await fetch('/api/submit_appointment.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ docName, appointmentDate: value, problemType }),
      });

      if (response.ok) {
        alert('Đặt lịch hẹn thành công!');
        // Reset form hoặc chuyển hướng
      } else {
        const errorData = await response.json();
        alert('Đặt lịch hẹn thất bại: ' + errorData.message);
      }
    } catch (error) {
      alert('Có lỗi xảy ra khi đặt lịch hẹn.');
      console.error(error);
    }
  };

  return (
    <Box id='appointment' sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container maxWidth="xl">
        <Typography variant='h6' sx={{ mt: 5, mb: 5 }}>Select your time and data for Appointment</Typography>

        {/* Chọn bác sĩ */}
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
            {doctors.map((doctor) => (
              <MenuItem key={doctor.id} value={doctor.name}>
                {doctor.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Chọn ngày giờ hẹn */}
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

        <Button sx={{ p: 1, mt: 2, mb: 5 }} onClick={handleSubmit} fullWidth variant="contained"><AddCircleIcon /> Confirm</Button>
      </Container>
    </Box>
  );
};

export default Appointment;
