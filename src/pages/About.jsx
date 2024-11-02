import { useState, useEffect, useRef } from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import { Analytics, Psychology, Diversity3, Speed } from '@mui/icons-material';

const About = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTouching, setIsTouching] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const numberOfPoints = 100;
      
      for (let i = 0; i < numberOfPoints; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          color: `rgba(25, 118, 210, ${Math.random() * 0.5 + 0.3})`
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Move towards mouse
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const force = (200 - distance) / 200;
          particle.vx += dx * force * 0.02;
          particle.vy += dy * force * 0.02;
        }

        // Draw connections
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = otherParticle.x - particle.x;
            const dy = otherParticle.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(25, 118, 210, ${(150 - distance) / 150 * 0.2})`;
              ctx.lineWidth = (150 - distance) / 150;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    // Initialize
    handleResize();
    createParticles();
    animate();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition]);

  const features = [
    {
      icon: <Analytics sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: 'Advanced Analytics',
      description: 'Leveraging cutting-edge AI algorithms to transform raw data into actionable insights, helping businesses make informed decisions.'
    },
    {
      icon: <Psychology sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: 'Neural Networks',
      description: 'Implementing sophisticated neural networks that mimic human brain function for complex pattern recognition and problem-solving.'
    },
    {
      icon: <Speed sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: 'Real-time Processing',
      description: 'High-performance computing systems that deliver real-time AI processing for immediate response and adaptation.'
    },
    {
      icon: <Diversity3 sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: 'Collaborative AI',
      description: 'Creating AI systems that work seamlessly with human teams, enhancing productivity while maintaining human oversight.'
    }
  ];

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', bgcolor: '#000B2C' }}>
      {/* Particle Animation Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <Container 
        maxWidth="xl" 
        sx={{ 
          py: 8,
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Hero Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 3,
              color: 'white',
              textShadow: '0 0 20px rgba(25, 118, 210, 0.5)'
            }}
          >
            Pioneering AI Solutions
          </Typography>
          
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '800px',
              mx: 'auto',
              mb: 6
            }}
          >
            At Harsh.AI, we're pushing the boundaries of artificial intelligence to create 
            innovative solutions that transform businesses and enhance human capabilities.
          </Typography>
        </Box>

        {/* Features Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Paper 
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: 4,
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    '& .icon': {
                      transform: 'scale(1.2)',
                      color: '#4A9DFF'
                    }
                  }
                }}
              >
                <Box className="icon" sx={{ mb: 2, transition: 'all 0.3s ease' }}>
                  {feature.icon}
                </Box>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: 'white' }}>
                  {feature.title}
                </Typography>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Mission & Vision */}
        <Grid container spacing={4}>
          {['Mission', 'Vision'].map((section, index) => (
            <Grid item xs={12} md={6} key={section}>
              <Paper sx={{ 
                p: 4, 
                height: '100%', 
                borderRadius: 4,
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  background: 'rgba(255, 255, 255, 0.05)'
                }
              }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'white' }}>
                  Our {section}
                </Typography>
                <Typography paragraph sx={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem' }}>
                  {section === 'Mission' 
                    ? `We're dedicated to developing AI solutions that solve real-world challenges, 
                      improve efficiency, and drive innovation across industries. Our mission is to 
                      make advanced AI technology accessible and beneficial for businesses of all sizes.`
                    : `We envision a future where AI technology seamlessly integrates with human 
                      potential, creating smarter, more efficient, and sustainable solutions. Our goal 
                      is to be at the forefront of AI innovation, leading the way in responsible AI 
                      development.`
                  }
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;