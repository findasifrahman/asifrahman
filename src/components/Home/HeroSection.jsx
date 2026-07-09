import React, { useMemo, useState } from 'react';
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  ArrowOutward,
  Code,
  GitHub,
  Hardware,
  LinkedIn,
  Science,
  YouTube,
} from '@mui/icons-material';
import ScrollReveal from '../shared/ScrollReveal';
import LazyImage from '../shared/LazyImage';
import ExpertiseModal from './ExpertiseModal';

const skillLogos = [
  { name: 'Altium', logo: '/assets/img/skills/altium.png', url: 'https://www.altium.com/', category: 'Hardware', description: 'Professional PCB design workflows' },
  { name: 'KiCad', logo: '/assets/img/skills/kicad.png', url: 'https://www.kicad.org/', category: 'Hardware', description: 'Open source multilayer board design' },
  { name: 'Python', logo: '/assets/img/skills/python.png', url: 'https://www.python.org/', category: 'Programming', description: 'Backends, automation, AI tooling' },
  { name: 'STM32', logo: '/assets/img/skills/stm32.png', url: 'https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html', category: 'Hardware', description: 'Embedded firmware and control systems' },
  { name: 'ESP32', logo: '/assets/img/skills/esp32.png', url: 'https://www.espressif.com/en/products/socs/esp32', category: 'Hardware', description: 'IoT and smart device prototyping' },
  { name: 'Node.js', logo: '/assets/img/skills/nodejs.png', url: 'https://nodejs.org/', category: 'Programming', description: 'APIs, realtime services, integrations' },
  { name: 'React', logo: '/assets/img/skills/react.png', url: 'https://reactjs.org/', category: 'Programming', description: 'Product frontends and dashboards' },
  { name: 'Angular', logo: '/assets/img/skills/angular.png', url: 'https://angular.io/', category: 'Programming', description: 'Large application architecture' },
  { name: 'MongoDB', logo: '/assets/img/skills/mongodb.png', url: 'https://www.mongodb.com/', category: 'Database', description: 'Flexible application data models' },
  { name: 'PostgreSQL', logo: '/assets/img/skills/postgresql.png', url: 'https://www.postgresql.org/', category: 'Database', description: 'Relational systems at production scale' },
  { name: 'Firebase', logo: '/assets/img/skills/firebase.png', url: 'https://firebase.google.com/', category: 'Cloud', description: 'Fast product launches and realtime data' },
  { name: 'Azure', logo: '/assets/img/skills/azure.png', url: 'https://azure.microsoft.com/', category: 'Cloud', description: 'Cloud-native services and automation' },
  { name: 'AWS', logo: '/assets/img/skills/aws.png', url: 'https://aws.amazon.com/', category: 'Cloud', description: 'Hosting, scaling, and infrastructure' },
  { name: 'Docker', logo: '/assets/img/skills/docker.png', url: 'https://www.docker.com/', category: 'DevOps', description: 'Portable environments and deployment' },
  { name: 'CI/CD', logo: '/assets/img/skills/cicd.png', url: 'https://github.com/features/actions', category: 'DevOps', description: 'Reliable release pipelines' },
  { name: 'DevOps', logo: '/assets/img/skills/devops.png', url: 'https://www.atlassian.com/devops', category: 'DevOps', description: 'Shipping and operating real systems' },
];

const categories = ['All', 'Hardware', 'Programming', 'Database', 'Cloud', 'DevOps'];

