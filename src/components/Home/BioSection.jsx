import React from 'react';
import { Box, Chip, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ScrollReveal from '../shared/ScrollReveal';

const principles = [
  'I am comfortable leading projects that cross hardware, backend, frontend, infrastructure, and AI.',
  'I build for difficult conditions: limited resources, tight timelines, operational complexity, and reliability demands.',
  'I care about working systems, clear ownership, and shipping value instead of polished demos with weak foundations.',
];

const focusAreas = [
  'Full-stack product engineering',
  'Postgres, Node.js, Python, Vue, React',
  'Embedded and RF product development',
  'AI agents, automation, retrieval systems',
  'Cloud deployment, CI/CD, and operations',
  'Technical leadership for complex builds',
];

const BioSection = () => {
  return (
    <Box
      sx={{
        py: 8,
        position: 'relative',
        overflow: 'hidden',
      }}
      id="about"
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <ScrollReveal>
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 2 }}>
                  About Me
                </Typography>
                <Typography sx={{ color: 'rgba(244,247,251,0.78)', lineHeight: 1.9, mb: 2.5, fontSize: '1.02rem' }}>
                  I am a multidisciplinary engineer who builds products across software, infrastructure,
                  embedded systems, and AI. My career has moved through telecom, training, automation,
                  healthcare services, commerce, and hardware-heavy environments where success depends on
                  execution as much as architecture.
                </Typography>
                <Typography sx={{ color: 'rgba(244,247,251,0.78)', lineHeight: 1.9, mb: 3 }}>
                  That range lets me contribute where many projects stall: the handoff points between product,
                  system design, implementation, deployment, and operations. I do not just write features. I
                  help turn ambiguous requirements into dependable systems that teams can run and grow.
                </Typography>

                <Stack spacing={1.5}>
                  {principles.map((item) => (
                    <Paper
                      key={item}
                      sx={{
                        p: 2.2,
                        borderRadius: '18px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <Typography sx={{ color: 'rgba(244,247,251,0.82)', lineHeight: 1.7 }}>{item}</Typography>
                    </Paper>
                  ))}
                </Stack>
              </motion.div>
            </ScrollReveal>
          </Grid>

          <Grid item xs={12} md={5}>
            <ScrollReveal delay={0.15}>
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: '28px',
                  background: 'linear-gradient(180deg, rgba(14,25,40,0.94) 0%, rgba(7,13,24,0.92) 100%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 24px 70px rgba(0,0,0,0.28)',
                }}
              >
                <Typography sx={{ color: '#f59e0b', fontWeight: 800, letterSpacing: '0.08em', mb: 1.5 }}>
                  WORKING STYLE
                </Typography>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  Built for hard problems.
                </Typography>
                <Typography sx={{ color: 'rgba(244,247,251,0.72)', lineHeight: 1.75, mb: 3 }}>
                  I work best on projects that need technical depth, broad ownership, and the ability to make
                  multiple systems work together under real constraints.
                </Typography>

                <Stack direction="row" spacing={1.1} useFlexGap flexWrap="wrap">
                  {focusAreas.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      sx={{
                        color: '#f4f7fb',
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    />
                  ))}
                </Stack>

                <Box
                  sx={{
                    mt: 3.5,
                    p: 2.5,
                    borderRadius: '22px',
                    background:
                      'linear-gradient(135deg, rgba(110,231,216,0.12) 0%, rgba(245,158,11,0.12) 100%)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <Typography sx={{ color: '#dffcf8', fontWeight: 800, mb: 1 }}>What I bring to a team</Typography>
                  <Typography sx={{ color: 'rgba(244,247,251,0.76)', lineHeight: 1.7 }}>
                    Strong systems thinking, practical execution, and the willingness to stay with the problem
                    until it is actually working in production.
                  </Typography>
                </Box>
              </Paper>
            </ScrollReveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BioSection;
