import React from 'react';
import styles from './index.module.scss';
import Dots from './Dot';

interface IProps {
  children: React.ReactNode;
}

const Cicle: React.FC<IProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cicle}>{children}</div>
      <Dots />
    </div>
  );
};

export default Cicle;
