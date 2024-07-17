import { DevBadgeIcon } from '../components/devBadge/devBadge';
import { Link } from '../utils/linkType';

interface Projects {
  title: string;
  isPrivate: boolean;
  language?: DevBadgeIcon;
  description: string;
  srclink?: Link;
}

const PROJECTS: Projects[] = [
  {
    title: 'Website',
    isPrivate: false,
    language: 'typescript',
    description: "A Minecraft server's website.",
    srclink: {
      url: 'https://github.com/WhCraftMC/Website',
      type: 'source_code',
      vendor: 'github'
    }
  },
  {
    title: 'LightCord',
    isPrivate: true,
    language: 'java',
    description: 'Patch for Waterfall to fix Exploits and add new functionalities.',
    srclink: {
      url: 'https://github.com/WhCraftMC/LightCord',
      type: 'source_code',
      vendor: 'github'
    },
  },
];

export default PROJECTS;