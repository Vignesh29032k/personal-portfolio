import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Grid } from '@mui/material';

const projects = [
  {
    title: 'Portfolio Site',
    description: `A personal portfolio website built using React and Material UI. 
    It showcases various projects, skills, and contact information.`,
    link: 'https://portfolio-pixie-25eaca.netlify.app/',
  },
  {
    title: 'Weather App',
    description: `An app to fetch real-time weather data using the OpenWeather API.
    It allows users to search for weather information based on location.`,
    link: 'https://github.com/Vignesh29032k/weatherapi-datafetching',
  },
  {
    title: 'JWT Login Authentication Project',
    description: `Developed a full-stack JWT authentication system using React.js and Django REST Framework.
    - Secure token-based login.
    - Admin-controlled registration.
    - Protected routes and session persistence via localStorage.
    - Safe frontend-backend communication using custom middleware.`,
    link: 'https://github.com/Vignesh29032k/login-authentication-project',
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <Grid container spacing={3}>
        {projects.map((project, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2" color="text.secondary" style={{ whiteSpace: 'pre-line' }}>
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={project.link} target="_blank">
                  {project.link ? 'View' : 'Link'}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Projects;
