import { useState, useEffect, useRef } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Box,
  IconButton,
  Divider,
  Snackbar,
  Alert
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTouching, setIsTouching] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Particle animation effect
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
        if (!isTouching) {
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const force = (200 - distance) / 200;
            particle.vx += dx * force * 0.02;
            particle.vy += dy * force * 0.02;
          }
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
  }, [mousePosition, isTouching]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenSnackbar(true);
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: "Our Location",
      info: "Bhavnagar, Gujarat, India"
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: "Email Us",
      info: "imharesh@gmail.com"
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: "Call Us",
      info: "+91 XXXXX XXXXX"
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
        maxWidth="lg"
        sx={{
          py: 8,
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8, color: 'white' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              mb: 2,
              background: 'linear-gradient(45deg, #1976d2, #90caf9)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              opacity: 0.8
            }}
          >
            Have a project in mind? Let's discuss how we can help bring your ideas to life.
          </Typography>
        </Box>

        {/* Contact Info Cards */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {contactInfo.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    '& .icon': {
                      color: '#4A9DFF',
                      transform: 'scale(1.2)'
                    }
                  }
                }}
              >
                <Box
                  className="icon"
                  sx={{
                    color: 'white',
                    mb: 2,
                    transition: 'all 0.3s ease'
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    mb: 1
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)'
                  }}
                >
                  {item.info}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Contact Form */}
        <Paper
          elevation={24}
          sx={{
            p: { xs: 3, md: 6 },
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Grid container spacing={4}>
            {/* Form Section */}
            <Grid item xs={12} md={7}>
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
                Send us a Message
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: '#1976d2',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        py: 1.5,
                        background: 'linear-gradient(45deg, #1976d2, #000B2C)',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #000B2C, #1976d2)',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>

            {/* Divider */}
            <Grid item xs={12} md={1} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Divider orientation="vertical" sx={{ height: '100%' }} />
            </Grid>

            {/* Additional Info Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                Connect With Us
              </Typography>
              <Typography sx={{ mb: 4, color: 'text.secondary' }}>
                Follow us on social media to stay updated with our latest projects and innovations in AI technology.
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Social Media
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {[LinkedInIcon, GitHubIcon, TwitterIcon].map((Icon, index) => (
                    <IconButton
                      key={index}
                      sx={{
                        bgcolor: 'rgba(25, 118, 210, 0.1)',
                        '&:hover': {
                          bgcolor: '#1976d2',
                          transform: 'translateY(-3px)',
                          '& svg': { color: 'white' }
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Icon sx={{ color: '#1976d2' }} />
                    </IconButton>
                  ))}
                </Box>
              </Box>

              <Typography variant="h6" sx={{ mb: 2 }}>
                Working Hours
              </Typography>
              <Box sx={{ mb: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Monday - Friday:
                </Typography>
                <Typography color="text.secondary">9:00 AM - 6:00 PM</Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  Saturday - Sunday:
                </Typography>
                <Typography color="text.secondary">Closed</Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      {/* Success Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Thank you for your message! We'll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;