import { useState, useEffect, useRef } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActionArea, Box, Chip, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TimerIcon from '@mui/icons-material/Timer';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Healthcare",
    excerpt: "Exploring how artificial intelligence is revolutionizing medical diagnosis and treatment planning...",
    image: "/api/placeholder/800/400",
    category: "Healthcare",
    author: {
      name: "Dr. Sarah Chen",
      avatar: "/api/placeholder/40/40"
    },
    date: "2024-03-15",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Machine Learning in Financial Markets",
    excerpt: "How ML algorithms are transforming trading strategies and risk management in finance...",
    image: "/api/placeholder/800/400",
    category: "Finance",
    author: {
      name: "Michael Ross",
      avatar: "/api/placeholder/40/40"
    },
    date: "2024-03-12",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "The Ethics of AI Development",
    excerpt: "Discussing the important ethical considerations in artificial intelligence development...",
    image: "/api/placeholder/800/400",
    category: "Ethics",
    author: {
      name: "Emma Watson",
      avatar: "/api/placeholder/40/40"
    },
    date: "2024-03-10",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Natural Language Processing Breakthroughs",
    excerpt: "Recent advances in NLP that are changing how machines understand human language...",
    image: "/api/placeholder/800/400",
    category: "Technology",
    author: {
      name: "James Liu",
      avatar: "/api/placeholder/40/40"
    },
    date: "2024-03-08",
    readTime: "8 min read"
  },
  // Add more blog posts here
];

// BlogCard Component
const BlogCard = ({ post }) => {
  const navigate = useNavigate();

  return (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 8px 32px rgba(0, 11, 44, 0.3)',
          background: 'rgba(255, 255, 255, 0.06)',
        }
      }}
    >
      <CardActionArea 
        onClick={() => navigate(`/blog/${post.id}`)}
        sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
      >
        <CardMedia
          component="img"
          height="200"
          image={post.image}
          alt={post.title}
          sx={{
            objectFit: 'cover',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        />
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ mb: 2 }}>
            <Chip 
              label={post.category}
              size="small"
              sx={{ 
                bgcolor: 'rgba(25, 118, 210, 0.2)',
                color: '#4A9DFF',
                fontWeight: 500,
                borderRadius: '4px'
              }}
            />
          </Box>
          <Typography 
            variant="h5" 
            gutterBottom
            sx={{ 
              fontWeight: 600,
              fontSize: '1.25rem',
              height: '3em',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              color: 'white',
              mb: 2
            }}
          >
            {post.title}
          </Typography>
          <Typography 
            sx={{
              mb: 'auto',
              height: '4.5em',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.95rem',
              lineHeight: 1.5
            }}
          >
            {post.excerpt}
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: 3,
            pt: 2,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Avatar 
                src={post.author.avatar} 
                sx={{ 
                  width: 32, 
                  height: 32,
                  border: '2px solid rgba(25, 118, 210, 0.3)'
                }} 
              />
              <Typography 
                variant="body2" 
                sx={{ 
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.9)'
                }}
              >
                {post.author.name}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <CalendarTodayIcon sx={{ fontSize: 16, color: 'rgba(255, 255, 255, 0.5)' }} />
                <Typography 
                  variant="caption"
                  sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
                >
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'short',
                    day: 'numeric'
                  })}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <TimerIcon sx={{ fontSize: 16, color: 'rgba(255, 255, 255, 0.5)' }} />
                <Typography 
                  variant="caption"
                  sx={{ color: 'rgba(255, 255, 255, 0.5)' }}
                >
                  {post.readTime}
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

// Main BlogList Component
const BlogList = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const force = (200 - distance) / 200;
          particle.vx += dx * force * 0.02;
          particle.vy += dy * force * 0.02;
        }

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

    handleResize();
    createParticles();
    animate();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition]);

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', bgcolor: '#000B2C' }}>
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
      
      <Container maxWidth="xl" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 700,
            mb: 2,
            textAlign: 'center',
            color: 'white',
            textShadow: '0 0 20px rgba(25, 118, 210, 0.5)'
          }}
        >
          Latest Blog Posts
        </Typography>
        <Typography 
          sx={{ 
            textAlign: 'center', 
            mb: 6,
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '1.1rem',
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          Explore our latest insights, tutorials, and updates on AI and emerging technologies
        </Typography>
        
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
              <BlogCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogList;