// components/Skills.js
'use client';
import { Box, Container, Fade, Grid, LinearProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const Skills = () => {
  // Flutter skill highlighted at the top, separate from categories
  const flutterSkill = {
    name: 'Flutter',
    level: 'Expert',
    progress: 0,
    finalProgress: 98,
    featured: true,
    description: 'Cross-platform app development with advanced UI components'
  };

  const [flutterProgress, setFlutterProgress] = useState(0);

  const skillCategories = [
    {
      category: "Other Mobile Technologies",
      skills: [
        { name: 'React Native', level: 'Proficient', progress: 0, finalProgress: 70 },
        { name: 'Dart', level: 'Expert', progress: 0, finalProgress: 95 },
      ]
    },
    {
      category: "Frontend Development",
      skills: [
        { name: 'JavaScript', level: 'Advanced', progress: 0, finalProgress: 85 },
        { name: 'React.js', level: 'Expert', progress: 0, finalProgress: 90 },
        { name: 'Vue.js', level: 'Proficient', progress: 0, finalProgress: 75 },
        { name: 'HTML/CSS', level: 'Expert', progress: 0, finalProgress: 95 },
      ]
    },
    {
      category: "UI Frameworks & Tools",
      skills: [
        { name: 'Tailwind CSS', level: 'Proficient', progress: 0, finalProgress: 80 },
        { name: 'Material UI', level: 'Advanced', progress: 0, finalProgress: 85 },
      ]
    },
    {
      category: "Backend & Frameworks",
      skills: [
        { name: 'Next.js', level: 'Advanced', progress: 0, finalProgress: 85 },
        { name: 'Node.js', level: 'Proficient', progress: 0, finalProgress: 75 },
      ]
    },
    {
      category: "Development Tools",
      skills: [
        { name: 'Git', level: 'Advanced', progress: 0, finalProgress: 85 },
        { name: 'CI/CD', level: 'Proficient', progress: 0, finalProgress: 75 },
      ]
    }
  ];

  const [skills, setSkills] = useState(skillCategories.map(category => ({
    ...category,
    skills: category.skills.map(skill => ({ ...skill }))
  })));

  useEffect(() => {
    // Animate Flutter first with priority
    const flutterTimer = setTimeout(() => {
      setFlutterProgress(flutterSkill.finalProgress);
    }, 300);

    // Initial delay before starting other animations
    const initialDelay = 800;

    // Animate other skills with a staggered delay
    skills.forEach((category, categoryIndex) => {
      category.skills.forEach((skill, skillIndex) => {
        const timer = setTimeout(() => {
          setSkills(prevSkills => {
            const newSkills = [...prevSkills];
            newSkills[categoryIndex].skills[skillIndex].progress = skill.finalProgress;
            return newSkills;
          });
        }, initialDelay + (categoryIndex * 200) + (skillIndex * 100));

        return () => clearTimeout(timer);
      });
    });

    return () => clearTimeout(flutterTimer);
  }, []);

  const getColorForLevel = (level) => {
    switch (level) {
      case 'Expert': return '#4caf50';
      case 'Advanced': return '#2196f3';
      case 'Proficient': return '#ff9800';
      default: return '#9c27b0';
    }
  };

  return (
    <Container maxWidth="lg" sx={{ my: 8, py: 6 }} className='text-white bg-gradient-to-br from-black/90 to-black/70 p-6 sm:p-12 rounded-lg shadow-xl'>
      <Fade in={true} timeout={1000}>
        <div>
          <Typography
            variant="h3"
            fontWeight="bold"
            mb={6}
            className='text-center'
            sx={{
              position: 'relative',
              display: 'inline-block',
              left: '50%',
              transform: 'translateX(-50%)',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '10%',
                width: '80%',
                height: '4px',
                background: 'linear-gradient(to right, transparent, #fff, transparent)',
              }
            }}
          >
            Technical Expertise
          </Typography>

          {/* Flutter Showcase Section */}
          <Box
            mb={8}
            p={4}
            sx={{
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(84,197,248,0.15) 0%, rgba(1,117,194,0.05) 100%)',
              border: '1px solid rgba(84,197,248,0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(84,197,248,0.2) 0%, rgba(84,197,248,0) 70%)',
                zIndex: 0
              }}
            />

            <Box
              display="flex"
              flexDirection={{ xs: 'column', md: 'row' }}
              justifyContent="space-between"
              alignItems={{ xs: 'flex-start', md: 'center' }}
              position="relative"
              zIndex="1"
            >
              <Box flex="1" mr={{ xs: 0, md: 4 }} mb={{ xs: 3, md: 0 }}>
                <Typography
                  variant="h4"
                  fontWeight="800"
                  sx={{
                    color: '#54C5F8',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  Flutter
                  <Box
                    component="span"
                    sx={{
                      ml: 2,
                      fontSize: '0.55em',
                      background: 'rgba(84,197,248,0.2)',
                      p: '4px 12px',
                      borderRadius: '20px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}
                  >
                    Primary Specialty
                  </Box>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mt: 2,
                    color: 'rgba(255,255,255,0.8)',
                    maxWidth: '600px',
                    lineHeight: 1.6
                  }}
                >
                  {flutterSkill.description} with extensive experience in creating performant,
                  beautiful applications for both iOS and Android platforms. Specialized in complex
                  animations, custom widgets, and state management solutions.
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  background: 'rgba(0,0,0,0.2)',
                  borderRadius: '50%',
                  width: '90px',
                  height: '90px',
                  justifyContent: 'center',
                  position: 'relative'
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{ color: '#54C5F8' }}
                >
                  {flutterProgress}%
                </Typography>
              </Box>
            </Box>

            <Box mt={4} position="relative">
              <LinearProgress
                variant="determinate"
                value={flutterProgress}
                sx={{
                  height: '1rem',
                  borderRadius: '0.5rem',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  '& .MuiLinearProgress-bar': {
                    background: 'linear-gradient(90deg, #54C5F8 0%, #0175C2 100%)',
                    transition: 'transform 2s ease-out'
                  }
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: '10px',
                  transform: 'translateY(-50%)',
                  background: 'rgba(0,0,0,0.5)',
                  borderRadius: '12px',
                  padding: '2px 10px',
                  zIndex: 2
                }}
              >
                <Typography variant="body2" fontWeight="600" sx={{ color: '#fff' }}>
                  Expert Level
                </Typography>
              </Box>
            </Box>
          </Box>

          <Typography
            variant="h5"
            fontWeight="600"
            mt={6}
            mb={4}
            sx={{
              textAlign: 'center',
              color: 'rgba(255,255,255,0.9)'
            }}
          >
            Other Technical Skills
          </Typography>

          {/* Other Skills Categories */}
          {skills.map((category, categoryIndex) => (
            <Box key={categoryIndex} mb={6}>
              <Typography
                variant="h5"
                fontWeight="600"
                mb={3}
                className='text-gray-200'
                sx={{
                  borderLeft: '4px solid #3f51b5',
                  pl: 2,
                }}
              >
                {category.category}
              </Typography>

              <Grid container spacing={4}>
                {category.skills.map((skill, skillIndex) => (
                  <Grid item key={skillIndex} xs={12} sm={6}>
                    <Box
                      mb={1}
                      display="flex"
                      justifyContent="space-between"
                    >
                      <Typography
                        variant="h6"
                        fontWeight="500"
                      >
                        {skill.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: getColorForLevel(skill.level),
                          fontWeight: 600
                        }}
                      >
                        {skill.level}
                      </Typography>
                    </Box>
                    <Box position="relative">
                      <LinearProgress
                        variant="determinate"
                        value={skill.progress}
                        sx={{
                          height: '0.6rem',
                          borderRadius: '0.3rem',
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          '& .MuiLinearProgress-bar': {
                            background: `linear-gradient(90deg, ${getColorForLevel(skill.level)} 0%, #ffffff 100%)`,
                            transition: 'transform 1.5s ease-out'
                          }
                        }}
                      />
                      <Typography
                        variant="body2"
                        sx={{
                          position: 'absolute',
                          right: '0',
                          top: '-1.5rem',
                          color: 'rgba(255,255,255,0.8)',
                        }}
                      >
                        {skill.progress}%
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </div>
      </Fade>
    </Container>
  );
};

export default Skills;
