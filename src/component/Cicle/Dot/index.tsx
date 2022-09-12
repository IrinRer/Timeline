import React from 'react';
import classnames from 'classnames';
import gsap from 'gsap';
import { BLUE_BLACK } from 'constants/common';
import { useAppDispatch } from 'customHooks/redux/useAppDispatch';
import { useAppSelector } from 'customHooks/redux/useAppSelector';
import { getSection, getSections } from 'store/historyDate/selectors';
import { setSection } from 'store/historyDate/slice';
import styles from './index.module.scss';

const Dots = () => {
  const sections = useAppSelector(getSections);
  const section = useAppSelector(getSection);
  const dispatch = useAppDispatch();

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
    dispatch(setSection(e.target.dataset.section));
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
    <>
      {sections.map((item: string) => {
        if (item === section) {
          return (
            <div
             key={item}
              data-section={item}
              className={classnames(styles[item], {
                [styles.active_dot]: section === item,
              })}
            />
          );
        }

        return (
          <div
            key={item}
            onMouseEnter={onEnter}
            onClick={handlerClick}
            onMouseLeave={onLeave}
            data-section={item}
            className={classnames(styles[item], {
              [styles.active_dot]: section === item,
            })}
          />
        );
      })}
    </>
  );
};

export default Dots;
