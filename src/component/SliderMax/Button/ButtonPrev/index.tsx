import React from 'react';
import { useSwiper } from 'swiper/react';
import styles from './index.module.scss';

const SlidePrevButton = () => {
  const swiper = useSwiper();

  return (
    <button
      className={styles.btn_prev}
      type="button"
      onClick={() => swiper.slidePrev()}
    />
  );
};

export default SlidePrevButton;