import React, { useRef, useLayoutEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Controller } from 'swiper';
import 'swiper/css';
import { addZero } from 'helpers/addZero';
import HorizontalLine from 'component/Line/HorizontalLine';
import { useDefuneSection } from 'customHooks/useDefuneSection';
import { useAppSelector } from 'customHooks/redux/useAppSelector';
import { getTemporaryPeriod } from 'store/historyDate/selectors';
import Button from 'component/Sliders/Button';
import 'swiper/scss/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from './index.module.scss';

const SlidersMobile = () => {
  const swiper1Ref = useRef<any>(null);
  const swiper2Ref = useRef<any>(null);
  const mainRef = useRef<any>(null);

  const data = useDefuneSection();
  const period = useAppSelector(getTemporaryPeriod);

  useLayoutEffect(() => {
    if (swiper1Ref.current && swiper2Ref.current) {
      swiper1Ref.current.controller.control = swiper2Ref.current;
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
          el: '.my_custom_pagination_fragment',
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
        {period.map((time, index) => (
          <SwiperSlide key={index}>
            <div className={styles.wrapper_span}>
              <span className={styles.p_into_swiper_start}>
                {time.period[0]}
              </span>
              <span className={styles.p_into_swiper_end}>{time.period[1]}</span>
            </div>
            <HorizontalLine />
            <Swiper
              modules={[Controller, Pagination]}
              spaceBetween={50}
              onSwiper={(swiper) => {
                swiper2Ref.current = swiper;
              }}
              slidesPerView={2}
              className={styles.swiper_two}
              pagination={{
                clickable: true,
                type: 'bullets',
                el: `.${styles.my_custom_pagination_div}`,
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
                        <div className={styles.wrapper_text_time}>
                          <p className={styles.p_date}>{el.time}</p>
                          <p className={styles.p_text}>{el.text}</p>
                        </div>
                      </SwiperSlide>
                    );
                  }
                  return null;
                }),
              )}
            </Swiper>
          </SwiperSlide>
        ))}
        <div className={styles.my_custom_pagination_div} />
        <div className={styles.wrapper_btn}>
          <div className="my_custom_pagination_fragment" />
          <Button mainRef={mainRef.current} />
        </div>
      </Swiper>
    </main>
  );
};

export default SlidersMobile;
