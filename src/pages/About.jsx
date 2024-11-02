import { Container, Typography, Grid, Paper } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" align="center" gutterBottom>
        About Harsh.AI
      </Typography>
      
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Our Mission
            </Typography>
            <Typography paragraph>
              {`At Harsh.AI, we're committed to pushing the boundaries of artificial intelligence
              to create solutions that make a real difference in people's lives and businesses.`}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Our Vision
            </Typography>
            <Typography paragraph>
              {`We envision a future where AI technology seamlessly integrates with human potential,
              creating a more efficient, innovative, and sustainable world.`}
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12}>
          <Paper sx={{ p: 3, mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Our Team
            </Typography>
            <Typography paragraph>
              {`Our team consists of world-class AI researchers, engineers, and industry experts
              who are passionate about creating next-generation AI solutions.`}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;