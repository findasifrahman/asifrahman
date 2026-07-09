import React from 'react';
import {
  Box,
  Container,
  IconButton,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YouTubeIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'GitHub', icon: <GitHubIcon />, url: 'https://github.com/findasifrahman' },
  { name: 'LinkedIn', icon: <LinkedInIcon />, url: 'https://bd.linkedin.com/in/AsifRahman18' },
  { name: 'YouTube', icon: <YouTubeIcon />, url: 'https://www.youtube.com/channel/UCztj8CCuOJ0xuyIL5wzmbsw' },
  { name: 'Email', icon: <EmailIcon />, url: 'mailto:asifrahman10018@gmail.com' },
];

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box component="footer" sx={{ py: 6, px: 2, mt: 'auto', color: 'white' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            p: 3,
            borderRadius: '28px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <IconButton
                  component={Link}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'white',
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.14)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {link.icon}
                </IconButton>
              </motion.div>
            ))}
          </Box>

          <Typography
            variant="body2"
            align="center"
            sx={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: isMobile ? '0.75rem' : '0.9rem',
              maxWidth: '42rem',
            }}
          >
            Copyright {new Date().getFullYear()} Md Asifur Rahman. Portfolio focused on complex software,
            embedded systems, and product delivery.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
