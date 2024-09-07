import React from 'react';
import { Badge } from './ui/badge';

interface ProjectCardProps {
  header: string;
  description: string;
  techs: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ header, description, techs }) => {
  return (
    <div className="duration-400 flex min-w-full items-start gap-x-6 rounded-lg p-6 text-slate-200 shadow-lg shadow-[#0d1622] transition-all hover:bg-gray-700/10">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-100">{header}</h3>
        <p className="mb-6 mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
        <div className="flex flex-wrap gap-2">
          {techs.map((tech, index) => (
            <Badge
              key={index}
              className="rounded-full bg-[#112240] px-3 py-1 text-xs font-medium text-[#64ffda] hover:bg-[#112240]"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
