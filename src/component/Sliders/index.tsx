import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Controller } from 'swiper';
import { addZero } from 'helpers/addZero';
import { useAppSelector } from 'customHooks/redux/useAppSelector';
import {
  getDateHistory,
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

  const data = useAppSelector(getDateHistory);
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
        {period.map((item) => (
          <SwiperSlide>
            <p className={styles.p_into_swiper}>{item.period}</p>
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
              {data?.science.map((item) => (
                <SwiperSlide key={item.time} className={styles.swiper_slider}>
                  <p className={styles.p_date}>{item.time}</p>
                  <p className={styles.p_text}>{item.text}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperSlide>
        ))}
        <div className={styles.wrapper}>
          <div className="my_custom_pagination_div" />
          <Button />
        </div>
      </Swiper>
    </main>
  );
};

export default Sliders;

//   {/* <Swiper
//     modules={[Navigation, Controller, Pagination]}
//     spaceBetween={50}
//     onSwiper={(swiper) => {
//       swiper2Ref.current = swiper;
//     }}
//     slidesPerView={2}
//     navigation
//     className={styles.swiper_two}
//     breakpoints={{
//       320: {
//         slidesPerView: 2,
//         pagination: {
//           clickable: true,
//         },
//       },
//       480: {
//         slidesPerView: 1,
//       },
//       992: {
//         slidesPerView: 3,
//       },
//     }}
//   >
//     {data?.science.map((item) => (
//       <SwiperSlide key={item.time} className={styles.swiper_slider}>
//         <p className={styles.p_date}>{item.time}</p>
//         <p className={styles.p_text}>{item.text}</p>
//       </SwiperSlide>
//     ))}
//   </Swiper> */}
