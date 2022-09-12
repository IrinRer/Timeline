import React from 'react';
import { useSwiper } from 'swiper/react';
import gsap from 'gsap';
import styles from './index.module.scss';

interface IProps {
  mainRef: string;
}

const SlidePrevButton: React.FC<IProps> = ({ mainRef }) => {
  const swiper = useSwiper();

  const handlerClick = () => {
    swiper.slidePrev();
    gsap.from(mainRef, { duration: 1.5, opacity: 0.2 });
  };

  return (
    <button className={styles.btn_prev} type="button" onClick={handlerClick} />
  );
};

export default SlidePrevButton;
