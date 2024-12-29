import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  level: string;
  link: string;
}

export function ProjectCard({ title, description, level, link }: ProjectCardProps) {
  return (
    <div className="matrix-card p-6">
      <h3 className="text-xl font-mono matrix-glow mb-2">{title}</h3>
      <p className="matrix-text mb-2">{description}</p>
      <p className="text-sm opacity-80 mb-4">Level: {level}</p>
      <Link to={link} className="matrix-button inline-block">
        Access →
      </Link>
    </div>
  );
}