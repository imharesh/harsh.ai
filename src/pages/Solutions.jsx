import { useState, useEffect, useRef } from 'react';
import {
    Container,
    Typography,
    Grid,
    Paper,
    Box,
    Button,
    Tabs,
    Tab
} from '@mui/material';
import {
    SmartToy,
    DataObject,
    Psychology,
    CloudQueue,
    Security,
    Biotech,
    Speed,
    AutoGraph
} from '@mui/icons-material';

const Solutions = () => {
    const [activeTab, setActiveTab] = useState(0);
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

    // Rest of your code remains the same...
    const solutions = [
        {
            category: "AI Solutions",
            icon: <SmartToy sx={{ fontSize: 40 }} />,
            items: [
                {
                    title: "Machine Learning Models",
                    description: "Custom ML models for prediction, classification, and pattern recognition tailored to your business needs.",
                    features: ["Predictive Analytics", "Pattern Recognition", "Data Classification", "Anomaly Detection"],
                    icon: <Psychology />
                },
                {
                    title: "Natural Language Processing",
                    description: "Advanced NLP solutions for text analysis, chatbots, and automated content generation.",
                    features: ["Text Analysis", "Sentiment Analysis", "Chatbots", "Content Generation"],
                    icon: <DataObject />
                },
                {
                    title: "Computer Vision",
                    description: "Sophisticated image and video processing solutions for object detection and recognition.",
                    features: ["Object Detection", "Facial Recognition", "Scene Analysis", "Visual Search"],
                    icon: <Biotech />
                }
            ]
        },
        {
            category: "Cloud Solutions",
            icon: <CloudQueue sx={{ fontSize: 40 }} />,
            items: [
                {
                    title: "Cloud Infrastructure",
                    description: "Scalable and secure cloud infrastructure design and implementation.",
                    features: ["AWS/Azure/GCP", "Microservices", "Containerization", "Auto-scaling"],
                    icon: <Speed />
                },
                {
                    title: "Cloud Security",
                    description: "Comprehensive security solutions for cloud-based applications and infrastructure.",
                    features: ["Access Control", "Data Encryption", "Security Monitoring", "Compliance"],
                    icon: <Security />
                },
                {
                    title: "Performance Optimization",
                    description: "Cloud performance optimization and cost management solutions.",
                    features: ["Load Balancing", "Caching", "Resource Optimization", "Cost Analysis"],
                    icon: <AutoGraph />
                }
            ]
        }
    ];
    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

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
                        Our Solutions
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
                        Cutting-edge AI and cloud solutions designed to transform your business
                        and drive innovation.
                    </Typography>
                </Box>

                {/* Solution Categories Tabs */}
                <Box sx={{ mb: 4 }}>
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        centered
                        sx={{
                            '& .MuiTabs-indicator': {
                                backgroundColor: '#4A9DFF'
                            }
                        }}
                    >
                        {solutions.map((category, index) => (
                            <Tab
                                key={category.category}
                                icon={category.icon}
                                label={category.category}
                                sx={{
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    '&.Mui-selected': {
                                        color: '#4A9DFF'
                                    }
                                }}
                            />
                        ))}
                    </Tabs>
                </Box>

                {/* Solutions Grid */}
                <Grid container spacing={4}>
                    {solutions[activeTab].items.map((solution, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Paper
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: 4,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        '& .solution-icon': {
                                            transform: 'scale(1.2)',
                                            color: '#4A9DFF'
                                        }
                                    }
                                }}
                            >
                                <Box
                                    className="solution-icon"
                                    sx={{
                                        color: 'white',
                                        mb: 3,
                                        transition: 'all 0.3s ease',
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                >
                                    {solution.icon}
                                </Box>
                                <Typography
                                    variant="h5"
                                    gutterBottom
                                    sx={{
                                        color: 'white',
                                        textAlign: 'center',
                                        mb: 2
                                    }}
                                >
                                    {solution.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: 'rgba(255, 255, 255, 0.7)',
                                        mb: 3,
                                        textAlign: 'center'
                                    }}
                                >
                                    {solution.description}
                                </Typography>
                                <Box sx={{ mt: 'auto' }}>
                                    <Grid container spacing={1}>
                                        {solution.features.map((feature, idx) => (
                                            <Grid item xs={6} key={idx}>
                                                <Typography
                                                    sx={{
                                                        color: 'rgba(255, 255, 255, 0.6)',
                                                        fontSize: '0.9rem',
                                                        textAlign: 'center',
                                                        p: 1,
                                                        bgcolor: 'rgba(74, 157, 255, 0.1)',
                                                        borderRadius: 1,
                                                        '&:hover': {
                                                            bgcolor: 'rgba(74, 157, 255, 0.2)',
                                                            color: 'white'
                                                        },
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    {feature}
                                                </Typography>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                                <Button
                                    variant="outlined"
                                    fullWidth
                                    sx={{
                                        mt: 3,
                                        color: 'white',
                                        borderColor: 'rgba(255, 255, 255, 0.3)',
                                        '&:hover': {
                                            borderColor: '#4A9DFF',
                                            bgcolor: 'rgba(74, 157, 255, 0.1)'
                                        }
                                    }}
                                >
                                    Learn More
                                </Button>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Solutions;