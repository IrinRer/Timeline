import { useAppSelector } from 'customHooks/redux/useAppSelector';
import React from 'react';
import { getDateHistoryFirstPeriod } from 'store/historyDate/selectors';
import { SwiperSlide } from 'swiper/react';

const SlidersItemFirstPeriod = () => {
  const data = useAppSelector(getDateHistoryFirstPeriod);

  return (
    <>
      {data?.science.map((item) => (
        <SwiperSlide>{item[2007]}</SwiperSlide>
      ))}
    </>
  );
};
