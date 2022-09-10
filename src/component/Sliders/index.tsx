import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Controller } from 'swiper';
import { addZero } from 'helpers/addZero';
import { useAppSelector } from 'customHooks/redux/useAppSelector';
import {
  getDateHistoryScience,
  getTemporaryPeriod,
} from 'store/historyDate/selectors';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from './index.module.scss';
import Button from './Button';

const Sliders = () => {
  const swiper1Ref = React.useRef<any>(null);
  const swiper2Ref = React.useRef<any>(null);
  const spanRef = React.useRef<any>();

  const data = useAppSelector(getDateHistoryScience);
  const period = useAppSelector(getTemporaryPeriod);

  React.useLayoutEffect(() => {
    if (swiper1Ref.current && swiper2Ref.current) {
      swiper1Ref.current.controller.control = swiper2Ref.current;
      // swiper2Ref.current.controller.control = swiper1Ref.current;
    }
  }, []);

  return (
    <main className={styles.wrapper_main}>
      <Swiper
        modules={[Navigation, Pagination, Controller]}
        spaceBetween={50}
        onSwiper={(swiper) => {
          swiper1Ref.current = swiper;
        }}
        pagination={{
          clickable: true,
          type: 'fraction',
          el: `.${styles.pagination}`,
          formatFractionTotal: (index) => {
            return addZero(index);
          },
          formatFractionCurrent: (index) => {
            return addZero(index);
          },
        }}
        slidesPerView={1}
        className={styles.swiper_one}
      >
        {period.map((time) => (
          <SwiperSlide>
            <span className={styles.p_into_swiper_start}>{time.period[0]} </span>
            <span className={styles.p_into_swiper_end}>{time.period[1]}</span>
            <Swiper
              modules={[Navigation, Controller, Pagination]}
              spaceBetween={100}
              onSwiper={(swiper) => {
                swiper2Ref.current = swiper;
              }}
              slidesPerView={2}
              navigation
              className={styles.swiper_two}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  pagination: {
                    clickable: true,
                  },
                },
                480: {
                  slidesPerView: 1,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
            >
              {data?.map((item) =>
                item?.map((el) => {
                  if (
                    time.end &&
                    time.start &&
                    el.time <= time.end &&
                    el.time >= time.start
                  ) {
                    return (
                      <SwiperSlide
                        key={el.time}
                        className={styles.swiper_slider}
                      >
                        <p className={styles.p_date}>{el.time}</p>
                        <p className={styles.p_text}>{el.text}</p>
                      </SwiperSlide>
                    );
                  }
                  return null;
                }),
              )}
            </Swiper>
          </SwiperSlide>
        ))}
        <div className={styles.wrapper}>
          <div className={styles.pagination} />
          <Button />
        </div>
      </Swiper>
    </main>
  );
};

export default Sliders;
