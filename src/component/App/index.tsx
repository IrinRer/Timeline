import VerticalLine from 'component/Line/VericalLine';
import Sliders from 'component/Sliders';
import SlidersMobile from 'component/SlidersMobile';
import TextHistoricalDate from 'component/TextHistorilDate';
import { MOBILE_SIZE } from 'constants/common';
import { useAppDispatch } from 'customHooks/redux/useAppDispatch';
import { useWindowSize } from 'customHooks/useWindowSize';
import React, {useEffect} from 'react';
import { fetchHistoryDateAction, fetchSectionAction } from 'store/historyDate/thunk';
import styles from './index.module.scss';

const App = () => {
  const windowSize = useWindowSize();
  const dispatch = useAppDispatch();

  useEffect(() => {
   dispatch(fetchHistoryDateAction());
   dispatch(fetchSectionAction());
  }, []);

  return (
    <div className={styles.wrapper_main}>
      <VerticalLine />
      <div className={styles.wrapper}>
        <TextHistoricalDate />
        {windowSize.width > MOBILE_SIZE ? <Sliders /> : <SlidersMobile />}
      </div>
    </div>
  );
};

export default App;