const expertiseAreas = [
  {
    icon: <Code />,
    title: 'Software Platforms',
    description: 'Operational apps, commerce systems, internal tools, and scalable APIs built for real users.',
    projects: [
      {
        title: 'ChinaBuyBD Shopping Platform',
        image: '/assets/img/products/customProduct.jpg',
        redirectUrl: 'https://www.chinabuybd.com/shopping',
        skills: 'PostgreSQL · Vue · Node.js · Python · Ecommerce architecture',
        details: 'A cross-border ecommerce experience for sourcing products from China with a custom storefront, catalog workflows, and operations tooling.',
      },
      {
        title: 'China Healthcare Center',
        image: '/assets/img/products/saasERP.png',
        redirectUrl: 'https://chinahealthcare.center/',
        skills: 'Healthcare service platform · Full-stack architecture · Content and lead systems',
        details: 'A trust-first healthcare platform connecting Bangladeshi patients with hospitals, doctors, visa support, and treatment coordination in China.',
      },
      {
        title: 'eSIM Service Platform',
        image: '/assets/img/products/esim1.png',
        redirectUrl: 'https://www.globlinksolution.com/',
        skills: 'Node.js · React · eSIM APIs · Payments · IoT',
        details: 'A full commerce and provisioning flow for selling and managing eSIM products through provider integrations.',
      },
    ],
  },
  {
    icon: <Hardware />,
    title: 'Embedded + RF Systems',
    description: 'Boards, firmware, communications, and field hardware where reliability matters as much as code quality.',
    projects: [
      {
        title: 'Tactical Messaging Radio',
        image: '/assets/img/products/uhf_radio_main.png',
        redirectUrl: 'https://www.linkedin.com/posts/asifrahman10018_bijoy-50-tactical-messaging-system-radio-activity-7178334044256972801-5Gb3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB6eMAMBE5aHfHbmB3UlObJsBeRC28YI9M0',
        skills: 'RF · STM32 · Raspberry Pi · Mesh communication · PCB design',
      },
      {
        title: 'Advanced PCB Design',
        image: '/assets/img/products/advanced_pcb_zynq.png',
        redirectUrl: 'https://github.com/findasifrahman/zynq_soc_board_v1',
        skills: 'FPGA · Zynq · KiCad · High-speed routing',
      },
      {
        title: 'IoT Device Line',
        image: '/assets/img/products/wemey-1.png',
        redirectUrl: '#',
        skills: 'ESP32 · Node-RED · Hardware productization',
      },
    ],
  },
  {
    icon: <Science />,
    title: 'AI Delivery Systems',
    description: 'LLM agents, retrieval pipelines, and automation layered into practical business workflows.',
    projects: [
      {
        title: 'LangChain RAG Chat',
        image: '/assets/img/products/langchaint-rag.png',
        redirectUrl: 'https://github.com/findasifrahman/langchain',
        skills: 'LangChain · RAG · Firestore · Realtime chat',
        details: 'Conversational retrieval over electronics knowledge with persistent context and live product utility.',
      },
      {
        title: 'LLM Scraper',
        image: '/assets/img/products/llm-scraper.png',
        redirectUrl: 'https://github.com/findasifrahman/llm-scraper',
        skills: 'OpenAI · Firecrawl · Agent monitoring · Python',
        details: 'A practical scraping agent for extracting structured information from difficult pages with model-driven reasoning.',
      },
    ],
  },
];

const highlightProjects = [
  {
    label: 'Cross-Border Commerce',
    title: 'ChinaBuyBD',
    description: 'Custom ecommerce for sourcing China products with storefront, data workflows, and operational logic across multiple services.',
    link: 'https://www.chinabuybd.com/shopping',
  },
  {
    label: 'Healthcare Platform',
    title: 'China Healthcare Center',
    description: 'A service platform helping Bangladeshi patients access hospitals, doctors, visa support, and treatment coordination in China.',
    link: 'https://chinahealthcare.center/',
  },
];

const trustStats = [
  { value: '10+', label: 'Years building software and hardware' },
  { value: '150+', label: 'Projects delivered across domains' },
  { value: '3', label: 'Core strengths: product, AI, embedded systems' },
];

const capabilityPills = [
  'Complex system architecture',
  'Production full-stack delivery',
  'Embedded + RF engineering',
  'AI agents and automation',
  'Cloud deployment and operations',
];

const socialLinks = [
  { icon: <GitHub />, url: 'https://github.com/findasifrahman', label: 'GitHub' },
  { icon: <LinkedIn />, url: 'https://bd.linkedin.com/in/AsifRahman18', label: 'LinkedIn' },
  { icon: <YouTube />, url: 'https://www.youtube.com/channel/UCztj8CCuOJ0xuyIL5wzmbsw', label: 'YouTube' },
];

