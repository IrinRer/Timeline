import { BLUE_BLACK } from 'constants/common';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import React, { useRef } from 'react';
import styles from './index.module.scss';

gsap.registerPlugin(TextPlugin);

const Cicle = ({ children }) => {
  const boxRef = useRef<any>();

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      scale: 2,
      background: 'white',
      border: `0.1px solid ${BLUE_BLACK}`,
      fontSize: '20px',
      ease: 'none',
    });
  };

  const handlerClick = (e) => {
    console.log(e.target.dataset.section)
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      scale: 1,
      background: BLUE_BLACK,
      border: 'none',
      x: 0,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.cicle} ref={boxRef}>
        {children}
      </div>
      <div
        className={styles.dot_science}
        onMouseEnter={onEnter}
        onClick={handlerClick}
        onMouseLeave={onLeave}
        data-section="science"
      />
      <div
        className={styles.dot_music}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={handlerClick}
        data-section="music"
      />
      <div
        className={styles.dot_movie}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={handlerClick}
        data-section="movie"
      />
      <div
        className={styles.dot_literature}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onClick={handlerClick}
        data-section="literature"
      />
    </div>
  );
};

export default Cicle;
