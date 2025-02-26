import React from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion, useScroll, useSpring} from 'framer-motion';
import styled from 'styled-components';
import WorkIcon from '@mui/icons-material/Work';

const ExperienceSection = styled(Box)`
  padding: 100px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%);
    pointer-events: none;
  }
`;

const StyledTimelineItem = styled(TimelineItem)`
  &:before {
    display: none;
  }
  margin-bottom: 48px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledTimelineContent = styled(motion(TimelineContent))`
  padding: 32px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  margin: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.12);
  }
`;

const StyledTimelineDot = styled(TimelineDot)`
  padding: 12px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  box-shadow: 0 0 20px ${({ theme }) => theme.palette.primary.main}40;
`;

const StyledConnector = styled(TimelineConnector)`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.palette.primary.main},
    ${({ theme }) => theme.palette.secondary.main}
  );
  width: 3px;
`;

const FloatingIcon = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Experience = () => {
  const theme = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const experiences = [
    {
      title: 'İstek Atanur Oğuz Schools',
      position: 'Internship',
      period: 'February 2025 - Today',
      description: 'Currently completing internship program, gaining hands-on experience in classroom management and teaching methodologies.'
    },
    {
      title: 'İstek Acıbadem Schools',
      position: 'Internship',
      period: 'September 2024 - January 2025',
      description: 'Completed internship focusing on IB mathematics curriculum and teaching strategies.'
    },
    {
      title: 'Odil Eğitim Kurumu',
      position: 'Part-time Teacher',
      period: 'January 2023 - January 2024',
      description: 'Worked as a part-time mathematics teacher, developing and implementing engaging lesson plans.'
    },
    {
      title: 'Private Mathematics Tutoring',
      position: 'Private Tutor',
      period: 'September 2022 - Present',
      description: 'Providing one-on-one mathematics tutoring to multiple students, helping them improve their understanding and academic performance. Successfully helped students achieve significant improvements in their grades and confidence in mathematics.'
    }
  ];

  return (
    <ExperienceSection id="experience">
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: theme.palette.primary.main,
          transformOrigin: '0%',
          scaleX,
          zIndex: 1000
        }}
      />
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
              mb: 8,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold'
            }}
          >
            Professional Experience
          </Typography>

          <Timeline position="alternate">
            {experiences.map((exp, index) => (
              <StyledTimelineItem key={index}>
                <TimelineSeparator>
                  <StyledTimelineDot>
                    <FloatingIcon
                      animate={{
                        y: [0, -4, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                    >
                      <WorkIcon fontSize="large" />
                    </FloatingIcon>
                  </StyledTimelineDot>
                  {index !== experiences.length - 1 && <StyledConnector />}
                </TimelineSeparator>
                <StyledTimelineContent
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Typography 
                      variant="h6" 
                      component="h3"
                      sx={{
                        fontWeight: 'bold',
                        color: theme.palette.primary.main
                      }}
                    >
                      {exp.title}
                    </Typography>
                    <Typography 
                      variant="subtitle1" 
                      sx={{
                        color: theme.palette.secondary.main,
                        fontWeight: 500
                      }}
                    >
                      {exp.position}
                    </Typography>
                    <Typography 
                      variant="subtitle2" 
                      sx={{
                        color: 'text.secondary',
                        mb: 2
                      }}
                    >
                      {exp.period}
                    </Typography>
                    <Typography 
                      variant="body1"
                      sx={{
                        lineHeight: 1.7,
                        color: 'text.primary'
                      }}
                    >
                      {exp.description}
                    </Typography>
                  </motion.div>
                </StyledTimelineContent>
              </StyledTimelineItem>
            ))}
          </Timeline>
        </motion.div>
      </Container>
    </ExperienceSection>
  );
};

export default Experience; 