// components/Skills.js
'use client';
import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, LinearProgress } from '@mui/material';

const Skills = () => {
  const initialSkills = [
    { name: 'JavaScript', progress: 0 },
    { name: 'React.js', progress: 0 },
    { name: 'Vue.js', progress: 0 },
    { name: 'Tailwind CSS', progress: 0 },
    { name: 'Next.js', progress: 0 },
    { name: 'git', progress: 0 },
    { name: 'HTML', progress: 0 },
    { name: 'Flutter', progress: 0 },
  ];

  const finalSkills = [
    { name: 'JavaScript', progress: 80 },
    { name: 'React.js', progress: 90 },
    { name: 'Vue.js', progress: 70 },
    { name: 'Tailwind CSS', progress: 60 },
    { name: 'Next.js', progress: 75 },
    { name: 'git', progress: 75 },
    { name: 'HTML', progress: 100 },
    { name: 'Flutter', progress: 100 },
  ];

  const [skills, setSkills] = useState(initialSkills);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSkills(finalSkills);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container maxWidth="md" sx={{ my: 8 }} className='text-white bg-black/60 p-16'>
      <Typography variant="h3" fontWeight="bold" mb={4} className='text-center'>
        Skills
      </Typography>
      <Grid container spacing={4}>
        {skills.map((skill, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              {skill.name}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={skill.progress}
              sx={{ height: '0.5rem', borderRadius: '0.25rem', transition: 'width 1s ease-in-out' }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
