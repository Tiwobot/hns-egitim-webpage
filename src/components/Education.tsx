import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import SchoolIcon from '@mui/icons-material/School';
import TiltCard from './TiltCard';

const EducationSection = styled(Box)`
  padding: 100px 0;
  background: linear-gradient(135deg, #ffffff 0%, #f5f3ff 100%);
`;

const StyledPaper = styled(Paper)`
  padding: 32px;
  height: 100%;
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
  &:hover {
    transform: translateY(-5px);
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
`;

const IconWrapper = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.palette.primary.main};
`;

const Education = () => {
  const education = [
    {
      school: 'Yeditepe Üniversitesi',
      program: 'IBDP Matematik Öğretmenliği Programı',
      period: '2023 - 2025',
      description: 'Specialized training in International Baccalaureate Diploma Programme mathematics teaching methodology.'
    },
    {
      school: 'Yeditepe Üniversitesi',
      program: 'İlköğretim Matematik Öğretmenliği',
      period: '2020 - 2025',
      description: 'Comprehensive education in elementary mathematics teaching, including modern pedagogical methods and classroom management.'
    },
    {
      school: 'Yusuf Kalkavan Anadolu Lisesi',
      program: 'Lise Eğitimi',
      period: '2015 - 2019',
      description: 'Strong foundation in mathematics and sciences with excellent academic performance.'
    }
  ];

  return (
    <EducationSection id="education">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
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
            Education
          </Typography>

          <Grid container spacing={4}>
            {education.map((edu, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  style={{ height: '100%' }}
                >
                  <TiltCard>
                    <StyledPaper elevation={3}>
                      <IconWrapper>
                        <SchoolIcon fontSize="large" />
                        <Typography variant="h6" sx={{ ml: 2 }}>
                          {edu.school}
                        </Typography>
                      </IconWrapper>
                      <Typography variant="subtitle1" color="primary" gutterBottom>
                        {edu.program}
                      </Typography>
                      <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                        {edu.period}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {edu.description}
                      </Typography>
                    </StyledPaper>
                  </TiltCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </EducationSection>
  );
};

export default Education; 