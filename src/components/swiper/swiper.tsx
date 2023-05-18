import React, { useRef, useState } from "react";
// Import Swiper React components


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules

import {SwiperSlide, Swiper} from "swiper/react";
import { Pagination,Navigation } from "swiper";

export default function SlideShowGis() {
    return (
        <>
            <Swiper
                style={{marginTop: 12}}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination,Navigation]}
                className="mySwiper"
            >
                <SwiperSlide ><img style={{borderRadius: 4}} src={'https://gis-hausmeisterservice.de/wp-content/uploads/2017/10/DSCN0278-1181x450.jpg'}/></SwiperSlide>
                <SwiperSlide ><img src={'https://gis-hausmeisterservice.de/wp-content/uploads/2017/10/DSCN0278-1181x450.jpg'}/></SwiperSlide>
                <SwiperSlide ><img src={'https://gis-hausmeisterservice.de/wp-content/uploads/2017/10/DSCN0278-1181x450.jpg'}/></SwiperSlide>
                <SwiperSlide ><img src={'https://gis-hausmeisterservice.de/wp-content/uploads/2017/10/DSCN0278-1181x450.jpg'}/></SwiperSlide>
                <SwiperSlide ><img src={'https://gis-hausmeisterservice.de/wp-content/uploads/2017/10/DSCN0278-1181x450.jpg'}/></SwiperSlide>

            </Swiper>
        </>
    );
}
