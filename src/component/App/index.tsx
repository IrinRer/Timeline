import HorizontalLine from 'component/Line/HorizontalLine';
import VerticalLine from 'component/Line/VericalLine';
import Sliders from 'component/Sliders';
import React from 'react';
import styles from './index.module.scss';

const App = () => {
  return (
    <div className={styles.wrapper_main}>
      <VerticalLine />
      <div className={styles.wrapper}>
        <Sliders />
      </div>
      <HorizontalLine />
    </div>
  );
};

export default App;
