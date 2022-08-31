import { parseISO, format } from 'date-fns';
import { FunctionComponent } from 'react';

import styles from './date.module.scss';

export interface DateProps {
  dateString: string;
}

const Date: FunctionComponent<DateProps> = ({ dateString }) => {
  const date = parseISO(dateString);
  return (
    <time className={styles.date} dateTime={dateString}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  );
};

export default Date;
