import React from 'react';
import { Container, Typography, Box, Avatar, Paper } from '@mui/material';

const Home = () => {
  return (
    <section id="home" style={{ background: '#f4f6f8', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Paper
          elevation={5}
          sx={{
            padding: 4,
            borderRadius: 4,
            backgroundColor: '#ffffff',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // subtle shadow for a professional look
            textAlign: 'center',
            mt: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Profile Picture with Border and Shadow */}
          <Avatar
            alt="Vignesh"
            src="/myimage.jpg" // Replace with your actual image path or URL
            sx={{
              width: 180,  // Increased size
              height: 180, // Increased size
              marginBottom: 3,
              border: '5px solid #1976d2', // border for the profile picture
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // shadow for the profile picture
            }}
          />

          {/* Name */}
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
            I'm Vignesh
          </Typography>

          {/* Job Title */}
          <Typography variant="h6" sx={{ fontSize: '1.2rem', color: '#1976d2', fontWeight: '600' }}>
            Full Stack Developer
          </Typography>

          {/* Brief Introduction */}
          <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#555', marginTop: 2 }}>
            Passionate about building impactful Websites using React Js and Python Django web Framework and API Integration. Currently seeking opportunities to work as a full-stack developer.
          </Typography>

         
        </Paper>
      </Container>
    </section>
  );
};

export default Home;
