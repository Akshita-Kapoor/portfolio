import React from 'react';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Tailwind CSS', level: 80 },
  { name: 'Material UI', level: 75 },
  { name: 'Git & GitHub', level: 85 },
];

const Skills = () => (
  <section id="skills" className="py-20 max-w-4xl mx-auto px-6">
    <h2 className="text-3xl font-semibold mb-8 border-b-2 border-indigo-500 inline-block">Skills</h2>
    <div className="space-y-6">
      {skills.map(({ name, level }) => (
        <div key={name}>
          <div className="flex justify-between mb-1">
            <span>{name}</span>
            <span>{level}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-4">
            <div
              className="bg-indigo-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