const HeroSection = () => {
  const [selectedExpertise, setSelectedExpertise] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = useMemo(
    () => skillLogos.filter((skill) => selectedCategory === 'All' || skill.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <Box
      sx={{
        minHeight: '100vh',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 10, md: 12 },
        pb: 8,
      }}
      id="home"
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 15% 20%, rgba(110,231,216,0.18), transparent 24%), radial-gradient(circle at 85% 12%, rgba(245,158,11,0.16), transparent 20%), radial-gradient(circle at 50% 100%, rgba(251,113,133,0.12), transparent 26%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={7}>
            <ScrollReveal>
              <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <Chip
                  label="Software engineer building complex systems end-to-end"
                  sx={{
                    mb: 3,
                    color: '#dffcf8',
                    backgroundColor: 'rgba(110,231,216,0.12)',
                    border: '1px solid rgba(110,231,216,0.28)',
                  }}
                />

                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '3rem', sm: '4rem', md: '5.4rem' },
                    lineHeight: 0.95,
                    letterSpacing: '-0.05em',
                    mb: 2.5,
                  }}
                >
                  MD ASIFUR
                  <br />
                  <Box
                    component="span"
                    sx={{
                      background: 'linear-gradient(120deg, #f4f7fb 0%, #6ee7d8 48%, #f59e0b 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    RAHMAN
                  </Box>
                </Typography>

                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: '1.15rem', md: '1.45rem' },
                    lineHeight: 1.55,
                    color: 'rgba(244,247,251,0.78)',
                    maxWidth: '44rem',
                    mb: 4,
                  }}
                >
                  I design and ship serious products across web platforms, AI workflows, embedded hardware,
                  and RF systems. When a project is technically messy, multi-layered, and needs ownership from
                  concept to production, that is where I do my best work.
                </Typography>

                <Stack direction="row" spacing={1.2} useFlexGap flexWrap="wrap" sx={{ mb: 4 }}>
                  {capabilityPills.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      sx={{
                        color: '#f4f7fb',
                        backgroundColor: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '999px',
                      }}
                    />
                  ))}
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 5 }}>
                  <Button
                    href="#projects"
                    variant="contained"
                    endIcon={<ArrowOutward />}
                    sx={{
                      px: 3,
                      py: 1.4,
                      background: 'linear-gradient(135deg, #6ee7d8 0%, #14b8a6 100%)',
                      color: '#04111f',
                      boxShadow: '0 16px 40px rgba(20,184,166,0.28)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #7ef5e6 0%, #24c6b4 100%)',
                      },
                    }}
                  >
                    Explore Signature Builds
                  </Button>
                  <Button
                    href="#contact"
                    variant="outlined"
                    sx={{
                      px: 3,
                      py: 1.4,
                      color: '#f4f7fb',
                      borderColor: 'rgba(255,255,255,0.2)',
                      '&:hover': {
                        borderColor: '#f59e0b',
                        backgroundColor: 'rgba(245,158,11,0.08)',
                      },
                    }}
                  >
                    Discuss a Complex Project
                  </Button>
                </Stack>

                <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={link.icon}
                      sx={{
                        color: '#f4f7fb',
                        px: 2,
                        py: 1.2,
                        borderRadius: '16px',
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.1)',
                        },
                      }}
                    >
                      {link.label}
                    </Button>
                  ))}
                </Stack>
              </motion.div>
            </ScrollReveal>
          </Grid>

          <Grid item xs={12} md={5}>
            <ScrollReveal delay={0.2}>
              <Box
                sx={{
                  position: 'relative',
                  minHeight: 560,
                  display: 'flex',
                  alignItems: 'stretch',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    inset: '8% 8% auto auto',
                    width: 150,
                    height: 150,
                    borderRadius: '32px',
                    background: 'linear-gradient(160deg, rgba(245,158,11,0.9), rgba(251,113,133,0.9))',
                    filter: 'blur(12px)',
                    opacity: 0.28,
                  }}
                />
                <Paper
                  sx={{
                    position: 'relative',
                    width: '100%',
                    p: 2,
                    borderRadius: '30px',
                    background: 'linear-gradient(180deg, rgba(15,27,45,0.94) 0%, rgba(8,15,28,0.88) 100%)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 30px 80px rgba(0,0,0,0.38)',
                    overflow: 'hidden',
                  }}
                >
                  <Box sx={{ borderRadius: '24px', overflow: 'hidden', mb: 2.5, height: 320 }}>
                    <LazyImage
                      src="/assets/img/profile.jpg"
                      alt="Md. Asifur Rahman"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </Box>

                  <Typography sx={{ color: '#6ee7d8', fontWeight: 800, letterSpacing: '0.08em', mb: 1 }}>
                    CURRENT FOCUS
                  </Typography>
                  <Typography variant="h5" sx={{ mb: 1.5 }}>
                    Building products that blend software depth with engineering breadth.
                  </Typography>
                  <Typography sx={{ color: 'rgba(244,247,251,0.72)', lineHeight: 1.7, mb: 3 }}>
                    From ecommerce operations and healthcare platforms to AI agents, radio systems, and
                    production PCBs, I work comfortably across layers that most teams split across roles.
                  </Typography>

                  <Stack spacing={1.25}>
                    {highlightProjects.map((project) => (
                      <Box
                        key={project.title}
                        component="a"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: 'block',
                          textDecoration: 'none',
                          p: 2,
                          borderRadius: '18px',
                          backgroundColor: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          transition: '0.25s ease',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            backgroundColor: 'rgba(255,255,255,0.07)',
                          },
                        }}
                      >
                        <Typography sx={{ color: '#f59e0b', fontWeight: 800, fontSize: '0.75rem', mb: 0.5 }}>
                          {project.label}
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 0.75 }}>
                          {project.title}
                        </Typography>
                        <Typography sx={{ color: 'rgba(244,247,251,0.7)' }}>{project.description}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </Box>
            </ScrollReveal>
          </Grid>
        </Grid>

        <Grid container spacing={2.5} sx={{ mt: 4 }}>
          {trustStats.map((stat) => (
            <Grid item xs={12} sm={4} key={stat.label}>
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: '24px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Typography variant="h3" sx={{ color: '#6ee7d8', mb: 1 }}>
                  {stat.value}
                </Typography>
                <Typography sx={{ color: 'rgba(244,247,251,0.72)' }}>{stat.label}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 1.5 }}>
            Capability Areas
          </Typography>
          <Typography sx={{ color: 'rgba(244,247,251,0.72)', maxWidth: '48rem', mb: 4 }}>
            Inspired by strong portfolio layouts that emphasize curation over clutter, this section keeps the
            focus on high-value capabilities and the kinds of systems I can own from start to finish.
          </Typography>

          <Grid container spacing={3}>
            {expertiseAreas.map((area, index) => (
              <Grid item xs={12} md={4} key={area.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                >
                  <Paper
                    onClick={() => setSelectedExpertise(area)}
                    sx={{
                      p: 3.2,
                      minHeight: 250,
                      borderRadius: '28px',
                      cursor: 'pointer',
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      transition: '0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        borderColor: 'rgba(110,231,216,0.36)',
                        boxShadow: '0 24px 60px rgba(0,0,0,0.24)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        mb: 2.5,
                        display: 'grid',
                        placeItems: 'center',
                        borderRadius: '18px',
                        background: 'linear-gradient(135deg, rgba(110,231,216,0.16), rgba(245,158,11,0.16))',
                        color: '#f4f7fb',
                      }}
                    >
                      {area.icon}
                    </Box>
                    <Typography variant="h5" sx={{ mb: 1.5 }}>
                      {area.title}
                    </Typography>
                    <Typography sx={{ color: 'rgba(244,247,251,0.72)', lineHeight: 1.7, mb: 2.5 }}>
                      {area.description}
                    </Typography>
                    <Typography sx={{ color: '#6ee7d8', fontWeight: 700 }}>
                      View sample projects
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Grid container spacing={4} alignItems="start" sx={{ mt: 6 }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.7rem' }, mb: 1.5 }}>
              Tech Stack
            </Typography>
            <Typography sx={{ color: 'rgba(244,247,251,0.72)', lineHeight: 1.7, mb: 3 }}>
              Tools are only useful when they serve outcomes. I choose stacks based on delivery risk,
              maintainability, and the realities of the product.
            </Typography>

            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  size="small"
                  onClick={() => setSelectedCategory(category)}
                  sx={{
                    color: selectedCategory === category ? '#04111f' : '#f4f7fb',
                    backgroundColor: selectedCategory === category ? '#6ee7d8' : 'rgba(255,255,255,0.04)',
                    border: '1px solid',
                    borderColor: selectedCategory === category ? '#6ee7d8' : 'rgba(255,255,255,0.08)',
                    borderRadius: '999px',
                    '&:hover': {
                      backgroundColor: selectedCategory === category ? '#7ef5e6' : 'rgba(255,255,255,0.08)',
                    },
                  }}
                >
                  {category}
                </Button>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              {filteredSkills.map((skill, index) => (
                <Grid item xs={6} sm={4} md={3} key={skill.name}>
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.04 }}>
                    <Tooltip
                      title={
                        <Box sx={{ p: 0.5 }}>
                          <Typography sx={{ fontWeight: 800 }}>{skill.name}</Typography>
                          <Typography sx={{ color: '#d8fff8' }}>{skill.description}</Typography>
                        </Box>
                      }
                    >
                      <Box
                        component="a"
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                          p: 2,
                          borderRadius: '20px',
                          textDecoration: 'none',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          transition: '0.25s ease',
                          '&:hover': {
                            transform: 'translateY(-3px)',
                            background: 'rgba(255,255,255,0.08)',
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            display: 'grid',
                            placeItems: 'center',
                            borderRadius: '16px',
                            background: 'rgba(255,255,255,0.06)',
                            flexShrink: 0,
                          }}
                        >
                          <img
                            src={skill.logo}
                            alt={skill.name}
                            style={{ width: 28, height: 28, objectFit: 'contain', filter: 'brightness(1.1)' }}
                          />
                        </Box>
                        <Box>
                          <Typography sx={{ fontWeight: 800, fontSize: '0.95rem' }}>{skill.name}</Typography>
                          <Typography sx={{ color: 'rgba(244,247,251,0.6)', fontSize: '0.82rem' }}>
                            {skill.category}
                          </Typography>
                        </Box>
                      </Box>
                    </Tooltip>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <ExpertiseModal
        open={!!selectedExpertise}
        onClose={() => setSelectedExpertise(null)}
        title={selectedExpertise?.title}
        projects={selectedExpertise?.projects || []}
      />
    </Box>
  );
};

export default HeroSection;
