import { FunctionComponent } from 'react';
import styles from './footer.module.scss';

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <small>&copy; 2022 orbanszlrd</small>
    </footer>
  );
};

export default Footer;
