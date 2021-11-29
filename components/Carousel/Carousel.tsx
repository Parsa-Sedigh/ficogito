import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';

export const Carousel = () => {

    const onSlideChange = () => {
        console.log('slide change')
    };

    return (
        <Swiper slidesPerView={3} spaceBetween={50} onSlideChange={onSlideChange}>
            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide>
            <SwiperSlide>4</SwiperSlide>
            <SwiperSlide>5</SwiperSlide>
            <SwiperSlide>6</SwiperSlide>
        </Swiper>
    );
};