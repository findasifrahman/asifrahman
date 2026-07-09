import React from 'react';
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { ArrowOutward } from '@mui/icons-material';
import { motion } from 'framer-motion';
import ScrollReveal from '../shared/ScrollReveal';

const signatureProjects = [
  {
    name: 'Zynq SoC FPGA Board',
    category: 'Flagship FPGA + hardware design',
    url: 'https://github.com/findasifrahman/zynq_soc_board_v1',
    image: '/assets/img/products/advanced_pcb_zynq.png',
    imageFit: 'contain',
    accent: 'linear-gradient(135deg, rgba(96,165,250,0.22), rgba(110,231,216,0.1))',
    description:
      'A significant high-performance FPGA project centered on a multilayer Zynq SoC PCB, dense routing, high-speed interfaces, and production-grade hardware decisions.',
    stack: ['FPGA', 'Zynq', 'KiCad', 'High-speed PCB', 'Petalinux'],
    notes: [
      'One of my most significant engineering projects and a strong proof of advanced digital hardware capability.',
      'Required careful signal integrity thinking, multilayer stack-up planning, and disciplined board architecture.',
      'Shows I can handle deep engineering work, not only software delivery.',
    ],
  },
  {
    name: 'ChinaBuyBD Shopping',
    category: 'Cross-border ecommerce',
    url: 'https://www.chinabuybd.com/shopping',
    image: null,
    accent: 'linear-gradient(135deg, rgba(110,231,216,0.26), rgba(16,185,129,0.08))',
    description:
      'A China-product ecommerce platform built for discovery, ordering, and operational flow across a cross-border sourcing business.',
    stack: ['PostgreSQL', 'Vue', 'Node.js', 'Python', 'Ecommerce platform'],
    notes: [
      'Supports complex catalog and product browsing workflows.',
      'Combines a customer-facing storefront with operational logic for cross-border commerce.',
      'Represents full-stack delivery with real business constraints.',
    ],
  },
  {
    name: 'China Healthcare Center',
    category: 'Healthcare service platform',
    url: 'https://chinahealthcare.center/',
    image: null,
    accent: 'linear-gradient(135deg, rgba(245,158,11,0.22), rgba(251,113,133,0.08))',
    description:
      'A trust-first platform for Bangladeshi patients seeking hospitals, doctors, visa support, and treatment coordination in China.',
    stack: ['Service platform', 'Lead generation', 'Content architecture', 'Patient journey UX'],
    notes: [
      'Designed for a high-trust service context where clarity matters as much as visual design.',
      'Balances content, conversion, and support pathways for a medically sensitive audience.',
      'Highlights my ability to shape business-focused platforms, not just technical demos.',
    ],
  },
  {
    name: 'AutoSol GPS Platform',
    category: 'IoT + mobility software',
    url: 'https://www.intricatlab.com/',
    image: '/assets/img/products/autosol.jpg',
    imageFit: 'cover',
    accent: 'linear-gradient(135deg, rgba(96,165,250,0.22), rgba(59,130,246,0.08))',
    description:
      'A live vehicle and asset tracking ecosystem spanning hardware integration, mobile apps, backend services, and web reporting.',
    stack: ['Mobile apps', 'Node.js', 'Tracking infrastructure', 'Telemetry'],
    notes: [
      'Integrated hardware, location intelligence, reports, alerts, and control features.',
      'Built for day-to-day operational use rather than portfolio-only presentation.',
      'A strong example of product breadth across device, cloud, and user interfaces.',
    ],
  },
];

const buildSignals = [
  'Complex business logic',
  'Multi-system integration',
  'Advanced hardware and FPGA work',
  'Production deployment mindset',
];

