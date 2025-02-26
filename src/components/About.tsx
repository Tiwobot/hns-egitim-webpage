import React from 'react';
import { Box, Typography, Container, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LanguageIcon from '@mui/icons-material/Language';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const AboutSection = styled(Box)`
  padding: 100px 0;
  background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);
    pointer-events: none;
  }
`;

const StyledPaper = styled(Paper)`
  padding: 32px;
  height: 100%;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.1);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${({ theme }) => `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`};
  }
`;

const IconWrapper = styled(Box)`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  align-items: center;
  gap: 12px;
`;

const SkillList = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

const SkillChip = styled(Box)`
  padding: 6px 12px;
  border-radius: 20px;
  background: ${({ theme }) => `linear-gradient(135deg, ${theme.palette.primary.light}20, ${theme.palette.secondary.light}20)`};
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 0.9rem;
  font-weight: 500;
`;

const About = () => {
  const skills = {
    teaching: [
      'Student-Centered Learning',
      'Differentiated Instruction',
      'Project-Based Learning',
      'Formative Assessment',
      'Classroom Management',
      'Digital Learning Tools'
    ],
    technical: [
      'IB Mathematics',
      'Elementary Mathematics',
      'Geometry',
      'Algebra',
      'Statistics',
      'Problem Solving'
    ],
    languages: [
      'Turkish (Native)',
      'English (Professional)'
    ]
  };

  return (
    <AboutSection id="about">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ 
              mb: 6,
              background: theme => `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold'
            }}
          >
            About Me
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <StyledPaper elevation={3}>
                <IconWrapper>
                  <PersonIcon fontSize="large" />
                  <Typography variant="h5">Professional Profile</Typography>
                </IconWrapper>
                <Typography variant="body1" paragraph>
                  As a passionate mathematics educator, I chose Yeditepe University's Mathematics Teaching program 
                  with great enthusiasm. Throughout my academic journey, I've developed a deep understanding of 
                  both mathematical concepts and effective teaching methodologies.
                </Typography>
                <Typography variant="body1" paragraph>
                  My teaching philosophy centers on creating an inclusive and engaging learning environment where 
                  students feel empowered to explore mathematical concepts through practical applications and 
                  creative problem-solving approaches.
                </Typography>
                <Typography variant="body1">
                  I believe in nurturing not just academic excellence, but also developing critical thinking skills, 
                  self-confidence, and a genuine appreciation for mathematics in my students.
                </Typography>
              </StyledPaper>
            </Grid>

            <Grid item xs={12} md={6}>
              <StyledPaper elevation={3}>
                <IconWrapper>
                  <AutoStoriesIcon fontSize="large" />
                  <Typography variant="h5">Teaching Approach</Typography>
                </IconWrapper>
                <Typography variant="body1" paragraph>
                  My teaching methodology combines traditional mathematical rigor with modern, innovative approaches:
                </Typography>
                <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
                  <li>Interactive and engaging lesson delivery</li>
                  <li>Integration of technology in mathematics education</li>
                  <li>Real-world application of mathematical concepts</li>
                  <li>Individualized attention and support</li>
                  <li>Regular progress monitoring and feedback</li>
                  <li>Development of problem-solving strategies</li>
                </Typography>
              </StyledPaper>
            </Grid>

            <Grid item xs={12} md={6}>
              <StyledPaper elevation={3}>
                <IconWrapper>
                  <PsychologyIcon fontSize="large" />
                  <Typography variant="h5">Teaching Skills</Typography>
                </IconWrapper>
                <Typography variant="body1" paragraph>
                  Core competencies in educational practices:
                </Typography>
                <SkillList>
                  {skills.teaching.map((skill) => (
                    <SkillChip key={skill}>{skill}</SkillChip>
                  ))}
                </SkillList>
              </StyledPaper>
            </Grid>

            <Grid item xs={12} md={6}>
              <StyledPaper elevation={3}>
                <IconWrapper>
                  <EmojiObjectsIcon fontSize="large" />
                  <Typography variant="h5">Subject Expertise</Typography>
                </IconWrapper>
                <Typography variant="body1" paragraph>
                  Specialized mathematical knowledge areas:
                </Typography>
                <SkillList>
                  {skills.technical.map((skill) => (
                    <SkillChip key={skill}>{skill}</SkillChip>
                  ))}
                </SkillList>
              </StyledPaper>
            </Grid>

            <Grid item xs={12}>
              <StyledPaper elevation={3}>
                <IconWrapper>
                  <LanguageIcon fontSize="large" />
                  <Typography variant="h5">Languages</Typography>
                </IconWrapper>
                <Typography variant="body1" paragraph>
                  Communication capabilities:
                </Typography>
                <SkillList>
                  {skills.languages.map((language) => (
                    <SkillChip key={language}>{language}</SkillChip>
                  ))}
                </SkillList>
              </StyledPaper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </AboutSection>
  );
};

export default About; 