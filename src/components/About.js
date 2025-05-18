import React from 'react';
import { Container, Typography, Box } from '@mui/material';


const About = () => {
  return (
    <section id="about">
      <Container maxWidth="md">
        <Box className="about-box">
          <Typography variant="h4" component="h2" gutterBottom className="about-title">
            About Me
          </Typography>

          <Typography variant="body1" paragraph>
            I’m a passionate and self-driven <strong>React.js developer</strong> transitioning from a non-IT background into the world of software development.
            With a <strong>B.Tech in Biotechnology</strong> from Mepco Schlenk Engineering College and a current role at <strong>Optum Health and Technology Pvt. Ltd.</strong> as an Associate Medical Coder, I bring a unique blend of analytical thinking, precision, and adaptability to the tech field.
          </Typography>

          <Typography variant="body1" paragraph>
            Over the past year, I’ve immersed myself in full-stack web development, focusing on technologies like <strong>React.js</strong>, <strong>Python</strong>, <strong>Django</strong>, <strong>Django REST Framework</strong>, and <strong>MySQL</strong>. 
            I’ve built several hands-on projects including a weather application, a JWT-based authentication system, and this portfolio site—all of which demonstrate my ability to work across the frontend and backend.
          </Typography>

          <Typography variant="body1" paragraph>
            My journey into tech has been fueled by a genuine curiosity and love for building meaningful, user-centric applications. I’m always eager to collaborate, learn from others, and contribute to impactful projects.
          </Typography>

          <Typography variant="body1" paragraph>
            I’m actively seeking an <strong>entry-level developer role</strong> where I can continue growing and contribute to a dynamic software team.
          </Typography>
        </Box>
      </Container>
    </section>
  );
};

export default About;
 