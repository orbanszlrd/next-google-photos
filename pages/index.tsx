import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Layout from '../components/layout';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <Link href="/albums">
              <a title="Albums">
                <span>Albums</span>
              </a>
            </Link>
          </h1>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
