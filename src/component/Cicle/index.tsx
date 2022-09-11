import React from 'react';
import styles from './index.module.scss';
import Dots from './Dot';

const Cicle = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cicle}>{children}</div>
      <Dots />
    </div>
  );
};

export default Cicle;
