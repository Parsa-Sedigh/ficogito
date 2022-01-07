import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import {Card} from "../Card/Card";

const breakpoints = {
    900: {
        slidesPerView: 3
    },
};

export const Carousel = ({swiperClasses}) => {

    const onSlideChange = () => {
        console.log('slide change')
    };

    return (
        <Swiper className={swiperClasses} slidesPerView={2} spaceBetween={50} breakpoints={breakpoints} onSlideChange={onSlideChange}>
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
