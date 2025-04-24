import Card from './Card';
import { Skill, SKILLS } from '../data/skillList';
import { icons } from '../utils/icons';

export default function Skills({ filter }: { filter?: string }) {
  const filteredSkills: Skill[] = filter ? SKILLS.filter(skill => skill.filters.includes(filter || '')) : SKILLS;

  function deriveSkills(skill: Skill, index: number) {
    const isLast = index === filteredSkills.length - 1;
    const remainder = filteredSkills.length % 3;

    const centerLastIn3Cols = isLast && remainder === 1;

    return (
      <div
        key={skill.name}
        className={`flex flex-col items-center ${centerLastIn3Cols ? 'lg:col-span-1 lg:col-start-2' : ''}`}
      >
        <img src={icons[skill.iconName.toLowerCase()]} alt={`${skill.name} logo`} className="w-16 h-16" />
        <span className="text-xs">{skill.name}</span>
      </div>
    );
  }

  return (
    <Card title="Skills">
      <div className="
        grid grid-cols-4 md:grid-cols-8 lg:grid-cols-3 gap-4
        lg:min-w-44 xl:min-w-52 p-2
        lg:[&>div:nth-child(3n+1):not(:last-child)]:translate-y-8
        lg:[&>div:nth-child(3n):not(:last-child)]:translate-y-8
      ">
        {filteredSkills.map((skill, index) => deriveSkills(skill, index))}
      </div>
    </Card>
  )
}