import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { FaClock, FaTag } from 'react-icons/fa';

import useGTM from '../hooks/useGTM';
import useScreen from '../hooks/useScreen';
import { Section } from '../components/Setion/Section';
import SKILLS from '../data/Skills';
import PROJECTS from '../data/Projects';
import { SectionTitle } from '../components/Setion/title/sectionTitle';
import { DevBadge } from '../components/devBadge/devBadge';
import { ProjectCard } from '../components/Cards/ProjectCard/projectCard';
import { useEffect, useState } from 'react';
import { get } from '../utils/useHttpTools';

import styles from './main.module.css';
import Player from '../components/Player/Player';

export default function Main() {
  const [hitokoto, setHitokoto] = useState<string>('');

  const screen = useScreen();
  const isSmall = screen === 'tablet' || screen === 'mobile';

  const time = useGTM(+8);

  useEffect(() => {
    fetchHitokoto()
    getGeo()
  });
  
  const fetchHitokoto = async () => {
    if (hitokoto.length > 0) return;
    let lastFetchTime = 0;

    const currentTime = new Date().getTime();
    if (currentTime - lastFetchTime < 60000) {
      console.debug('Hitokoto fetch rate limit exceeded');
      return;
    }

    lastFetchTime = currentTime;

    const cacheKey = 'hitokoto_cache';
    const cacheSize = 10;
  
    try {
      // 尝试从API获取一言
      const url = localStorage.getItem("geo") === "CN" ? "https://v1.hitokoto.cn" : "https://international.v1.hitokoto.cn";
      const response = await get(url);
      const data = response.data;
      const hitokotomsg = `${data.hitokoto}`;
      console.debug("[HITOKOTO D] GET data: ", data);
  
      const cache = localStorage.getItem(cacheKey) ? JSON.parse(localStorage.getItem(cacheKey) as string) : [];

      // 检查新数据是否已经存在于缓存中
      if (cache.includes(hitokotomsg)) {
        console.debug('[HITOKOTO D] New data already exists in cache.');
        return;
      }

      cache.unshift(hitokotomsg);
      console.debug("[HITOKOTO D] Cache before update: ", cache);
  
      if (cache.length > cacheSize) {
        cache.pop();
        console.debug("[HITOKOTO D] Cache size exceeded, removed last item.");
      }
  
      localStorage.setItem(cacheKey, JSON.stringify(cache));
      console.debug("[HITOKOTO D] Cache updated: ", cache);
  
      setHitokoto(hitokotomsg);
    } catch (e) {
      console.error("[HITOKOTO CATCH E] ", e);

      if (localStorage.getItem(cacheKey) == null) {
        console.error("[HITOKOTO CATCH E] No cache found, use error msg.");
        setHitokoto("一言API错误，请稍后再试。");
        return;
      }

      let cache = localStorage.getItem(cacheKey) ? JSON.parse(localStorage.getItem(cacheKey) as string) : [];
      const randomIndex = Math.floor(Math.random() * cache.length);
      console.debug("[HITOKOTO CATCH W] Will use cache: ", cache[randomIndex]);
      setHitokoto(cache[randomIndex]);
    }
  }    
  
  const getGeo = async () => {
    if (localStorage.getItem("geo") !== null) return;

    try {
      const data = (await get('https://ipapi.co/json/')).data;
      localStorage.setItem("geo", data.country);
      console.debug("[GGIFC D] GET data: ", data)
    } catch (e) {
      console.error("[GGIFC E] ", e);
      localStorage.setItem("geo", "CN"); // 猜一波,连不上一般是大陆的
      console.warn("[GGIFC W] Guess geo: CN")
    }
  }
  
  const avatar = localStorage.getItem("geo") === "CN" ? "https://q.qlogo.cn/headimg_dl?dst_uin=2951327332&spec=640&img_type=jpg" : "https://avatars.githubusercontent.com/u/109781840?v=4";

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
      <Player></Player>
      <Image
        alt="rumble's avatar"
        src={avatar}
        borderRadius={'50%'}
        className={styles.avatar}
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
        className={styles.siminfo}
      >
        <Flex className={styles.infos}>
          <Section className={styles.time} p={'10px 20px'} alignItems={'center'} gap={'7px'}>
            <FaClock size={'15px'} /> {time}
          </Section>

          <Section className={styles.tags} p={'10px 20px'} alignItems={'center'} gap={'7px'}>
            <FaTag size={'15px'} /> He/Him/他
          </Section>
        </Flex>

        <Section className={styles.hitokoto} width={'auto'} p={'10px 20px'} alignItems={'center'} gap={'7px'}>
          {hitokoto}
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
          flexWrap={'wrap'}
          justifyContent={'center'}
          gap={'20px'}
          my={'70px'}
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