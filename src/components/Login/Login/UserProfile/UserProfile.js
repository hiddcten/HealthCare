import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const UserProfile = () => {

  return (
    <Box sx={{ backgroundColor: '#f0f7f4', p: 2, boxShadow: 5 }}>
      <Box sx={{ backgroundColor: 'white', p: 35, borderRadius: 5, boxShadow: 3 }}>
        <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 2 }}>
          User Profile
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1">This is user profile, Nothing here :)</Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        {/* Footer */}
      </Box>
    </Box>
  );
};

export default UserProfile;
