import React from 'react';
import Button from '@mui/material/Button';

const Hero = () => {
  return (
    <section className="text-center py-20 bg-gray-900 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I’m <span className="text-indigo-400">Your Name</span></h1>
      <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
        I build responsive, beautiful web applications using React, Tailwind, and Material UI.
      </p>
      <Button variant="contained" href="#projects" sx={{ backgroundColor: '#6366f1' }}>
        View My Work
      </Button>
    </section>
  );
};

export default Hero;