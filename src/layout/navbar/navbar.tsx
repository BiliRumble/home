import {
  Flex,
  Heading,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import {
  FaDiscord,
  FaGithub,
  FaQq,
} from 'react-icons/fa';

import styles from './navbar.module.css';
import useScreen from '../../hooks/useScreen';
import { Section } from '../../components/Setion/Section';

// SocialLink component.
interface SocialLinkProps {
  color: string;
  href: string;
  icon: IconType;
}

function SocialLink({ icon: Icon, href, color }: SocialLinkProps) {
  return (
    <a href={href} rel={'me noopener noreferrer'} target={'_blank'}>
      <IconButton
        aria-label="Social Link"
        icon={<Icon color={color} />}
        variant={'ghost'}
      />
    </a>
  );
}

export default function Navbar() {
  const screen = useScreen();
  const isSmall = screen === 'tablet' || screen === 'mobile';
  const isMid = screen === 'laptop';

  const { colorMode } = useColorMode();
  const bg = colorMode === 'light' ? '#dddb' : '#333b';

  const INITIAL_TOP = isSmall || isMid ? '45px' : '35px';
  const [marginTop, setMarginTop] = useState(INITIAL_TOP);

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollTop > 10) {
        setMarginTop('15px');
      } else {
        setMarginTop(INITIAL_TOP);
      }
    };

    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll, true);
  }, [INITIAL_TOP]);

  return (
    <Flex className={styles.navbar} mt={marginTop}>
      <Section
        className={styles.content}
        justifyContent={isSmall ? 'center' : 'space-between'}
        bg={bg}
      >
        <Flex className={styles.section}>
          {!isSmall && (
            <Flex className={styles.brand}>
              <Heading size={'xl'} className={styles.title}>
                ヾ(≧ ▽ ≦)ゝ
              </Heading>
            </Flex>
          )}

          <a className={styles.link} href="/">home</a>
          <a className={styles.link} href="https://blog.bilirumble.top">blog</a>
        </Flex>

        {!isSmall && (
          <Flex className={styles.section}>
            <SocialLink
              href={'https://github.com/bilirumble'}
              icon={FaGithub}
              color={'#777'}
            />
            <SocialLink
              href={'https://discord.gg/'}
              icon={FaDiscord}
              color={'#5865F2'}
            />
            <SocialLink
              href={'https://wpa.qq.com/msgrd?v=3&uin=2951327332&site=qqq&menu=yes'}
              icon={FaQq}
              color={'#777777'}
            />
          </Flex>
        )}
      </Section>
    </Flex>
  );
}