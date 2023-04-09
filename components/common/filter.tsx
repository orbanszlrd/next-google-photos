import { FunctionComponent } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './filter.module.scss';

export interface FilterProps {
  placeholder: string;
  filter: string;
  setFilter: Function;
}

const Filter: FunctionComponent<FilterProps> = ({
  placeholder,
  filter,
  setFilter,
}) => {
  return (
    <div className={styles.filter}>
      <div>
        <FaSearch role="img" aria-hidden="true" />
      </div>
      <input
        type="search"
        placeholder={placeholder}
        aria-label={placeholder}
        value={filter}
        autoComplete="off"
        onInput={(e: React.FormEvent<HTMLInputElement>) =>
          setFilter(e.currentTarget.value)
        }
      />
    </div>
  );
};

export default Filter;
