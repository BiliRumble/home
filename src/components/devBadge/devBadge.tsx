import { Text, useColorMode } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import * as FA from 'react-icons/fa';
import * as SI from 'react-icons/si';

import { Section } from '../Setion/Section';

import styles from './devBadge.module.css';
import useGetColor from './hooks/useGetColor';

export type DevBadgeIcon =
  | 'bash'
  | 'css'
  | 'html'
  | 'java'
  | 'javascript'
  | 'markdown'
  | 'node.js'
  | 'python'
  | 'sass'
  | 'sql'
  | 'typescript'
  | 'express'
  | 'github-actions'
  | 'junit'
  | 'react'
  | 'apache'
  | 'apache-maven'
  | 'git'
  | 'nginx'
  | 'obs'
  | 'ubuntu'
  | 'visual-studio-code'
  | 'intellij-idea'
  | 'cloudflare'
  | 'github-pages'
  | 'nginx'
  | 'redis'
  | 'vercel'
  | 'vite'
  | 'chakraui'
  | 'jenkins'
  | 'github'
  | 'gradle'
  | 'cloudflare-workers'
  | 'jwt'
  | 'socket.io'
  | 'docker'
  // Types
  | 'hacking';

export const icons: { [key in DevBadgeIcon]: IconType } = {
  'apache-maven': SI.SiApachemaven,
  'github-actions': SI.SiGithubactions,
  'github-pages': SI.SiGithubpages,
  'node.js': SI.SiNodedotjs,
  'visual-studio-code': SI.SiVisualstudiocode,
  'intellij-idea': SI.SiIntellijidea,
  apache: SI.SiApache,
  bash: SI.SiTermius,
  cloudflare: SI.SiCloudflare,
  css: SI.SiCss3,
  express: SI.SiExpress,
  html: SI.SiHtml5,
  java: FA.FaJava,
  javascript: SI.SiJavascript,
  junit: SI.SiJunit5,
  markdown: SI.SiMarkdown,
  nginx: SI.SiNginx,
  python: SI.SiPython,
  react: SI.SiReact,
  sass: SI.SiSass,
  sql: SI.SiMysql,
  git: SI.SiGit,
  redis: SI.SiRedis,
  ubuntu: SI.SiUbuntu,
  obs: SI.SiObsstudio,
  vercel: SI.SiVercel,
  typescript: SI.SiTypescript,
  vite: SI.SiVite,
  chakraui: SI.SiChakraui,
  jenkins: SI.SiJenkins,
  github: SI.SiGithub,
  gradle: SI.SiGradle,
  'cloudflare-workers': SI.SiCloudflareworkers,
  jwt: SI.SiJsonwebtokens,
  'socket.io': SI.SiSocketdotio,
  docker: SI.SiDocker,

  hacking: SI.SiHackthebox,
};

export const colors: { [key in DevBadgeIcon]: string } = {
  bash: '#4EAA25',
  css: '#563d7c',
  html: '#e34c26',
  java: '#B07219',
  javascript: '#F7Ff1E',
  markdown: '#083fa1',
  'node.js': '#68a063',
  python: '#3572A5',
  sass: '#cc6699',
  sql: '#f29111',
  typescript: '#3178C6',
  express: '#FFFFFF',
  'github-actions': '#FFFFFF',
  junit: '#25a162',
  react: '#61DAFB',
  apache: '#D22128',
  'apache-maven': '#C71A36',
  git: '#F05032',
  nginx: '#269539',
  obs: '#FFFFFF',
  ubuntu: '#E95420',
  'visual-studio-code': '#007ACC',
  'intellij-idea': '#FFFFFF',
  cloudflare: '#F38020',
  'github-pages': '#FFFFFF',
  redis: '#DC382D',
  vercel: '#FFFFFF',
  vite: '#646CFF',
  chakraui: '#319795',
  jenkins: '#D24939',
  github: '#FFFFFF',
  gradle: '#02303A',
  'cloudflare-workers': '#F38020',
  jwt: '#e00034',
  'socket.io': '#ffffff',
  docker: '#0db7ed',

  hacking: '#FF0000',
};

export interface DevBadgeProps {
  icon?: DevBadgeIcon;
  children?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function ColoredPoint({ icon }: DevBadgeProps) {
  return(
    <div style={
      {width: '1rem', height: '1rem', background: useGetColor(icon as DevBadgeIcon), border: `solid 3px ${useGetColor(icon as DevBadgeIcon)}`, borderRadius: 99999}
    }/>
  );
};

export function DevBadge({ icon, size, children }: DevBadgeProps) {
  const { colorMode } = useColorMode();

  const label = children || '';
  const iconID =
    icon || (label.toLowerCase().replace(/ /g, '-') as DevBadgeIcon);
  const Icon = icons[iconID];
  const className = styles['badge-' + (size || 'lg')];
  let color = colors[iconID];

  if (color === '#FFFFFF' && false) {
    color = '#000000';
  } else if (color === '#000000' && colorMode === 'dark') {
    color = '#FFFFFF';
  }

  return (
    <Section className={className} display={'inline-flex'}>
      {Icon && <Icon color={color} className={styles.icon} />}
      <Text className={styles.label}>{label}</Text>
    </Section>
  );
}