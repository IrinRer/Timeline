import React from 'react';
import classnames from 'classnames';
import { useAppSelector } from 'customHooks/redux/useAppSelector';
import { getSection, getSections } from 'store/historyDate/selectors';
import { useAppDispatch } from 'customHooks/redux/useAppDispatch';
import { setSection } from 'store/historyDate/slice';
import styles from './index.module.scss';

const HorizontalLine = () => {
  const section = useAppSelector(getSection);
  const sections = useAppSelector(getSections);
  const dispatch = useAppDispatch();

  const handlerClick = (e) => {
    dispatch(setSection(e.target.dataset.section));
  };

  return (
    <div className={styles.wrapper_line_horizontal}>
      {sections.map((item: string) => {
        if (item === section) {
          return (
            <button
              type="button"
              className={classnames(styles.btn, styles.btn_active)}
            >
              {item}
            </button>
          );
        }
        return (
          <button
            type="button"
            className={styles.btn}
            data-section={item}
            onClick={handlerClick}
          >
            {item}
          </button>
        );
      })}
      <div className={styles.line_horizontal} />
    </div>
  );
};

export default HorizontalLine;
