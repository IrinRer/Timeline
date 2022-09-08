import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/scss/navigation';
import styles from './index.module.scss';
import SlideNextButton from './ButtonNext';
import SlidePrevButton from './ButtonPrev';

const SliderMax = () => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      className={styles.swiper}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <div className={styles.wrapper_btn}>
        <SlidePrevButton />
        <SlideNextButton />
      </div>
    </Swiper>
  );
};

export default SliderMax;
