export type Skill = {
  name: string;
  iconName: string;
  filters: string[];
};

export const SKILLS: Skill[] = [
  {
    name: 'HTML',
    iconName: 'html',
    filters: ['web', 'fe'],
  },
  {
    name: 'CSS',
    iconName: 'css',
    filters: ['web', 'fe'],
  },
  {
    name: 'SASS',
    iconName: 'sass',
    filters: ['web', 'fe'],
  },
  {
    name: 'Tailwind CSS',
    iconName: 'tailwind',
    filters: ['web', 'fe'],
  },
  {
    name: 'Javascript',
    iconName: 'js',
    filters: ['web', 'fe'],
  },
  {
    name: 'Typescript',
    iconName: 'ts',
    filters: ['web', 'fe'],
  },
  {
    name: 'React',
    iconName: 'react',
    filters: ['web', 'fe'],
  },
  {
    name: 'Angular',
    iconName: 'angular',
    filters: ['web', 'fe'],
  },
  {
    name: 'AngularJS',
    iconName: 'angularjs',
    filters: ['web', 'fe'],
  },
  // {
  //   name: 'Next.js',
  //   icon: reactIcon,
  //   filters: ['web', 'fe'],
  // },
  {
    name: 'Node.js',
    iconName: 'nodejs',
    filters: ['web', 'be'],
  },
  {
    name: 'Git',
    iconName: 'git',
    filters: ['web', 'be'],
  },
  // {
  //   name: 'MongoDB',
  //   icon: reactIcon,
  //   filters: ['web', 'be'],
  // },
  {
    name: 'SQL',
    iconName: 'sql',
    filters: ['web', 'be'],
  },
  {
    name: 'MySQL',
    iconName: 'mysql',
    filters: ['web', 'be'],
  },
  {
    name: 'PostgreSQL',
    iconName: 'postgresql',
    filters: ['web', 'be'],
  },
  {
    name: 'C#',
    iconName: 'csharp',
    filters: ['game', 'be'],
  },
  {
    name: 'Unity',
    iconName: 'unity',
    filters: ['game'],
  },
];
