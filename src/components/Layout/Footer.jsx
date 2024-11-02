// src/components/Layout/Footer.jsx
import { Box, Container, Grid, Typography, Link, Stack } from '@mui/material';

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
                 sx={{ height: 60, mb: 2 }}
            />
            <Typography variant="body2" sx={{ mb: 2 }}>
              123 Tech Street
              <br />
              28660 Delhi, India
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              VAT-ID: IN 123456789
            </Typography>
            <Link 
              href="mailto:info@harsh.ai" 
              sx={{ 
                color: '#4A9DFF', 
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              info@harsh.ai
            </Link>
          </Grid>

          {/* Company Links Column */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 3, fontSize: '1.5rem' }}>
              Company
            </Typography>
            <Stack spacing={2}>
              <Link href="/" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#4A9DFF' } }}>
                Home
              </Link>
              <Link href="/expertise" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#4A9DFF' } }}>
                Expertise
              </Link>
              <Link href="/process" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#4A9DFF' } }}>
                Process
              </Link>
              <Link href="/about" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#4A9DFF' } }}>
                About
              </Link>
              <Link href="/blogs" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#4A9DFF' } }}>
                Blogs
              </Link>
              <Link href="/contact" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#4A9DFF' } }}>
                Contact Us
              </Link>
            </Stack>
          </Grid>

          {/* Services Column */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 3, fontSize: '1.5rem' }}>
              Services
            </Typography>
            <Stack spacing={2}>
              <Link href="/services/algorithmic-trading" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#4A9DFF' } }}>
                Algorithmic Trading
              </Link>
              <Link href="/services/software-development" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#4A9DFF' } }}>
                Software Development
              </Link>
              <Link href="/services/blockchain" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#4A9DFF' } }}>
                Blockchain Software Development
              </Link>
              <Link href="/services/iot" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#4A9DFF' } }}>
                Internet Of Things
              </Link>
              <Link href="/services/ml" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#4A9DFF' } }}>
                Machine Learning Development
              </Link>
              <Link href="/services/ar-vr" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#4A9DFF' } }}>
                AR/VR
              </Link>
            </Stack>
          </Grid>

          {/* Awards & Recognition Column */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Award 1 */}
              <Box>
                <Box component="img" 
                     src="/src/assets/awards/clutch.png" 
                     alt="Top AI Company" 
                     sx={{ height: 100, mb: 1 }}
                />
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Top Artificial Intelligence Companies in India
                </Typography>
              </Box>

              {/* Award 2 */}
              <Box>
                <Box component="img" 
                     src="/src/assets/awards/upwork.png" 
                     alt="Upwork" 
                     sx={{ height: 50, mb: 1 }}
                />
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  99% Job Success
                </Typography>
              </Box>

              {/* Award 3 */}
              <Box>
                <Box component="img" 
                     src="/src/assets/awards/goodfirms.png" 
                     alt="GoodFirms" 
                     sx={{ height: 80, mb: 1 }}
                />
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  Best IoT companies in India
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Links */}
        <Box sx={{ mt: 6, pt: 3, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Stack direction="row" spacing={3} justifyContent="center">
            <Link href="/terms" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#4A9DFF' } }}>
              Terms
            </Link>
            <Link href="/privacy" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#4A9DFF' } }}>
              Privacy
            </Link>
            <Link href="/cookies" sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#4A9DFF' } }}>
              Cookies Policy
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;