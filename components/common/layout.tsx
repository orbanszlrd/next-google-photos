import { FunctionComponent, useEffect } from 'react';
import styles from './layout.module.scss';
import Header from './header';
import Footer from './footer';
import { Theme } from 'types/theme';
import { RootState } from 'app/store';
import { useSelector } from 'react-redux';
import Head from 'next/head';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const theme: Theme = useSelector((state: RootState) => state.settings.theme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={styles.container}>
      <Head>
        <base href="/" />
        <meta name="theme-color" content="#000" />
        <meta name="application-name" content="Digital Nomad Photos" />
        <meta name="url" content="https://photos.dinodev.hu" />
        <link
          rel="icon"
          type="image/png"
          href="/icons/icon-72.png"
          sizes="16x16 32x32 72x72"
        />
        <link
          rel="icon"
          type="image/png"
          href="/icons/icon-96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href="/icons/icon-128.png"
          sizes="128x128"
        />
        <link
          rel="icon"
          type="image/png"
          href="/icons/icon-144.png"
          sizes="144x144"
        />
        <link
          rel="icon"
          type="image/png"
          href="/icons/icon-152.png"
          sizes="152x152"
        />
        <link
          rel="icon"
          type="image/png"
          href="/icons/icon-192.png"
          sizes="192x192"
        />
        <link
          rel="icon"
          type="image/png"
          href="/icons/icon-384.png"
          sizes="384x384"
        />
        <link
          rel="icon"
          type="image/png"
          href="/icons/icon-512.png"
          sizes="512x512"
        />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <link rel="apple-touch-startup-image" href="/icons/icon-512.png" />
        <link rel="manifest" href="manifest.webmanifest" />
        <meta name="keywords" content="dinodev digital nomad photos" />
        <meta
          name="author"
          content="Szilard Orban; e-mail: orbanszlrd@dinodev.hu"
        />
        <meta name="owner" content="Szilard Orban" />
        <meta name="category" content="travel" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
