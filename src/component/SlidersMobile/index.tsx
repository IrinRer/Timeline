import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Controller } from 'swiper';
import 'swiper/css';
import { addZero } from 'helpers/addZero';
import Button from 'component/Sliders/Button';
import 'swiper/scss/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from './index.module.scss';

const SlidersMobile = () => {
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
        slidesPerView={1}
        pagination={{
          clickable: true,
          type: 'fraction',
          el: '.my_custom_pagination_div_fragment',
          formatFractionTotal: (index) => {
            return addZero(index);
          },
          formatFractionCurrent: (index) => {
            return addZero(index);
          },
        }}
        className={styles.swiper_one}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <div className={styles.wrapper_btn}>
          <div className='my_custom_pagination_div_fragment'/>
          <Button />
        </div>
      </Swiper>

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
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <div className={styles.my_custom_pagination_div} />
      </Swiper>
    </main>
  );
};

export default SlidersMobile;
