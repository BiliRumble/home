import { Flex } from '@chakra-ui/react';

import Footer from './footer/footer';
import styles from './layout.module.css';
import Navbar from './navbar/navbar';
import Main from './main';
import bg from '../assets/bg-dark.jpg'

export default function Layout() {
  return (
    <Flex
      flexDir={'column'}
      width={'100vw'}
      bgImage={`url(${bg})`}
      className={styles.layout}
    >
      <Navbar />

      <Flex pt={'100px'} pb={'50px'} width={'100%'}>
        <Main />
      </Flex>

      <Footer />
    </Flex>
  );
}