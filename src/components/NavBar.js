import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';

const Navbar = () => (
  <AppBar position="sticky" color="primary">
    <Toolbar style={{ justifyContent: 'center', gap: '15px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography 
          variant="h6"
          component="div"
          sx={{ 
            fontWeight: 'bold', 
            color: 'white', 
            fontSize: '1.2rem',
            textAlign: 'left', 
            pl: 2 // padding left to give space from the edge
          }}
        >
          My Portfolio
        </Typography>
      </Box>

      {/* Navbar Links - Centered */}
      <Button color="inherit" href="#about">About</Button>
      <Button color="inherit" href="#skills">Skills</Button>
      <Button color="inherit" href="#projects">Projects</Button>
      <Button color="inherit" href="#contact">Contact</Button>

      {/* Resume Download Button */}
      <Button 
        color="inherit"
        href="/Vignesh_profile.pdf" // relative path to the resume in public/
        target="_blank"
        download
        endIcon={<DownloadIcon />}
      >
        Resume
      </Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
