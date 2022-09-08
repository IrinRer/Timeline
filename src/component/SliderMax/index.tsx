import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/css/pagination';
import styles from './index.module.scss';
import Button from './Button';

const SliderMax = () => {
  const spanPagination = useRef(null);

  const format = (index: number) => {
    return index > 9 ? index : `0${index}`;
  };

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      pagination={{
        clickable: true,
        type: 'fraction',
        el: '.my-custom-pagination-div',
        formatFractionTotal: (index) => {
          return format(index);
        },
        formatFractionCurrent: (index) => {
          return format(index);
        },
      }}
      slidesPerView={1}
      className={styles.swiper}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <div className={styles.wrapper}>
      <div className="my-custom-pagination-div" />
        <Button />
      </div>
    </Swiper>
  );
};

export default SliderMax;
