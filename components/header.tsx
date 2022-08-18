import Navbar from './navbar';

import styles from './header.module.scss';
import { FunctionComponent } from 'react';

const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <Navbar />
    </header>
  );
};

export default Header;
