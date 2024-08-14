import React, { useState } from 'react';
import land from '../Assets/land.jpg';
import aboutImage from '../Assets/about.png';
import logo from '../Assets/logo.png';
import { AppBar, Toolbar, Typography, Button, Box, Grid, Card, CardContent, IconButton, Link } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import GroupIcon from '@mui/icons-material/Group';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Login from './Login';
import Modal from './Modal';
import Signup from './Signup';

function LandingPage({ onLogin }) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const switchToLogin = () => setIsLogin(true);
  const switchToSignup = () => setIsLogin(false);

  const onLoginHandler = (username) => {
    onLogin(username);
    closeModal();
  };

  return (
    <div>
        {/* Header */}
        <AppBar position="fixed" style={{ backgroundColor: 'white', fontSize: '1.2rem' }}>
        <Toolbar>
          <Box display="flex" alignItems="center" style={{ flexGrow: 1 }}>
            <img src={logo} alt="FitFreak Logo" style={{ height: '40px', marginRight: '8px' }} />
            <Typography variant="h4">
              <span style={{ color: 'black' }}>Fit</span>
              <span style={{ color: 'rgb(255, 83, 83)' }}>Freak</span>
            </Typography>
          </Box>
          <Button style={{ color: 'rgb(255, 83, 83)' }} onClick={() => scrollToSection('home')}>Home</Button>
          <Button style={{ color: 'rgb(255, 83, 83)' }} onClick={() => scrollToSection('about')}>About Us</Button>
          <Button style={{ color: 'rgb(255, 83, 83)' }} onClick={() => scrollToSection('services')}>Services</Button>
          <Button style={{ color: 'rgb(255, 83, 83)' }} onClick={openModal}>Log in</Button>
        </Toolbar>
      </AppBar>

      {/* Modal for Login/Signup */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {isLogin ? (
          <Login switchToSignup={switchToSignup} onClose={closeModal} onLogin={onLoginHandler} />
        ) : (
          <Signup switchToLogin={switchToLogin} onClose={closeModal} />
        )}
      </Modal>

      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          backgroundImage: `url(${land})`,
          backgroundSize: 'cover',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          marginTop: '64px',
        }}
      >
        <Typography variant="h2" gutterBottom>
          Eat Mindfully, Sweat Often & Self Love Always
        </Typography>
        <Typography variant="h5" gutterBottom>
          Finding Balance in Food, Health, and Wellness
        </Typography>
        <Box mt={4}>
          <Button variant="contained" style={{ backgroundColor: 'rgb(255, 83, 83)', marginRight: '1rem' }}>Contact Us</Button>
          <Button variant="outlined" style={{ color: 'white', borderColor: 'white' }}>Learn More</Button>
        </Box>
      </Box>

      {/* About Us Section */}
      <Box id="about" sx={{ padding: '4rem 2rem', textAlign: 'center', display: 'flex', alignItems: 'center' }}>
        <img src={aboutImage} alt="About Us" style={{ width: '100%', marginRight: '2rem', borderRadius: '8px' }} />
        <Box>
          <Typography variant="h4" gutterBottom style={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>
            About Us
          </Typography>
          <Typography variant="h6" paragraph>
            FitFreak is a comprehensive health and wellness platform designed to help you achieve your fitness goals and improve your overall well-being. In today's fast-paced world, maintaining a balanced lifestyle can be challenging. That's why FitFreak is here to guide you on your journey to a healthier you.
          </Typography>
          <Typography variant="h6" paragraph>
            Our platform integrates various aspects of personal health, including workout tracking, mental health resources, and nutritional guidance. We believe that true wellness is achieved through a holistic approach, and our mission is to empower you with the tools and support you need to thrive.
          </Typography>
          <Typography variant="h6" paragraph>
            Whether you're just starting out or are a seasoned fitness enthusiast, FitFreak offers personalized insights and recommendations tailored to your unique needs. Our community of like-minded individuals is here to motivate and inspire you every step of the way.
          </Typography>
        </Box>
      </Box>

      {/* Our Services Section */}
      <Box id="services" sx={{ padding: '4rem 2rem', backgroundColor: '#f8f8f8' }}>
        <Typography variant="h4" gutterBottom style={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>
          Our Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              icon: <FitnessCenterIcon sx={{ fontSize: 70, color: 'rgb(255, 83, 83)' }} />,
              title: 'Personalized Workouts',
              description: 'Tailored exercise plans to meet your fitness goals, whether you\'re a beginner or an athlete.',
            },
            {
              icon: <PsychologyIcon sx={{ fontSize: 70, color: 'rgb(255, 83, 83)' }} />,
              title: 'Mental Care',
              description: 'Tools and resources to support your mental well-being and manage stress effectively.',
            },
            {
              icon: <FastfoodIcon sx={{ fontSize: 70, color: 'rgb(255, 83, 83)' }} />,
              title: 'Diet Plans',
              description: 'Nutritional guidance and meal plans to complement your fitness journey.',
            },
            {
              icon: <GroupIcon sx={{ fontSize: 70, color: 'rgb(255, 83, 83)' }} />,
              title: 'Community Support',
              description: 'Join a community of like-minded individuals to share experiences and stay motivated.',
            },
          ].map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <Card sx={{ padding: '2rem', textAlign: 'center', boxShadow: 3, height: '400px' }}>
                      <CardContent>
                        {service.icon}
                        <Typography variant="h6" gutterBottom>
                          {service.title}
                        </Typography>
                        <Typography>
                          {service.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="flip-card-back">
                    <Card sx={{ padding: '2rem', textAlign: 'center', boxShadow: 3, backgroundColor: '#f8f8f8', height: '400px' }}>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {service.title}
                        </Typography>
                        <Typography>
                          More Details Coming Soon!
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          padding: '2rem 1rem',
          color: 'black',
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Follow Us
        </Typography>
        <Box sx={{ marginBottom: '1rem' }}>
          <IconButton component={Link} href="https://www.facebook.com" target="_blank" sx={{ color: 'black' }}>
            <FacebookIcon />
          </IconButton>
          <IconButton component={Link} href="https://twitter.com" target="_blank" sx={{ color: 'black' }}>
            <TwitterIcon />
          </IconButton>
          <IconButton component={Link} href="https://www.instagram.com" target="_blank" sx={{ color: 'black' }}>
            <InstagramIcon />
          </IconButton>
          <IconButton component={Link} href="https://www.linkedin.com" target="_blank" sx={{ color: 'black' }}>
            <LinkedInIcon />
          </IconButton>
        </Box>
        <Typography variant="body2">
          © {new Date().getFullYear()} FitFreak. All rights reserved.
        </Typography>
      </Box>

      <style>
        {`
          .flip-card {
            background-color: transparent;
            width: 300px;
            height: 400px;
            perspective: 1000px;
            margin: 0 auto;
          }

          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }

          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }

          .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
          }

          .flip-card-front {
            background-color: white;
            color: black;
          }

          .flip-card-back {
            background-color: #f8f8f8;
            color: black;
            transform: rotateY(180deg);
          }
        `}
      </style>
    </div>
  );
}

export default LandingPage;
