import { FunctionComponent } from 'react';
import styles from './header.module.scss';
import Navbar from './navbar';

const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <Navbar />
    </header>
  );
};

export default Header;
