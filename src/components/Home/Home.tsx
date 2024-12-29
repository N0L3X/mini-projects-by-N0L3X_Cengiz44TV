import React from 'react';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: 'Todo App',
    description: 'Eine einfache Todo-Liste mit React',
    level: 'Einfach',
    link: '/todo'
  },
  {
    title: 'Wetter App',
    description: 'Aktuelle Wetterinformationen mit API-Integration',
    level: 'Einfach',
    link: '/weather'
  },
  {
    title: 'Taschenrechner',
    description: 'Ein funktionaler Taschenrechner',
    level: 'Einfach',
    link: '/calculator'
  },
  {
    title: 'Task Manager',
    description: 'Fortgeschrittenes Projektmanagement-Tool',
    level: 'Fortgeschritten',
    link: '/taskmanager'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Datenvisualisierung und Analyse',
    level: 'Fortgeschritten',
    link: '/analytics'
  }
];

export function Home() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Willkommen in meinem Portfolio</h2>
      <p className="mb-4">Hier finden Sie eine Auswahl meiner Projekte:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(project => (
          <ProjectCard key={project.link} {...project} />
        ))}
      </div>
    </div>
  );
}