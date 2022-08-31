import { FunctionComponent, useEffect } from 'react';
import styles from './layout.module.scss';
import Header from './header';
import Footer from './footer';
import { Theme } from 'types/theme';
import { RootState } from 'app/store';
import { useSelector } from 'react-redux';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const theme: Theme = useSelector(
    (state: RootState) => state.photoLibrary.theme
  );

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
