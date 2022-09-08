import React from 'react';
import { useSwiper } from 'swiper/react';
import styles from './index.module.scss';

const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <button
      className={styles.btn_next}
      type="button"
      onClick={() => swiper.slideNext()}
    />
  );
};

export default SlideNextButton;
