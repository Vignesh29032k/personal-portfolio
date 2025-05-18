import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    to_name : 'Vignesh Jothimurugan',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_uppqeqr',       // Your EmailJS service ID
      'template_hxmgf3n',      // Your EmailJS template ID
      formData,                // Your form data
      'iPYkiBFUjI-74q4N5'      // Your EmailJS public key
    ).then(() => {
        toast.success('Message sent successfully!');
        setFormData({ from_name: '', from_email: '', message: '' });
      }, () => {
        toast.error('Oops! Something went wrong.');
      });
  };

  return (
    <section id="contact">
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>Contact Me</Typography>
        <Typography variant="body1" align="center" paragraph>
          I'd love to hear from you. Fill out the form and I'll get back to you soon!
        </Typography>

        <Box
          component="form"
          onSubmit={sendEmail}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            marginTop: 3
          }}
        >
          <TextField
            label="Name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Email"
            name="from_email"
            type="email"
            value={formData.from_email}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            multiline
            rows={4}
            fullWidth
          />
          <Button variant="contained" color="primary" type="submit">
            Send Message
          </Button>
        </Box>

        {/* Toast notification container */}
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      </Container>
    </section>
  );
};

export default Contact;
