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
    'SQL',
    'TypeScript',
  ],
};

const frameworks: SkillGroup = {
  title: '📚 Frameworks and Libraries',
  skills: [
    'ChakraUI',
    'Express',
    'GitHub Actions',
    'Junit',
    'JWT',
    'React',
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
    'Intellij IDEA',
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