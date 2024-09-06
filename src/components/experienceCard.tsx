import React from 'react';
import { Badge } from './ui/badge';

interface ExperienceCardProps {
    startDate: string;
    endDate: string;
  header: string;
  company: string;
  description: string;
  skills: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
    startDate,
    endDate,
  header,
  company,
  description,
  skills,
}) => {
  return (
    <div className="flex items-start min-w-full rounded-lg p-2 md:p-6  gap-x-6 text-slate-200 shadow-lg shadow-[#0d1622] hover:bg-gray-700/10 transition-all duration-400 flex-col md:flex-row">
      <div className="flex h-max items-center gap-x-[6px] mt-[5px] mb-3 md:mb-0">
        <span className="text-sm text-gray-500">{startDate}</span>
        <div className="h-px w-3 bg-slate-500"></div>
        <span className="text-sm text-gray-500">{endDate}</span>
      </div>

      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-100">
          {header} <span className="md:ml-2 block mt-1 md:mt-0">@{company}</span>
        </h3>
        <p className="mb-6 mt-2 text-sm text-slate-400 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              className="rounded-full bg-[#112240] py-1 px-3  text-xs font-medium text-[#64ffda]"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
