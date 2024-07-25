import { Flex } from '@chakra-ui/react';

import Footer from './footer/footer';
import styles from './layout.module.css';
import Navbar from './navbar/navbar';
import Main from './main';
import CanvasBackground from '../components/BackGround/background';

export default function Layout() {
  return (
    <Flex
      flexDir={'column'}
      width={'100vw'}
      className={styles.layout}
    >
      <CanvasBackground />
      <Navbar />

      <Flex pt={'100px'} pb={'50px'} width={'100%'}>
        <Main />
      </Flex>

      <Footer />
    </Flex>
  );
}