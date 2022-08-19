import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Index.module.scss';

import Layout from '../components/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}></div>
    </Layout>
  );
};

export default Home;
