import { Box, Container, Grid, Typography, Link, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#000B2C', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info Column */}
          <Grid item xs={12} md={3}>
            <Box component="img"
              src="/src/assets/logo.png"
              alt="Harsh.AI"
              sx={{ height: 60, mb: 3 }}
            />
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <LocationOnIcon sx={{ color: '#4A9DFF', mt: 0.5 }} />
                <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                  Bhavnagar, Gujarat
                  <br />
                  India
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ color: '#4A9DFF' }} />
                <Link
                  href="mailto:imharesh@gmail.com"
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    '&:hover': {
                      color: '#4A9DFF',
                      transform: 'translateX(5px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  imharesh@gmail.com
                </Link>
              </Box>
            </Stack>
          </Grid>

          {/* Company Links Column */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontSize: '1.5rem',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 60,
                  height: 3,
                  bgcolor: '#4A9DFF'
                }
              }}
            >
              Company
            </Typography>
            <Stack spacing={2}>
              {[
                { text: 'Home', path: '/' },
                { text: 'About', path: '/about' },
                { text: 'Blog', path: '/blog' },
                { text: 'Solutions', path: '/solutions' },
                { text: 'Contact', path: '/contact' }
              ].map((item) => (
                <Link
                  key={item.text}
                  href={item.path}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                      color: '#4A9DFF',
                      transform: 'translateX(10px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  {item.text}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Services Column */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontSize: '1.5rem',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 60,
                  height: 3,
                  bgcolor: '#4A9DFF'
                }
              }}
            >
              Services
            </Typography>
            <Stack spacing={2}>
              {[
                { text: 'AI Cutting Edge Solutions', path: '/services/ai-solutions' },
                { text: 'Web Solutions', path: '/services/web-solutions' },
                { text: 'Mobile App Development', path: '/services/mobile-app' },
                { text: 'Product Engineering', path: '/services/product-engineering' }
              ].map((service) => (
                <Link
                  key={service.text}
                  href={service.path}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                      color: '#4A9DFF',
                      transform: 'translateX(10px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  {service.text}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Awards & Recognition Column */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontSize: '1.5rem',
                position: 'relative',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 60,
                  height: 3,
                  bgcolor: '#4A9DFF'
                }
              }}
            >
              Recognition
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[
                {
                  // image: '/src/assets/awards/clutch.png',
                  alt: 'Top AI Company',
                  title: 'Top Artificial Intelligence Companies in India',
                  height: 100
                },
                {
                  // image: '/src/assets/awards/upwork.png',
                  alt: 'Upwork',
                  title: '99% Job Success',
                  height: 50
                },
                // {
                //   image: '/src/assets/awards/goodfirms.png',
                //   alt: 'GoodFirms',
                //   title: 'Best IoT companies in India',
                //   height: 80
                // }
              ].map((award, index) => (
                <Box
                  key={index}
                  sx={{
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <Box
                    component="img"
                    src={award.image}
                    alt={award.alt}
                    sx={{
                      height: award.height,
                      mb: 1,
                      filter: 'brightness(0.9)',
                      '&:hover': {
                        filter: 'brightness(1)'
                      },
                      transition: 'filter 0.3s ease'
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '0.9rem',
                      lineHeight: 1.4
                    }}
                  >
                    {award.title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Links */}
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            © 2024 Harsh.AI. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            {['Terms', 'Privacy', 'Cookies Policy'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`}
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  '&:hover': {
                    color: '#4A9DFF'
                  },
                  transition: 'color 0.3s ease'
                }}
              >
                {item}
              </Link>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;