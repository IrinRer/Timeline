import React from 'react';
import { useSwiper } from 'swiper/react';
import styles from './index.module.scss';

const SlideNextButton = () => {
  const swiper = useSwiper();

  const handlerClick = () => {
    swiper.slideNext();
  };

  return (
    <button className={styles.btn_next} type="button" onClick={handlerClick} />
  );
};

export default SlideNextButton;
