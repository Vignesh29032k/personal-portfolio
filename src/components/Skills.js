import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

// Import icons
import reactIcon from '../assets/icons/react.png';
import jsIcon from '../assets/icons/js.png';
import pythonIcon from '../assets/icons/python.png';
import djangoIcon from '../assets/icons/django.png';
import mysqlIcon from '../assets/icons/mysql.png';
import restApiIcon from '../assets/icons/restapi.png';
import integrationIcon from '../assets/icons/integration.png';
import htmlIcon from '../assets/icons/html.png';
import cssIcon from '../assets/icons/css.png';

const skills = [
  { name: 'React JS', icon: reactIcon },
  { name: 'Javascript', icon: jsIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'Django', icon: djangoIcon },
  { name: 'MySQL', icon: mysqlIcon },
  { name: 'Rest API', icon: restApiIcon },
  { name: 'API Integration', icon: integrationIcon },
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Skills</h2>
      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Card sx={{ textAlign: 'center', padding: '20px' }}>
              <img src={skill.icon} alt={skill.name} style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
              <CardContent>
                <Typography variant="body1">{skill.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Skills;
