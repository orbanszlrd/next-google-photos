import Link from 'next/link';
import { FunctionComponent } from 'react';
import { FaGithub } from 'react-icons/fa';
import styles from './navbar.module.scss';
import ThemeToggler from './theme-toggler';

const Navbar: FunctionComponent = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.left}>
        <li>
          <Link href="/">
            <span>Photostream</span>
          </Link>
        </li>
        <li>
          <Link href="/albums">
            <span>Albums</span>
          </Link>
        </li>
      </ul>

      <ul className={styles.right}>
        <li>
          <ThemeToggler />
        </li>
        <li>
          <a
            href="https://github.com/orbanszlrd/next-google-photos"
            title="GitHub"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className={styles.icon} role="img" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
