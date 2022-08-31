import { FunctionComponent } from 'react';
import styles from './element-counter.module.scss';

type ElementCounterProps = {
  count: number;
  text: {
    singular: string;
    plural: string;
  };
};

const ElementCounter: FunctionComponent<ElementCounterProps> = ({
  count,
  text,
}) => {
  return (
    <div className={styles.count}>
      <small>{`${count} ${count == 1 ? text.singular : text.plural}`}</small>
    </div>
  );
};

export default ElementCounter;
