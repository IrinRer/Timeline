import React from 'react';
import SlideNextButton from './ButtonNext';
import SlidePrevButton from './ButtonPrev';
import styles from './index.module.scss';

const Button = () => {
  return (
    <div className={styles.wrapper_btn}>
      <SlidePrevButton />
      <SlideNextButton />
    </div>
  );
};

export default Button;
