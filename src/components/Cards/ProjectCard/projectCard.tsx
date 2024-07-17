import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

import { ColoredPoint, DevBadgeIcon } from '../../devBadge/devBadge';

import styles from './projectCard.module.css';
import { Link } from '../../../utils/linkType';
import { Section } from '../../Setion/Section';
import { FaStar } from 'react-icons/fa';

export interface ProjectCardProps extends PropsWithChildren {
  title: string;
  isPrivate: boolean;
  language?: DevBadgeIcon;
  srclink?: Link;
}

export function ProjectCard({
  title,
  isPrivate,
  language,
  srclink,
  children,
}: ProjectCardProps) {
  return (
    <Section className={styles.section}>
      <a href={srclink?.url} style={{width: '100%'}} rel={'me noopener noreferrer'} target={'_blank'}>
        <Flex
          width={'100%'}
          flexDirection={'column'}
          alignItems={'flex-start'}
        >
          <Flex
            flexDirection={'row'}
            alignItems={'center'}
            flexWrap={'nowrap'}
            justifyContent={'flex-start'}
          >
            <Heading className={styles.title}>{title}</Heading>
            {isPrivate && (<span className={styles.private}>Private</span>)}
          </Flex>
          <Box className={styles.description}>{children}</Box>
        </Flex>

        {language && (
          <Flex
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            flexWrap={'nowrap'}
            marginTop={'1.5rem'}
          >
            <ColoredPoint icon={language}/> <p style={{lineHeight: '1rem', fontSize: '1rem', marginLeft: '.5rem'}}>{language}</p> <p style={{lineHeight: '1rem', fontSize: '1rem', marginLeft: '.5rem'}}><FaStar/> 0</p>
          </Flex>
        )}
      </a>
    </Section>
  );
}