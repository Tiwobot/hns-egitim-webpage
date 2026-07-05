import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Avatar, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import TiltCard from './TiltCard';

const ReferencesSection = styled(Box)`
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.06) 0%, rgba(14, 165, 233, 0.04) 100%);
    pointer-events: none;
  }
`;

const StyledCard = styled(Card)`
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.1);
  }
`;

const StyledAvatar = styled(Avatar)`
  width: 80px;
  height: 80px;
  margin: 0 auto 16px;
  background: ${({ theme }) => `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`};
  box-shadow: 0 8px 24px rgba(14, 165, 233, 0.3);
`;

const ContactInfo = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const References = () => {
  const theme = useTheme();

  const references = [
    {
      name: 'Prof. Dr. Hülya Kılıç',
      title: 'Yeditepe Üniversitesi Eğitim Fakültesi',
      email: 'hulya.kilic@yeditepe.edu.tr'
    },
    {
      name: 'Doç. Dr. Oğuzhan Doğan',
      title: 'Yeditepe Üniversitesi Eğitim Fakültesi',
      email: 'oguzhan.dogan@yeditepe.edu.tr'
    },
    {
      name: 'Kemal ŞENGÜL',
      title: 'İstek Acıbadem Schools - Deputy Principal',
      email: 'kemal.sengul@istek.k12.tr'
    }
  ];

  return (
    <ReferencesSection id="references">
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
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold'
            }}
          >
            References
          </Typography>

          <Grid container spacing={4}>
            {references.map((ref, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  style={{ height: '100%' }}
                >
                  <TiltCard>
                    <StyledCard elevation={0}>
                      <CardContent sx={{ textAlign: 'center', py: 4 }}>
                        <StyledAvatar>
                          <PersonIcon fontSize="large" />
                        </StyledAvatar>
                        <Typography variant="h6" gutterBottom>
                          {ref.name}
                        </Typography>
                        <ContactInfo>
                          <WorkIcon fontSize="small" sx={{ mr: 1 }} />
                          <Typography variant="body2">
                            {ref.title}
                          </Typography>
                        </ContactInfo>
                        <ContactInfo>
                          <EmailIcon fontSize="small" sx={{ mr: 1 }} />
                          <Typography variant="body2">
                            {ref.email}
                          </Typography>
                        </ContactInfo>
                      </CardContent>
                    </StyledCard>
                  </TiltCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </ReferencesSection>
  );
};

export default References;
