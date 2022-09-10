import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import React, { useRef, useEffect } from 'react';
import styles from './index.module.scss';

gsap.registerPlugin(TextPlugin);

const Cicle = () => {
  const boxRef = useRef<any>();
  
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      scale: 3,
      background: 'white',
      border: '0.1px solid black',
      fontSize: '20px',
      ease: 'none',
    });
  };

  const handlerClick = () => {
    gsap.to(boxRef.current, { rotation: '+=30' });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      scale: 1,
      background: 'black',
      border: 'none',
      x: 0,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.cicle} ref={boxRef}>
        <div
          className={styles.dot_science}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          data-section="science"
        >
          <span className={styles.span}>Наука</span>
        </div>
        <div
          className={styles.dot_music}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          data-section="music"
        >
          <span className={styles.span}>Музыка</span>
        </div>
        <div
          className={styles.dot_movie}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          data-section="movie"
        >
          <span className={styles.span}>Кино</span>
        </div>
        <div
          className={styles.dot_literature}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          data-section="literature"
        >
          <span className={styles.span}>Литература</span>
        </div>
      </div>
    </div>
  );
};

export default Cicle;
