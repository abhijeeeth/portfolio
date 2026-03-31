// components/Skills.js
'use client';
import { Box, Chip, Container, Fade, Grid, LinearProgress, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { PageWrapper } from '../Components/PageWrap';

const FLUTTER_SKILL = {
  name: 'Flutter',
  level: 'Expert',
  progress: 0,
  finalProgress: 98,
  featured: true,
  description: 'Cross-platform app development with behavior-aware UI systems'
};

const SKILL_CATEGORIES = [
  {
    category: "Human Psychology & Influence",
    skills: [
      { name: 'Behavioral Psychology', level: 'Master', progress: 0, finalProgress: 96 },
      { name: 'Persuasion Design', level: 'Master', progress: 0, finalProgress: 94 },
      { name: 'Decision Framing', level: 'Expert', progress: 0, finalProgress: 92 },
      { name: 'Narrative Strategy', level: 'Expert', progress: 0, finalProgress: 93 },
    ]
  },
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

const Skills = () => {
  const [flutterProgress, setFlutterProgress] = useState(0);

  const [skills, setSkills] = useState(SKILL_CATEGORIES.map(category => ({
    ...category,
    skills: category.skills.map(skill => ({ ...skill }))
  })));

  useEffect(() => {
    const timers = [];

    // Animate Flutter first with priority
    const flutterTimer = setTimeout(() => {
      setFlutterProgress(FLUTTER_SKILL.finalProgress);
    }, 300);
    timers.push(flutterTimer);

    // Initial delay before starting other animations
    const initialDelay = 800;

    // Animate other skills with a staggered delay
    SKILL_CATEGORIES.forEach((category, categoryIndex) => {
      category.skills.forEach((skill, skillIndex) => {
        const timer = setTimeout(() => {
          setSkills(prevSkills => {
            const newSkills = [...prevSkills];
            newSkills[categoryIndex].skills[skillIndex].progress = skill.finalProgress;
            return newSkills;
          });
        }, initialDelay + (categoryIndex * 200) + (skillIndex * 100));
        timers.push(timer);
      });
    });

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  const getColorForLevel = (level) => {
    switch (level) {
      case 'Master': return '#ff6f91';
      case 'Expert': return '#5ce1e6';
      case 'Advanced': return '#9f8bff';
      case 'Proficient': return '#ffad66';
      default: return '#80cbc4';
    }
  };

  const getCategoryGlow = (index) => {
    const glows = [
      'rgba(92,225,230,0.22)',
      'rgba(159,139,255,0.22)',
      'rgba(255,173,102,0.22)',
      'rgba(144,202,249,0.22)',
      'rgba(129,199,132,0.22)'
    ];
    return glows[index % glows.length];
  };

  return (
    <PageWrapper>
      <Box
        sx={{
          minHeight: '100vh',
          py: { xs: 8, md: 10 },
          background: 'radial-gradient(circle at 20% 20%, rgba(92,225,230,0.18), transparent 35%), radial-gradient(circle at 88% 18%, rgba(159,139,255,0.2), transparent 32%), radial-gradient(circle at 70% 80%, rgba(255,173,102,0.16), transparent 30%), linear-gradient(145deg, #0a0f1a 0%, #131726 45%, #191226 100%)',
          color: '#edf2ff',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Fade in={true} timeout={950}>
            <Box>
              <Stack spacing={2} alignItems="center" textAlign="center" mb={7}>
                <Chip
                  label="Skill Constellation"
                  sx={{
                    color: '#d0fff9',
                    border: '1px solid rgba(92,225,230,0.45)',
                    background: 'rgba(14,34,48,0.62)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    fontSize: '0.72rem',
                    px: 1
                  }}
                />
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: '"Bebas Neue", "M PLUS 1p", sans-serif',
                    letterSpacing: '0.06em',
                    lineHeight: 0.95,
                    fontSize: { xs: '3rem', md: '4.8rem' },
                    textShadow: '0 12px 35px rgba(0,0,0,0.45)'
                  }}
                >
                  Build, Decode,
                  <Box component="span" sx={{ color: '#8be8ff', ml: 1.2 }}>
                    Human Minds
                  </Box>
                </Typography>
                <Typography sx={{ maxWidth: 760, color: 'rgba(228,236,255,0.78)', lineHeight: 1.7 }}>
                  The author is also a developer and a master of human psychology. My work combines
                  product engineering with behavioral insight to build apps that are technically strong,
                  emotionally intelligent, and designed around real human decisions.
                </Typography>
              </Stack>

              <Box
                sx={{
                  mb: 9,
                  p: { xs: 3, md: 4.5 },
                  borderRadius: '26px',
                  border: '1px solid rgba(92,225,230,0.35)',
                  backdropFilter: 'blur(8px)',
                  background: 'linear-gradient(130deg, rgba(13,28,44,0.88), rgba(24,17,38,0.86))',
                  boxShadow: '0 24px 60px -34px rgba(0,0,0,0.8)'
                }}
              >
                <Grid container spacing={4} alignItems="center">
                  <Grid item xs={12} md={8}>
                    <Typography
                      variant="h4"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.4,
                        fontWeight: 700,
                        letterSpacing: '0.02em'
                      }}
                    >
                      Flutter
                      <Chip
                        label="Primary Orbit"
                        size="small"
                        sx={{
                          color: '#d1fbff',
                          border: '1px solid rgba(92,225,230,0.5)',
                          background: 'rgba(92,225,230,0.13)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.09em'
                        }}
                      />
                    </Typography>
                    <Typography mt={2} sx={{ color: 'rgba(233,241,255,0.78)', lineHeight: 1.75 }}>
                      {FLUTTER_SKILL.description}. I design smooth experiences with custom animation
                      systems, scalable state patterns, and psychological UX patterns that improve flow,
                      clarity, and user trust in production apps.
                    </Typography>

                    <Box mt={4}>
                      <Typography sx={{ color: '#9deeff', mb: 1.2, fontSize: '0.82rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                        Performance Signal
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={flutterProgress}
                        sx={{
                          height: '0.95rem',
                          borderRadius: '999px',
                          backgroundColor: 'rgba(255,255,255,0.12)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: '999px',
                            background: 'linear-gradient(92deg, #5ce1e6 0%, #6fbcff 52%, #b59bff 100%)',
                            transition: 'transform 1.8s ease-out'
                          }
                        }}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Box display="flex" justifyContent="center">
                      <Box
                        sx={{
                          width: 170,
                          height: 170,
                          borderRadius: '50%',
                          p: '10px',
                          background: `conic-gradient(#5ce1e6 ${flutterProgress * 3.6}deg, rgba(255,255,255,0.12) 0deg)`,
                          boxShadow: '0 0 34px rgba(92,225,230,0.28)'
                        }}
                      >
                        <Box
                          sx={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            background: 'linear-gradient(155deg, #0f1728 0%, #13182a 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            border: '1px solid rgba(255,255,255,0.11)'
                          }}
                        >
                          <Typography variant="h3" fontWeight={800} sx={{ color: '#93f4ff', lineHeight: 1 }}>
                            {flutterProgress}%
                          </Typography>
                          <Typography sx={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(220,240,255,0.7)' }}>
                            Orbit Sync
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              <Grid container spacing={3.2}>
                {skills.map((category, categoryIndex) => (
                  <Grid item xs={12} md={6} key={category.category}>
                    <Box
                      sx={{
                        height: '100%',
                        p: 3,
                        borderRadius: '22px',
                        border: '1px solid rgba(255,255,255,0.13)',
                        background: 'linear-gradient(150deg, rgba(12,19,32,0.9), rgba(18,18,30,0.84))',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          right: -28,
                          top: -18,
                          width: 120,
                          height: 120,
                          borderRadius: '50%',
                          background: `radial-gradient(circle, ${getCategoryGlow(categoryIndex)} 0%, rgba(255,255,255,0) 70%)`
                        }}
                      />

                      <Typography
                        variant="h5"
                        sx={{
                          mb: 3,
                          fontWeight: 700,
                          fontSize: '1.2rem',
                          position: 'relative',
                          pr: 4
                        }}
                      >
                        {category.category}
                      </Typography>

                      <Stack spacing={2.25}>
                        {category.skills.map((skill) => (
                          <Box key={skill.name}>
                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                              <Typography sx={{ fontWeight: 600, color: '#e8eeff' }}>{skill.name}</Typography>
                              <Chip
                                label={skill.level}
                                size="small"
                                sx={{
                                  color: '#ffffff',
                                  background: getColorForLevel(skill.level),
                                  fontWeight: 700,
                                  letterSpacing: '0.02em'
                                }}
                              />
                            </Box>

                            <Box sx={{ position: 'relative' }}>
                              <LinearProgress
                                variant="determinate"
                                value={skill.progress}
                                sx={{
                                  height: '0.78rem',
                                  borderRadius: '999px',
                                  backgroundColor: 'rgba(255,255,255,0.1)',
                                  '& .MuiLinearProgress-bar': {
                                    borderRadius: '999px',
                                    background: `linear-gradient(90deg, ${getColorForLevel(skill.level)} 0%, #f6fbff 100%)`,
                                    transition: 'transform 1.45s ease-out'
                                  }
                                }}
                              />
                              <Typography
                                sx={{
                                  position: 'absolute',
                                  right: 8,
                                  top: '50%',
                                  transform: 'translateY(-50%)',
                                  fontWeight: 700,
                                  fontSize: '0.73rem',
                                  color: '#0f1625'
                                }}
                              >
                                {skill.progress}%
                              </Typography>
                            </Box>
                          </Box>
                        ))}
                      </Stack>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Fade>
        </Container>
      </Box>
    </PageWrapper>
  );
};

export default Skills;
