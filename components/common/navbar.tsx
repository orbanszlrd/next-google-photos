import Link from 'next/link';
import { FunctionComponent } from 'react';
import { FaGithub, FaHome, FaImages } from 'react-icons/fa';
import styles from './navbar.module.scss';
import ThemeToggler from './theme-toggler';

const Navbar: FunctionComponent = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.left}>
        <li>
          <Link href="/">
            <a title="Photostream">
              <FaHome className={styles.icon} />
              <span>Photostream</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/albums">
            <a title="Albums">
              <FaImages className={styles.icon} />
              <span>Albums</span>
            </a>
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
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className={styles.icon} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
