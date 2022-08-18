import Header from './header';
import Footer from './footer';

import styles from './layout.module.scss';
import { FunctionComponent } from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
