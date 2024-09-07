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
    <div className="duration-400 flex min-w-full flex-col items-start gap-x-6 rounded-lg p-2 text-slate-200 shadow-lg shadow-[#0d1622] transition-all hover:bg-gray-700/10 md:flex-row md:p-6">
      <div className="mb-3 mt-[5px] flex h-max items-center gap-x-[6px] md:mb-0">
        <span className="text-sm text-gray-500">{startDate}</span>
        <div className="h-px w-3 bg-slate-500"></div>
        <span className="text-sm text-gray-500">{endDate}</span>
      </div>

      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-100">
          {header} <span className="mt-1 block md:ml-2 md:inline md:mt-0">@{company}</span>
        </h3>
        <p className="mb-6 mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              className="rounded-full bg-[#112240] px-3 py-1 text-xs font-medium text-[#64ffda]"
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
