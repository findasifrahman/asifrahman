import React, { useMemo, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { ArrowOutward } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useData } from '../../context/DataContext';

const IMAGE_MAP = {
  'eSIM Service Platform': '/assets/img/products/esim1.png',
  'langchain-RAG-firestore chat application': '/assets/img/products/langchaint-rag.png',
  'llm-scraper with Langchain, llama-index, openai': '/assets/img/products/llm-scraper.png',
  'Event scheduling software for NAVAL training': '/assets/img/projects/9.jpg',
  'Kiosk Interactive Learning Aid': '/assets/img/products/kiosk/kiosk_1.jpg',
  'SAAS ERP for food Supply Industry ': '/assets/img/products/erp/saas_1.png',
  'ChinaBuyBD Shopping': '/assets/img/products/customProduct.jpg',
  'China Healthcare Center': '/assets/img/products/saasERP.png',
  'Zynq SoC based high-performance PCB design': '/assets/img/products/advanced_pcb_zynq.png',
};

const normalizeSkills = (skills = '') =>
  skills
    .replaceAll('Â·', '|')
    .replaceAll('·', '|')
    .split('|')
    .map((item) => item.trim())
    .filter(Boolean);

const ProjectCard = ({ project, isFeatured }) => {
  const [expanded, setExpanded] = useState(false);
  const text = project.details || 'Production project delivered across multiple technical layers.';
  const shouldTruncate = text.length > 170;
  const displayText = shouldTruncate && !expanded ? `${text.slice(0, 170)}...` : text;
  const skills = normalizeSkills(project.skills);
  const imageUrl = project.imageUrl || IMAGE_MAP[project.title];

  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
      <Card
        sx={{
          height: '100%',
          borderRadius: '28px',
          overflow: 'hidden',
          background: isFeatured
            ? 'linear-gradient(180deg, rgba(23,41,62,0.98) 0%, rgba(8,14,24,0.95) 100%)'
            : 'linear-gradient(180deg, rgba(16,27,43,0.96) 0%, rgba(8,14,24,0.94) 100%)',
          border: isFeatured ? '1px solid rgba(110,231,216,0.28)' : '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 24px 70px rgba(0,0,0,0.2)',
        }}
      >
        {imageUrl && (
          <Box sx={{ position: 'relative', height: 220 }}>
            <CardMedia component="img" image={imageUrl} alt={project.title} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(7,17,31,0.05) 0%, rgba(7,17,31,0.64) 100%)',
              }}
            />
            {isFeatured && (
              <Box
                sx={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  px: 1.4,
                  py: 0.7,
                  borderRadius: '999px',
                  backgroundColor: 'rgba(7,17,31,0.78)',
                  border: '1px solid rgba(110,231,216,0.32)',
                  color: '#dffcf8',
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                }}
              >
                FPGA HIGHLIGHT
              </Box>
            )}
          </Box>
        )}

        <CardContent sx={{ p: 3.2, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ color: isFeatured ? '#6ee7d8' : '#f59e0b', fontWeight: 800, letterSpacing: '0.06em', mb: 1 }}>
            {project.company || 'Independent build'}
          </Typography>
          <Typography variant="h5" sx={{ mb: 1.25, minHeight: '3.2rem' }}>
            {project.title}
          </Typography>
          <Typography sx={{ color: 'rgba(244,247,251,0.7)', lineHeight: 1.8, mb: 2.5 }}>
            {displayText}
          </Typography>
          {shouldTruncate && (
            <Button onClick={() => setExpanded((value) => !value)} sx={{ alignSelf: 'flex-start', color: '#6ee7d8', mb: 2, p: 0 }}>
              {expanded ? 'Show less' : 'Read more'}
            </Button>
          )}

          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 3 }}>
            {skills.slice(0, 6).map((skill) => (
              <Box
                key={skill}
                sx={{
                  px: 1.2,
                  py: 0.7,
                  borderRadius: '999px',
                  color: '#f4f7fb',
                  fontSize: '0.82rem',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {skill}
              </Box>
            ))}
          </Stack>

          <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', gap: 2, alignItems: 'center' }}>
            <Typography sx={{ color: 'rgba(244,247,251,0.58)', fontSize: '0.92rem' }}>{project.time}</Typography>
            {project.project_link && (
              <Button component={Link} href={project.project_link} target="_blank" rel="noopener noreferrer" endIcon={<ArrowOutward />} sx={{ color: '#f4f7fb' }}>
                View
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const { data, loading, error } = useData();

  const projects = useMemo(() => {
    const rawProjects = data?.linkedin?.projects || [];
    return rawProjects.map((project) => ({
      ...project,
      imageUrl: IMAGE_MAP[project.title] || project.imageUrl,
    }));
  }, [data]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 9, position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 5 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 1.5 }}>
            Selected Project Archive
          </Typography>
          <Typography sx={{ color: 'rgba(244,247,251,0.72)', maxWidth: '50rem', lineHeight: 1.8 }}>
            Earlier projects now keep their visual thumbnails, so the archive feels more like a portfolio and less
            like a text index. The FPGA work is also elevated as a major engineering signal.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item key={`${project.title}-${index}`} xs={12} sm={6} lg={4}>
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }}>
                <ProjectCard project={project} isFeatured={project.title.includes('Zynq') || project.title.includes('FPGA')} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
