import { useState, useEffect, useRef } from 'react';
import { Container, Typography, Box, Avatar, Chip, Divider, Paper, IconButton } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TimerIcon from '@mui/icons-material/Timer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


// Sample blog posts data
const blogPostsData = {
    1: {
        title: "The Future of AI in Healthcare: Transforming Patient Care",
        content: `
      <h2>Introduction</h2>
      <p>Artificial Intelligence is revolutionizing healthcare delivery and patient care in ways we never imagined possible. From early disease detection to personalized treatment plans, AI is becoming an indispensable tool in modern healthcare.</p>
      
      <h2>Key Applications of AI in Healthcare</h2>
      <p>The integration of AI in healthcare spans multiple areas:</p>
      <ul>
        <li><strong>Medical Imaging Analysis:</strong> AI algorithms can detect subtle patterns in X-rays, MRIs, and CT scans that might be missed by the human eye.</li>
        <li><strong>Disease Prediction:</strong> Machine learning models can predict patient risks and potential health issues before they become serious.</li>
        <li><strong>Treatment Planning:</strong> AI helps create personalized treatment plans based on patient data and medical history.</li>
        <li><strong>Drug Discovery:</strong> AI accelerates the process of discovering and developing new medications.</li>
      </ul>

      <h2>Real-World Impact</h2>
      <p>Healthcare providers worldwide are already seeing significant benefits:</p>
      <ul>
        <li>30% reduction in diagnosis time</li>
        <li>40% improvement in treatment accuracy</li>
        <li>50% decrease in administrative tasks</li>
        <li>25% cost reduction in patient care</li>
      </ul>

      <h2>Future Prospects</h2>
      <p>The future of AI in healthcare looks even more promising. Emerging trends include:</p>
      <ul>
        <li><strong>Personalized Medicine:</strong> Tailoring treatments to individual genetic profiles</li>
        <li><strong>Real-time Monitoring:</strong> Continuous patient health tracking using AI-powered devices</li>
        <li><strong>Automated Diagnosis:</strong> Advanced systems for rapid and accurate disease diagnosis</li>
        <li><strong>Predictive Healthcare:</strong> Anticipating health issues before they manifest</li>
      </ul>

      <h2>Conclusion</h2>
      <p>AI in healthcare represents a paradigm shift in how we approach patient care. As technology continues to evolve, we can expect even more groundbreaking applications that will further transform the healthcare landscape.</p>
    `,
        image: "/api/placeholder/1200/400",
        category: "Healthcare",
        author: {
            name: "Dr. Sarah Chen",
            avatar: "/api/placeholder/64/64",
            bio: "AI Research Lead & Healthcare Innovation Specialist",
            credentials: "Ph.D. in Medical AI, Stanford University"
        },
        date: "2024-03-15",
        readTime: "8 min read",
        tags: ["Healthcare", "AI", "Machine Learning", "Medical Innovation"]
    },
    2: {
        title: "The Impact of AI on Business Transformation",
        content: `Similar content structure...`,
        image: "/api/placeholder/1200/400",
        category: "Business",
        author: {
            name: "John Smith",
            avatar: "/api/placeholder/64/64",
            bio: "Business Strategy Consultant",
            credentials: "MBA, Harvard Business School"
        },
        date: "2024-03-14",
        readTime: "6 min read",
        tags: ["Business", "AI", "Digital Transformation"]
    }
};

