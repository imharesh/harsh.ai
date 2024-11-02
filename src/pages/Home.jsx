// src/pages/Home.jsx
import { Box, Container, Typography, Button } from '@mui/material';
import { keyframes } from '@mui/system';

// Define the rotation animation
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Define the fade-in animation for the dots
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Home = () => {
  const techItems = [
    { label: 'Fintech/Trading', color: '#4CAF50', delay: '0s' },
    { label: 'Robotics/Drones', color: '#2196F3', delay: '0.5s' },
    { label: 'AR/VR/Game Development', color: '#3F51B5', delay: '1s' },
    { label: 'Blockchain/Crypto', color: '#8BC34A', delay: '1.5s' },
    { label: 'Internet of Things', color: '#03A9F4', delay: '2s' },
    { label: 'AI/ML/Deep Learning', color: '#1976D2', delay: '2.5s' }
  ];

  return (
    <Container 
      maxWidth="xl" 
      sx={{ 
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        py: 8
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        gap: 4,
        flexWrap: { xs: 'wrap', md: 'nowrap' }
      }}>
        {/* Left Side Content */}
        <Box sx={{ flex: 1, minWidth: { xs: '100%', md: '45%' } }}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '2.5rem', md: '3.5rem' }, 
              fontWeight: 'bold',
              mb: 3
            }}
          >
            We are your global software development partner for{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              emerging tech
            </Box>{' '}
            projects
          </Typography>
          
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 4,
              color: 'text.secondary',
              fontSize: { xs: '1.5rem', md: '2rem' }
            }}
          >
            Do you want to talk about your Project?
          </Typography>
          
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              fontSize: '1.2rem',
              py: 1.5,
              px: 4,
              borderRadius: 2
            }}
          >
            Get Started!
          </Button>
        </Box>

        {/* Right Side Animation */}
        <Box sx={{ 
          flex: 1,
          minWidth: { xs: '100%', md: '45%' },
          position: 'relative',
          height: '500px'
        }}>
          {/* Center Text */}
          <Typography
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'primary.main',
              fontSize: '2rem',
              fontWeight: 'bold',
              textAlign: 'center',
              zIndex: 1
            }}
          >
            Emerging
            <br />
            Tech
          </Typography>

          {/* Rotating Dots Circle */}
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '400px',
            animation: `${rotate} 30s linear infinite`
          }}>
            {techItems.map((item, index) => {
              const angle = (index * 60) * (Math.PI / 180);
              const radius = 200;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <Box
                  key={item.label}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                    animation: `${fadeIn} 1s ease-out forwards`,
                    animationDelay: item.delay,
                  }}
                >
                  {/* Dot */}
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      bgcolor: item.color,
                      mb: 1,
                      boxShadow: '0 0 10px rgba(0,0,0,0.2)'
                    }}
                  />
                  {/* Label */}
                  <Typography
                    sx={{
                      position: 'absolute',
                      width: 120,
                      textAlign: 'center',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontSize: '0.9rem',
                      fontWeight: 'bold',
                      color: 'text.primary'
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              );
            })}
          </Box>

          {/* Dotted Circle */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              border: '2px dotted #e0e0e0'
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;