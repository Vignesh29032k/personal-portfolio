import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#222', color: '#fff', padding: '20px 0' }}>
      <Container maxWidth="md">
        <Box
          display="flex"
          justifyContent="center"
          gap={4}
          flexWrap="wrap"
          mb={1}
        >
          <Link
            href="https://www.linkedin.com/in/vignesh-jothimurugan-06bb1320a"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            color="inherit"
          >
            LinkedIn
          </Link>

          <Link
            href="https://www.naukri.com/mnjuser/profile"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            color="inherit"
          >
            Naukri
          </Link>

          <Link
            href="mailto:vigneshjv2903@gmail.com"
            underline="hover"
            color="inherit"
          >
            Email Me
          </Link>
        </Box>

        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Vignesh.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
