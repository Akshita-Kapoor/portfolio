import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

const projects = [
  {
    title: 'Project One',
    description: 'A React app that fetches and displays data from a public API with filters.',
    tech: 'React, Tailwind CSS, Axios',
    github: 'https://github.com/yourusername/project-one',
  },
  {
    title: 'Project Two',
    description: 'Responsive portfolio website showcasing my skills and projects.',
    tech: 'HTML, CSS, JavaScript',
    github: 'https://github.com/yourusername/project-two',
  },
  // Add more projects here
];

const Projects = () => (
  <section id="projects" className="py-20 bg-gray-800 max-w-5xl mx-auto px-6 rounded-lg shadow-lg my-16">
    <h2 className="text-3xl font-semibold mb-10 border-b-2 border-indigo-500 inline-block">Projects</h2>
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map(({ title, description, tech, github }) => (
        <Card key={title} sx={{ backgroundColor: '#1f2937', color: 'white', height: '100%' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>{title}</Typography>
            <Typography variant="body2" sx={{ color: '#9ca3af', marginBottom: 2 }}>{description}</Typography>
            <Typography variant="caption" color="primary">{tech}</Typography>
          </CardContent>
          <CardActions>
            <Button
              href={github}
              target="_blank"
              size="small"
              variant="outlined"
              sx={{ color: 'white', borderColor: 'white' }}
            >
              GitHub
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  </section>
);

export default Projects;
