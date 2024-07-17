interface SkillGroup {
  title: string;
  skills: string[];
}

const languages: SkillGroup = {
  title: '☕ Languages',
  skills: [
    'Bash',
    'CSS',
    'HTML',
    'Java',
    'JavaScript',
    'Markdown',
    'Sass',
    'SQL(just a little)',
    'TypeScript',
  ],
};

const frameworks: SkillGroup = {
  title: '📚 Frameworks and Libraries',
  skills: [
    'ChakraUI',
    'Express',
    'GitHub Actions',
    'JWT',
    'React',
    'TailwindCSS',
    'Vite',
  ],
};

const tools: SkillGroup = {
  title: '🛠️ Tools',
  skills: [
    'Apache',
    'Apache Maven',
    'Kali',
    'Docker',
    'Git',
    'Gradle',
    'Nginx',
    'OBS',
    'Jetbrains IDEA',
    'Ubuntu',
    'Visual Studio Code',
  ],
};

const clouds: SkillGroup = {
  title: '☁️ Clouds and Providers',
  skills: [
    'Cloudflare',
    'Cloudflare Workers',
    'GitHub',
    'Vercel',
  ],
};

const SKILLS: SkillGroup[] = [languages, frameworks, tools, clouds];

export default SKILLS;