const VisualPanel = ({ project }) => {
  if (!project.image) {
    return (
      <Box
        sx={{
          height: '100%',
          minHeight: { xs: 220, md: 320 },
          borderRadius: '24px',
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: `linear-gradient(180deg, rgba(7,17,31,0.3) 0%, rgba(7,17,31,0.72) 100%), ${project.accent}`,
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <Typography sx={{ color: '#dffcf8', fontWeight: 800, letterSpacing: '0.08em' }}>
          LIVE PROJECT
        </Typography>
        <Box>
          <Typography variant="h4" sx={{ mb: 1.2, maxWidth: '12rem' }}>
            {project.name}
          </Typography>
          <Typography sx={{ color: 'rgba(244,247,251,0.74)', lineHeight: 1.7 }}>
            Built for real users with production-minded architecture and business logic.
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        height: '100%',
        minHeight: { xs: 220, md: 320 },
        borderRadius: '24px',
        overflow: 'hidden',
        backgroundColor: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: project.imageFit === 'contain' ? 2 : 0,
      }}
    >
      <Box
        component="img"
        src={project.image}
        alt={project.name}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: project.imageFit || 'cover',
          display: 'block',
          borderRadius: project.imageFit === 'contain' ? '18px' : 0,
        }}
      />
    </Box>
  );
};

const SpecialProjectsSection = () => {
  return (
    <Box sx={{ py: 9, position: 'relative', overflow: 'hidden' }} id="projects">
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <Box sx={{ mb: 5 }}>
            <Typography sx={{ color: '#6ee7d8', fontWeight: 800, letterSpacing: '0.08em', mb: 1.5 }}>
              SIGNATURE BUILDS
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 1.5 }}>
              Stronger case studies, cleaner presentation
            </Typography>
            <Typography sx={{ color: 'rgba(244,247,251,0.72)', maxWidth: '52rem', lineHeight: 1.8, mb: 2.5 }}>
              I removed the awkward right-side structure and changed this into a cleaner editorial layout. Projects
              with weak visuals now use designed poster panels instead of forcing bad thumbnails, and your FPGA work
              stays prominent with a better hardware-style presentation.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              {buildSignals.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  sx={{
                    color: '#f4f7fb',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                />
              ))}
            </Stack>
          </Box>
        </ScrollReveal>

        <Stack spacing={3}>
          {signatureProjects.map((project, index) => (
            <ScrollReveal key={project.name}>
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }}>
                <Paper
                  sx={{
                    p: { xs: 2.2, md: 2.6 },
                    borderRadius: '30px',
                    background: 'linear-gradient(180deg, rgba(12,21,35,0.96) 0%, rgba(8,14,24,0.95) 100%)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 24px 70px rgba(0,0,0,0.24)',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <Box sx={{ position: 'absolute', inset: 0, background: project.accent, opacity: 0.85, pointerEvents: 'none' }} />
                  <Grid container spacing={3} alignItems="stretch" sx={{ position: 'relative', zIndex: 1 }}>
                    <Grid item xs={12} md={5}>
                      <VisualPanel project={project} />
                    </Grid>

                    <Grid item xs={12} md={7}>
                      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Chip
                          label={project.category}
                          sx={{
                            alignSelf: 'flex-start',
                            mb: 2,
                            color: '#f4f7fb',
                            backgroundColor: 'rgba(255,255,255,0.08)',
                            border: '1px solid rgba(255,255,255,0.12)',
                          }}
                        />
                        <Typography variant="h3" sx={{ fontSize: { xs: '1.85rem', md: '2.35rem' }, mb: 1.3 }}>
                          {project.name}
                        </Typography>
                        <Typography sx={{ color: 'rgba(244,247,251,0.78)', lineHeight: 1.85, mb: 2.2 }}>
                          {project.description}
                        </Typography>

                        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 2.5 }}>
                          {project.stack.map((item) => (
                            <Chip
                              key={item}
                              label={item}
                              sx={{
                                color: '#f4f7fb',
                                backgroundColor: 'rgba(7,17,31,0.34)',
                                border: '1px solid rgba(255,255,255,0.08)',
                              }}
                            />
                          ))}
                        </Stack>

                        <Stack spacing={1.1} sx={{ mb: 3 }}>
                          {project.notes.map((note) => (
                            <Typography key={note} sx={{ color: 'rgba(244,247,251,0.72)', lineHeight: 1.7 }}>
                              {note}
                            </Typography>
                          ))}
                        </Stack>

                        <Button
                          component={Link}
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          endIcon={<ArrowOutward />}
                          sx={{
                            alignSelf: 'flex-start',
                            color: '#04111f',
                            px: 2.4,
                            py: 1.1,
                            borderRadius: '999px',
                            backgroundColor: '#f4f7fb',
                            '&:hover': { backgroundColor: '#ffffff' },
                          }}
                        >
                          Visit Project
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>
            </ScrollReveal>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default SpecialProjectsSection;
