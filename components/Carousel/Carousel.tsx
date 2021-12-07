import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import {Card} from "../Card/Card";

export const Carousel = () => {

    const onSlideChange = () => {
        console.log('slide change')
    };

    return (
        <Swiper slidesPerView={3} spaceBetween={50} onSlideChange={onSlideChange}>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
            <SwiperSlide>
                <Card />
            </SwiperSlide>
        </Swiper>
    );
};
