import gsap from 'gsap';
import React from 'react';
import { useSwiper } from 'swiper/react';
import styles from './index.module.scss';

interface IProps {
  mainRef: string;
}

const SlideNextButton: React.FC<IProps> = ({ mainRef }) => {
  const swiper = useSwiper();

  const handlerClick = () => {
    gsap.from(mainRef, { duration: 1.5, opacity: 0.2 });
    swiper.slideNext();
  };

  return (
    <button className={styles.btn_next} type="button" onClick={handlerClick} />
  );
};

export default SlideNextButton;
