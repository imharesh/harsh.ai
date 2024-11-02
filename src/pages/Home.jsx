import { Box, Container, Typography, Button } from '@mui/material';
import { useState, useEffect, useRef } from 'react';

const Home = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTouching, setIsTouching] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let textParticles = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createTextParticles();
    };

    const createTextParticles = () => {
      ctx.font = 'bold 180px Arial';
      ctx.fillStyle = 'rgba(0, 0, 0, 0)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      const text = 'Harsh.AI';
      const textWidth = ctx.measureText(text).width;
      // Position text on the right side
      const x = (canvas.width * 0.75);
      const y = canvas.height / 2;
      
      ctx.fillText(text, x, y);
      
      textParticles = [];
      
      // Create more particles for a denser effect
      for (let i = 0; i < 300; i++) {
        textParticles.push({
          x: x - textWidth/2 + Math.random() * textWidth,
          y: y - 90 + Math.random() * 180,
          size: Math.random() * 2 + 1,
          color: `rgba(25, 118, 210, ${Math.random() * 0.5 + 0.5})`
        });
      }
    };

    const createParticles = () => {
      particles = [];
      const numberOfPoints = 200; // Increased number of particles
      
      for (let i = 0; i < numberOfPoints; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          baseX: Math.random() * canvas.width,
          baseY: Math.random() * canvas.height,
          targetX: null,
          targetY: null,
          size: Math.random() * 2 + 1,
          color: `rgba(25, 118, 210, ${Math.random() * 0.5 + 0.5})`,
          transitionSpeed: 0.02 + Math.random() * 0.03 // Variable transition speed
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (isTouching) {
        // Logo formation animation
        particles.forEach((particle, index) => {
          if (particle.targetX === null && index < textParticles.length) {
            // Add some randomness to the initial position
            particle.startX = particle.x;
            particle.startY = particle.y;
            particle.targetX = textParticles[index].x;
            particle.targetY = textParticles[index].y;
            particle.progress = 0;
          }
          
          if (particle.targetX !== null) {
            // Smooth easing animation
            particle.progress += particle.transitionSpeed;
            const ease = 1 - Math.pow(1 - particle.progress, 3); // Cubic easing
            
            particle.x = particle.startX + (particle.targetX - particle.startX) * ease;
            particle.y = particle.startY + (particle.targetY - particle.startY) * ease;

            // Add subtle floating movement when in position
            if (particle.progress >= 1) {
              particle.x += Math.sin(Date.now() * 0.001 + index) * 0.5;
              particle.y += Math.cos(Date.now() * 0.001 + index) * 0.5;
            }
          }
        });
      } else {
        // Cursor following behavior
        particles.forEach(particle => {
          particle.targetX = null;
          particle.targetY = null;
          particle.progress = 0;

          // Move towards cursor
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 300) {
            const force = (300 - distance) / 300;
            particle.vx += dx * force * 0.01;
            particle.vy += dy * force * 0.01;
          }

          // Return to base position
          const baseDx = particle.baseX - particle.x;
          const baseDy = particle.baseY - particle.y;
          particle.vx += baseDx * 0.005;
          particle.vy += baseDy * 0.005;

          particle.vx *= 0.95;
          particle.vy *= 0.95;
          particle.x += particle.vx;
          particle.y += particle.vy;
        });
      }

      // Enhanced connection lines
      particles.forEach((particle, i) => {
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = otherParticle.x - particle.x;
            const dy = otherParticle.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = isTouching ? 60 : 150; // Shorter connections in logo form

            if (distance < maxDistance) {
              ctx.beginPath();
              const opacity = isTouching ? 0.8 : 0.3;
              ctx.strokeStyle = `rgba(25, 118, 210, ${(maxDistance - distance) / maxDistance * opacity})`;
              ctx.lineWidth = (maxDistance - distance) / maxDistance * (isTouching ? 1.5 : 1);
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });

        // Draw particle with glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        if (isTouching) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(25, 118, 210, 0.1)`;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    const handleTouchMove = (event) => {
      event.preventDefault();
      setMousePosition({
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
      });
    };

    const handleStart = () => setIsTouching(true);
    const handleEnd = () => setIsTouching(false);

    // Initialize
    handleResize();
    createParticles();
    createTextParticles();
    animate();

    // Event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleStart);
    canvas.addEventListener('mouseup', handleEnd);
    canvas.addEventListener('touchstart', handleStart);
    canvas.addEventListener('touchend', handleEnd);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleStart);
      canvas.removeEventListener('mouseup', handleEnd);
      canvas.removeEventListener('touchstart', handleStart);
      canvas.removeEventListener('touchend', handleEnd);
      canvas.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition, isTouching]);

  // Rest of the JSX remains the same...
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', bgcolor: '#000' }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          cursor: 'pointer'
        }}
      />

      <Container 
        maxWidth="xl" 
        sx={{ 
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          py: 8,
          position: 'relative',
          zIndex: 1
        }}
      >
        <Box sx={{ 
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: 8
        }}>
          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' }, 
                fontWeight: 'bold',
                mb: 3,
                color: '#fff',
                textShadow: '0 0 20px rgba(25, 118, 210, 0.5)'
              }}
            >
              Engineering {' '}
              <Box component="span" sx={{ 
                background: 'linear-gradient(45deg, #1976d2, #90caf9)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: 'none'
              }}>
                Tomorrow's
              </Box>
            </Typography>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' }, 
                fontWeight: 'bold',
                mb: 3,
                color: '#fff',
                textShadow: '0 0 20px rgba(25, 118, 210, 0.5)'
              }}
            >
              Intelligence {' '}
              <Box component="span" sx={{ 
                background: 'linear-gradient(45deg, #1976d2, #90caf9)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: 'none'
              }}>
                Today
              </Box>
            </Typography>
            <Typography 
              variant="h4" 
              sx={{ 
                mb: 4,
                color: 'rgba(255, 255, 255, 0.8)',
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
                borderRadius: 2,
                background: 'linear-gradient(45deg, #1976d2, #90caf9)',
                boxShadow: '0 0 20px rgba(25, 118, 210, 0.5)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #90caf9, #1976d2)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 0 30px rgba(25, 118, 210, 0.7)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              Get Started!
            </Button>
          </Box>
          <Box sx={{ flex: 1 }} />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;