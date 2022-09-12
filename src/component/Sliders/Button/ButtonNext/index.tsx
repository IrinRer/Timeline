import React from 'react';
import { useSwiper } from 'swiper/react';
import gsap from 'gsap';
import styles from './index.module.scss';

const SlideNextButton = () => {
  const swiper = useSwiper();

  const handlerClick = () => {
    swiper.slideNext();
    // gsap.to()
  }

  return (
    <button
      className={styles.btn_next}
      type="button"
      onClick={handlerClick}
    />
  );
};

export default SlideNextButton;
