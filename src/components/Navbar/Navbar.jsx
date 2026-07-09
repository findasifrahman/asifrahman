import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} onClick={() => scrollToSection(item.id)}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        background: scrolled ? 'rgba(7, 17, 31, 0.76)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        boxShadow: scrolled ? '0 20px 60px rgba(0, 0, 0, 0.2)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
      }}
    >
      <Toolbar
        sx={{
          maxWidth: '1200px',
          width: '100%',
          mx: 'auto',
          px: { xs: 2, md: 3 },
          minHeight: '76px',
        }}
      >
        <Typography
          variant="h6"
          component={motion.div}
          whileHover={{ scale: 1.05 }}
          sx={{
            flexGrow: 1,
            cursor: 'pointer',
            fontWeight: 'bold',
            letterSpacing: '0.08em',
            background: 'linear-gradient(120deg, #f4f7fb 10%, #6ee7d8 55%, #f59e0b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          onClick={() => scrollToSection('home')}
        >
          ASIFUR RAHMAN
        </Typography>

        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                color="inherit"
                onClick={() => scrollToSection(item.id)}
                sx={{
                  px: 1.75,
                  borderRadius: '999px',
                  color: 'rgba(244,247,251,0.82)',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: '#fff',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            background: theme.palette.background.paper,
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 
