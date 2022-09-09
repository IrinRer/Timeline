import Cicle from 'component/Cicle';
import HorizontalLine from 'component/Line/HorizontalLine';
import VerticalLine from 'component/Line/VericalLine';
import Sliders from 'component/Sliders';
import SlidersMobile from 'component/SlidersMobile';
import TextHistoricalDate from 'component/TextHistorilDate';
import { MOBILE_SIZE } from 'constants/common';
import { useAppDispatch } from 'customHooks/redux/useAppDispatch';
import { useAppSelector } from 'customHooks/redux/useAppSelector';
import { useWindowSize } from 'customHooks/useWindowSize';
import React, {useEffect} from 'react';
import { getDateHistory } from 'store/historyDate/selectors';
import { fetchHistoryDateAction } from 'store/historyDate/thunk';
import styles from './index.module.scss';

const App = () => {
  const windowSize = useWindowSize();
  const dispatch = useAppDispatch();

  useEffect(() => {
   dispatch(fetchHistoryDateAction());
  }, []);

  return (
    <div className={styles.wrapper_main}>
      <VerticalLine />
      <div className={styles.wrapper}>
        <TextHistoricalDate />
        <div className={styles.wrapper_cicle}>
          <Cicle />
        </div>
        {windowSize.width > MOBILE_SIZE ? <Sliders /> : <SlidersMobile />}
      </div>
      <HorizontalLine />
    </div>
  );
};

export default App;
