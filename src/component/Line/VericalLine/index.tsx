import React from 'react';
import styles from './index.module.scss';

const VerticalLine = () => {
  return (
    <div className={styles.wrapper_line_vertical}>
      <div className={styles.line_vertical} />
      <div className={styles.line_vertical} />
      <div className={styles.line_vertical} />
    </div>
  );
};

export default VerticalLine;
