import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';

const ReferencesSection = styled(Box)`
  padding: 100px 0;
  background-color: #f5f6fa;
`;

const StyledCard = styled(Card)`
  height: 100%;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const StyledAvatar = styled(Avatar)`
  width: 80px;
  height: 80px;
  margin: 0 auto 16px;
  background-color: ${props => props.theme.palette.primary.main};
`;

const ContactInfo = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 8px;
  color: ${props => props.theme.palette.text.secondary};
`;

const References = () => {
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            References
          </Typography>

          <Grid container spacing={4}>
            {references.map((ref, index) => (
              <Grid item xs={12} md={4} key={index}>
                <StyledCard elevation={3}>
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
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </ReferencesSection>
  );
};

export default References; 