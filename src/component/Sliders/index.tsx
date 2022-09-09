import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Controller } from 'swiper';
import { addZero } from 'helpers/addZero';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from './index.module.scss';
import Button from './Button';

const Sliders = () => {
  const swiper1Ref = React.useRef<any>(null);
  const swiper2Ref = React.useRef<any>(null);

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
          el: '.my_custom_pagination_div',
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
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <div className={styles.wrapper}>
          <div className='my_custom_pagination_div'/>
          <Button />
        </div>
      </Swiper>

      <Swiper
        modules={[Navigation, Controller, Pagination]}
        spaceBetween={50}
        onSwiper={(swiper) => {
          swiper2Ref.current = swiper;
        }}
        slidesPerView={4}
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
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </main>
  );
};

export default Sliders;
