// src/components/Home/ImageSlider.jsx
import { useState, useEffect } from 'react';
import { Box, Paper, IconButton } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const sliderData = [
  {
    id: 1,
    title: 'AI Solutions',
    image: '/harsh-ai/src/assets/img/ai1.jpg',  // You'll need to add these images
    placeholder: 'https://placehold.co/1200x600/1976d2/ffffff?text=AI+Solutions'
  },
  {
    id: 2,
    title: 'Machine Learning',
    image: '/harsh-ai/src/assets/img/ai2.jpg',  // You'll need to add these images
    placeholder: 'https://placehold.co/1200x600/1976d2/ffffff?text=Machine+Learning'
  },
  {
    id: 3,
    title: 'Data Analytics',
    image: '/harsh-ai/src/assets/img/ai1.jpg',  // You'll need to add these images
    placeholder: 'https://placehold.co/1200x600/1976d2/ffffff?text=Data+Analytics'
  },
  {
    id: 4,
    title: 'Neural Networks',
    image: '/harsh-ai/src/assets/img/ai2.jpg',  // You'll need to add these images
    placeholder: 'https://placehold.co/1200x600/1976d2/ffffff?text=Neural+Networks'
  },
  {
    id: 5,
    title: 'Deep Learning',
    image: '/harsh-ai/src/assets/img/ai1.jpg',  // You'll need to add these images
    placeholder: 'https://placehold.co/1200x600/1976d2/ffffff?text=Deep+Learning'
  }
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % sliderData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentImage((prev) => 
      prev === 0 ? sliderData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImage((prev) => 
      (prev + 1) % sliderData.length
    );
  };

  const handleImageError = (e) => {
    e.target.src = sliderData[currentImage].placeholder;
  };

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        position: 'relative',
        overflow: 'hidden',
        '&:hover .MuiIconButton-root': {
          opacity: 1
        }
      }}
    >
      <Box
        component="img"
        src={sliderData[currentImage].image}
        onError={handleImageError}
        alt={sliderData[currentImage].title}
        sx={{
          width: '100%',
          height: { xs: '40vh', sm: '50vh', md: '60vh' },
          objectFit: 'cover',
          transition: 'all 0.5s ease-in-out'
        }}
      />
      
      {/* Navigation Arrows */}
      <IconButton
        onClick={handlePrevious}
        sx={{
          position: 'absolute',
          left: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(255, 255, 255, 0.3)',
          '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.8)' },
          opacity: { xs: 1, sm: 0 },
          transition: 'opacity 0.3s'
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>
      
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(255, 255, 255, 0.3)',
          '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.8)' },
          opacity: { xs: 1, sm: 0 },
          transition: 'opacity 0.3s'
        }}
      >
        <KeyboardArrowRight />
      </IconButton>

      {/* Navigation Dots */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1
        }}
      >
        {sliderData.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentImage(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              bgcolor: index === currentImage ? 'primary.main' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          />
        ))}
      </Box>
    </Paper>
  );
};

export default ImageSlider;