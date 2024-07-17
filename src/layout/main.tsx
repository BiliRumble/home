import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { FaClock, FaHeart, FaTag } from 'react-icons/fa';

import useGTM from '../hooks/useGTM';
import useScreen from '../hooks/useScreen';
import { Section } from '../components/Setion/Section';
import SKILLS from '../data/Skills';
import PROJECTS from '../data/Projects';
import { SectionTitle } from '../components/Setion/title/sectionTitle';
import { DevBadge } from '../components/devBadge/devBadge';
import { ProjectCard } from '../components/Cards/ProjectCard/projectCard';

export default function Main() {
  const screen = useScreen();
  const isSmall = screen === 'tablet' || screen === 'mobile';

  const time = useGTM(+8);

  return (
    <Flex
      alignItems={'center'}
      justifyContent={'center'}
      flexDir={'column'}
      gap={'20px'}
      width={'100%'}
      mt={'25px'}
      zIndex={'10'}
    >
      <Image
        alt="rumble's GitHub avatar"
        src={'https://avatars.githubusercontent.com/u/109781840?v=4'}
        borderRadius={'50%'}
        width={'10vw'}
      />

      <Heading size={isSmall ? '2xl' : '4xl'}>Hi!🤪 I&apos;m bilirumble</Heading>
      <Heading size={isSmall ? 'xl' : '2xl'} color={'inherit'}>A student from China</Heading>

      <Flex
        mt={'50px'}
        w={'95%'}
        maxWidth={'720px'}
        justifyContent={'space-between'}
        fontFamily={'rainyhearts'}
        userSelect={'none'}
        gap={'10px'}
      >
        <Section p={'10px 20px'} alignItems={'center'} gap={'7px'}>
          <FaClock size={'15px'} /> {time}
        </Section>

        <Section p={'10px 20px'} alignItems={'center'} gap={'7px'}>
          <FaTag size={'15px'} /> He/Him/他
        </Section>

        <Section p={'10px 20px'} alignItems={'center'} gap={'7px'}>
          <FaHeart size={'15px'} /> otto: 我喜欢你
        </Section>
      </Flex>

      <Section p={'10px 20px'} flexDir={'column'} maxWidth={'95%'}>
        <SectionTitle>About me</SectionTitle>

        <Text
          maxWidth={'700px'}
          letterSpacing={'1px'}
          fontWeight={'hairline'}
          opacity={'.8'}
        >
          I come from China and have a special fondness for Java and TypeScript.
          I like anime, games, and other strange things.
        </Text>
      </Section>

      <Flex
        flexDir={'column'}
        alignItems={'center'}
        gap={'20px'}
        mt={'70px'}
      >
        <Heading color={'inherit'} size={'lg'}>
          Skills
        </Heading>

        {SKILLS.map((group, i) => (
          <Section
            key={i}
            p={'10px 20px'}
            flexDir={'column'}
            maxWidth={'700px'}
            width={'95%'}
          >
            <Heading color={'inherit'} size={'lg'}>
              {group.title}
            </Heading>

            <Box width={'100%'} mt={'10px'}>
              {group.skills.map((skill, j) => (
                <DevBadge key={j}>{skill}</DevBadge>
              ))}
            </Box>
          </Section>
        ))}
      </Flex>

      <Flex
        flexDir={'column'}
        alignItems={'center'}
        maxW={'95%'}
        width={'95%'}
      >
        <Heading color={'inherit'} size={'lg'}>
          Projects
        </Heading>

        <Flex
          flexDirection={'row'}
          gap={'20px'}
          my={'70px'}
          flexWrap={'wrap'}
        >
          {PROJECTS.map(({ description, ...work }, i) => (
          <ProjectCard key={i} {...work}>
            {description}
          </ProjectCard>
        ))}
        </Flex>
      </Flex>
    </Flex>
  );
}