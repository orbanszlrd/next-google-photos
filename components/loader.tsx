import { FunctionComponent } from 'react';
import { FaSpinner } from 'react-icons/fa';
import styles from './loader.module.scss';

const Loader: FunctionComponent = () => {
  return (
    <div className={styles.loader}>
      <FaSpinner className={styles.spinner} />
    </div>
  );
};

export default Loader;
