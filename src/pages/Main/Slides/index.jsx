import style from "./index.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/pagination";
import 'swiper/css/navigation';
import slideImg1 from "../../../assets/images/main/main-slide-1.png";
import slideImg2 from "../../../assets/images/main/main-slide-2.png";
import slideImg3 from "../../../assets/images/main/main-slide-3.png";
import slideImg4 from "../../../assets/images/main/main-slide-4.png";

function Slides () {
  return (
    <div className={style.container}>
      <Swiper 
        navigation={true} 
        slidesPerView={'auto'}
        modules={[Navigation, Pagination]} 
        spaceBetween={9}
        className={style.swipe}
        pagination={{
          type: "progressbar",
        }}
        breakpoints={{
          1024 : {
            spaceBetween: 15
          }
        }}
        >
        <SwiperSlide className={style.slide_item}><img alt="slide 1" src={slideImg1} /></SwiperSlide>
        <SwiperSlide className={style.slide_item}><img alt="slide 2" src={slideImg2} /></SwiperSlide>
        <SwiperSlide className={style.slide_item}><img alt="slide 3" src={slideImg3} /></SwiperSlide>
        <SwiperSlide className={style.slide_item}><img alt="slide 4" src={slideImg4} /></SwiperSlide>
        <SwiperSlide className={style.slide_item}><img alt="slide 4" src={slideImg4} /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slides;