const BlogPost = () => {
    const { id } = useParams();
    const canvasRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const post = blogPostsData[id];

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

    // Handle share functionality
    // Handle share functionality
    const handleShare = (platform) => {
        const url = window.location.href;
        const text = `Check out this article: ${post.title}`;
        
        switch (platform) {
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
                break;
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`);
                break;
            case 'linkedin':
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`);
                break;
            default:
                break;
        }
    };

    if (!post) {
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
                <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
                    <Typography variant="h4" sx={{ color: 'white', mb: 2 }}>Blog post not found</Typography>
                    <Link 
                        to="/blog" 
                        style={{ 
                            color: '#4A9DFF',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        <ArrowBackIcon /> Return to blog list
                    </Link>
                </Container>
            </Box>
        );
    }
    const renderContent = () => (
        <Box 
            dangerouslySetInnerHTML={{ __html: post.content }}
            sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                '& h2': {
                    color: 'white',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 600,
                    mt: 6,
                    mb: 3,
                    borderBottom: '2px solid rgba(25, 118, 210, 0.3)',
                    pb: 2
                },
                '& p': {
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    mb: 3,
                    color: 'rgba(255, 255, 255, 0.8)'
                },
                '& ul': {
                    pl: 4,
                    mb: 4
                },
                '& li': {
                    mb: 2,
                    fontSize: '1.1rem',
                    color: 'rgba(255, 255, 255, 0.8)'
                },
                '& strong': {
                    color: '#4A9DFF',
                    fontWeight: 600
                },
                '& img': {
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    mb: 4
                }
            }}
        />
    );

    // Share section component
    const renderShareSection = () => (
        <Box sx={{ 
            display: 'flex', 
            gap: 2, 
            alignItems: 'center',
            mt: 4,
            pt: 4,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
            <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>Share this article:</Typography>
            {[
                { icon: <FacebookIcon />, platform: 'facebook', color: '#4267B2' },
                { icon: <TwitterIcon />, platform: 'twitter', color: '#1DA1F2' },
                { icon: <LinkedInIcon />, platform: 'linkedin', color: '#0077B5' }
            ].map((social) => (
                <IconButton 
                    key={social.platform}
                    onClick={() => handleShare(social.platform)}
                    sx={{ 
                        color: social.color,
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        '&:hover': { 
                            bgcolor: `${social.color}20`,
                            transform: 'translateY(-2px)'
                        },
                        transition: 'all 0.3s ease'
                    }}
                >
                    {social.icon}
                </IconButton>
            ))}
        </Box>
    );

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

            <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
                {/* Back Navigation */}
                <Link to="/blog" style={{ textDecoration: 'none' }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: '#4A9DFF',
                        mb: 4,
                        width: 'fit-content',
                        '&:hover': { 
                            color: '#90caf9',
                            transform: 'translateX(-5px)'
                        },
                        transition: 'all 0.3s ease'
                    }}>
                        <ArrowBackIcon />
                        <Typography>Back to Blog</Typography>
                    </Box>
                </Link>

                {/* Main Content Paper */}
                <Paper sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 2,
                    p: { xs: 2, sm: 3, md: 4 },
                    mb: 4
                }}>
                    {/* Tags */}
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                        <Chip
                            label={post.category}
                            sx={{
                                bgcolor: 'rgba(25, 118, 210, 0.2)',
                                color: '#4A9DFF',
                                fontWeight: 500,
                            }}
                        />
                        {post.tags.map(tag => (
                            <Chip
                                key={tag}
                                label={tag}
                                variant="outlined"
                                sx={{ 
                                    borderColor: 'rgba(74, 157, 255, 0.3)', 
                                    color: '#4A9DFF',
                                    '&:hover': {
                                        borderColor: '#4A9DFF',
                                        background: 'rgba(74, 157, 255, 0.1)'
                                    }
                                }}
                            />
                        ))}
                    </Box>

                    {/* Title */}
                    <Typography variant="h1" sx={{
                        fontSize: { xs: '2rem', md: '3rem' },
                        fontWeight: 700,
                        mb: 4,
                        color: 'white',
                        textShadow: '0 0 20px rgba(25, 118, 210, 0.5)'
                    }}>
                        {post.title}
                    </Typography>

                    {/* Featured Image */}
                    <Box
                        component="img"
                        src={post.image}
                        alt={post.title}
                        sx={{
                            width: '100%',
                            height: { xs: '200px', sm: '300px', md: '400px' },
                            objectFit: 'cover',
                            borderRadius: 2,
                            mb: 4,
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                    />

                    {/* Author & Meta Information */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: 3,
                        alignItems: { xs: 'flex-start', md: 'center' },
                        mb: 6,
                        p: 3,
                        borderRadius: 2,
                        bgcolor: 'rgba(255, 255, 255, 0.05)'
                    }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Avatar
                                src={post.author.avatar}
                                sx={{ 
                                    width: 64,
                                    height: 64,
                                    border: '2px solid rgba(74, 157, 255, 0.3)'
                                }}
                            />
                            <Box>
                                <Typography sx={{ color: 'white', fontWeight: 600 }}>
                                    {post.author.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                                    {post.author.bio}
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ 
                            display: 'flex', 
                            gap: 3,
                            ml: { md: 'auto' },
                            color: 'rgba(255, 255, 255, 0.7)'
                        }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <CalendarTodayIcon />
                                <Typography>
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <TimerIcon />
                                <Typography>{post.readTime}</Typography>
                            </Box>
                        </Box>
                    </Box>

                    {/* Blog Content */}
                    {renderContent()}
                    {/* Share Section */}
                    {renderShareSection()}
                    </Paper>
            </Container>
        </Box>
    );
};

export default BlogPost;