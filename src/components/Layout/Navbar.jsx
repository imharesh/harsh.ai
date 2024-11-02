import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        background: 'linear-gradient(to right, #000B2C, #1976d2)',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo/Brand */}
          <Typography
            variant="h4"
            component={Link}
            to="/"
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              color: 'white',
              textDecoration: 'none',
              flexGrow: { xs: 1, md: 0 },
              fontSize: { xs: '1.5rem', md: '2rem' },
              mr: { md: 8 }
            }}
          >
            Harsh.AI
          </Typography>

          {/* Navigation Links */}
          <Box 
            sx={{ 
              display: { xs: 'none', md: 'flex' },
              gap: 4,
              mx: 'auto'
            }}
          >
            {[
              { text: 'Home', path: '/' },
              { text: 'About', path: '/about' },
              { text: 'Blog', path: '/blog' },
              { text: 'Solutions', path: '/solutions' },
            ].map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                sx={{
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: 500,
                  textTransform: 'none',
                  '&:hover': {
                    color: '#4A9DFF'
                  }
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* Contact Button */}
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            sx={{
              display: { xs: 'none', md: 'block' },
              bgcolor: '#4A9DFF',
              color: 'white',
              px: 4,
              py: 1,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              '&:hover': {
                bgcolor: '#2186ff'
              }
            }}
          >
            Contact Us
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;