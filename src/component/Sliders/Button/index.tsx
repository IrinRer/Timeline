import React from 'react';
import SlideNextButton from './ButtonNext';
import SlidePrevButton from './ButtonPrev';
import styles from './index.module.scss';

interface IProps {
  mainRef: string;
}

const Button: React.FC<IProps> = ({ mainRef }) => {
  return (
    <div className={styles.wrapper_btn}>
      <SlidePrevButton mainRef={mainRef} />
      <SlideNextButton mainRef={mainRef} />
    </div>
  );
};

export default Button;
