import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { ArrowOutward, Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const parseSkills = (skills = '') =>
  skills
    .replaceAll('Â·', '|')
    .replaceAll('·', '|')
    .split('|')
    .map((item) => item.trim())
    .filter(Boolean);

const ProjectCard = ({ image, title, redirectUrl, skills, details }) => {
  const skillItems = parseSkills(skills);

  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          cursor: redirectUrl ? 'pointer' : 'default',
          borderRadius: '26px',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, rgba(16,27,43,0.98) 0%, rgba(8,14,24,0.96) 100%)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 24px 70px rgba(0,0,0,0.2)',
        }}
        onClick={() => redirectUrl && window.open(redirectUrl, '_blank')}
      >
        {image && (
          <Box sx={{ position: 'relative', height: 220, overflow: 'hidden' }}>
            <CardMedia
              component="img"
              image={image}
              alt={title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.35s ease',
                '&:hover': {
                  transform: 'scale(1.04)',
                },
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(7,17,31,0.02) 0%, rgba(7,17,31,0.68) 100%)',
              }}
            />
          </Box>
        )}

        <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Typography variant="h5" sx={{ color: '#fff', fontWeight: 700, mb: 1.4 }}>
            {title}
          </Typography>

          {details && (
            <Typography sx={{ mb: 2.2, color: 'rgba(244,247,251,0.74)', lineHeight: 1.75, flexGrow: 1 }}>
              {details}
            </Typography>
          )}

          {skillItems.length > 0 && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
              {skillItems.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                />
              ))}
            </Box>
          )}

          {redirectUrl && (
            <Box sx={{ mt: 2.5, display: 'flex', alignItems: 'center', color: '#6ee7d8', fontWeight: 700 }}>
              <Typography sx={{ mr: 0.8 }}>Open project</Typography>
              <ArrowOutward fontSize="small" />
            </Box>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ExpertiseModal = ({ open, onClose, title, projects }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '28px',
          background: '#07111f',
          color: 'white',
          border: '1px solid rgba(255,255,255,0.08)',
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          p: 3,
        }}
      >
        <Box>
          <Typography variant="h4" component="div" sx={{ color: '#fff', fontWeight: 700 }}>
            {title}
          </Typography>
          <Typography sx={{ color: 'rgba(244,247,251,0.68)', mt: 0.6 }}>
            Selected examples from this capability area.
          </Typography>
        </Box>
        <IconButton edge="end" color="inherit" onClick={onClose} aria-label="close" sx={{ color: '#90caf9' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ p: 3.2 }}>
        <Grid container spacing={3} alignItems="stretch">
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={`${project.title}-${index}`} sx={{ display: 'flex' }}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ExpertiseModal;
