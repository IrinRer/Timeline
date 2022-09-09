import Cicle from 'component/Cicle';
import HorizontalLine from 'component/Line/HorizontalLine';
import VerticalLine from 'component/Line/VericalLine';
import Sliders from 'component/Sliders';
import TextHistoricalDate from 'component/TextHistorilDate';
import React from 'react';
import styles from './index.module.scss';

const App = () => {
  return (
    <div className={styles.wrapper_main}>
      <VerticalLine />
      <div className={styles.wrapper}>
      <TextHistoricalDate />
        <div className={styles.wrapper_cicle}>
          <Cicle />
        </div>
        <Sliders />
      </div>
      <HorizontalLine />
    </div>
  );
};

export default App;
