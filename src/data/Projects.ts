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
    title: 'Home',
    isPrivate: false,
    language: 'typescript',
    description: "My Website.",
    srclink: {
      url: 'https://github.com/BiliRumble/Home',
      type: 'website',
      vendor: 'github'
    }
  },
  {
    title: 'Mangal',
    isPrivate: false,
    language: 'typescript',
    description: "[WIP?] 一个简单的漫画托管站, 就是不好使:( | This project is preparing for refactoring.",
    srclink: {
      url: "https://github.com/BiliRumble/Mangal",
      type: 'source_code',
      vendor: 'github'
    }
  },
  {
    title: 'Website',
    isPrivate: false,
    language: 'typescript',
    description: "A Minecraft server's website.",
    srclink: {
      url: 'https://github.com/WhCraftMC/Website',
      type: 'website',
      vendor: 'github'
    }
  },
  {
    title: 'LightCord',
    isPrivate: true,
    language: 'java',
    description: '[EOL] Patch for Waterfall to support Forge 1.20.1 and add new functionalities.',
    srclink: {
      url: 'https://github.com/WhCraftMC/LightCord',
      type: 'other',
      vendor: 'github'
    },
  },
];

export default PROJECTS;