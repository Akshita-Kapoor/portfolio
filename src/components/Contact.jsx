import React from 'react';
import { TextField, Button } from '@mui/material';

const Contact = () => (
  <section id="contact" className="py-20 max-w-4xl mx-auto px-6 my-16">
    <h2 className="text-3xl font-semibold mb-8 border-b-2 border-indigo-500 inline-block">Contact Me</h2>
    <p className="mb-6">Feel free to reach out to me via email or LinkedIn.</p>
    <ul className="mb-8 space-y-2 text-indigo-400">
      <li>Email: <a href="mailto:your.email@example.com" className="hover:underline">your.email@example.com</a></li>
      <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="hover:underline">linkedin.com/in/yourprofile</a></li>
    </ul>

    {/* Simple contact form - non-functional */}
    <form className="space-y-6 max-w-md">
      <TextField fullWidth label="Name" variant="outlined" required />
      <TextField fullWidth label="Email" variant="outlined" type="email" required />
      <TextField fullWidth label="Message" variant="outlined" multiline rows={4} required />
      <Button variant="contained" color="primary" type="submit">Send Message</Button>
    </form>
  </section>
);

export default Contact;
