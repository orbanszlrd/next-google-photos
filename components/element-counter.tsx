import styles from './element-counter.module.scss';

type ElementCounterProps = {
  count: number;
  text: {
    singular: string;
    plural: string;
  };
};

const ElementCounter = ({ count, text }: ElementCounterProps) => {
  return (
    <div className={styles.count}>
      <small>{`${count} ${count == 1 ? text.singular : text.plural}`}</small>
    </div>
  );
};

export default ElementCounter;
