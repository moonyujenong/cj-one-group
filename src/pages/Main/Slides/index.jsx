import style from "./index.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import slideImg1 from "../../../assets/images/main/main-slide-1.png";
import slideImg2 from "../../../assets/images/main/main-slide-2.png";
import slideImg3 from "../../../assets/images/main/main-slide-3.png";
import slideImg4 from "../../../assets/images/main/main-slide-4.png";
import slideImg5 from "../../../assets/images/main/main-slide-5.png";
import slideImg6 from "../../../assets/images/main/main-slide-6.png";
import slideImg7 from "../../../assets/images/main/main-slide-7.png";
import slideImg8 from "../../../assets/images/main/main-slide-8.png";
import slideImg9 from "../../../assets/images/main/main-slide-9.png";
import slideImg10 from "../../../assets/images/main/main-slide-10.png";

function Slides () {
  return (
    <div className={style.container}>
      <Swiper 
        navigation={true} 
        slidesPerView={'auto'}
        modules={[Navigation, Scrollbar]} 
        spaceBetween={9}
        className={style.swipe}
        scrollbar={{
          hide: false,
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
        <SwiperSlide className={style.slide_item}><img alt="slide 5" src={slideImg5} /></SwiperSlide>
        <SwiperSlide className={style.slide_item}><img alt="slide 6" src={slideImg6} /></SwiperSlide>
        <SwiperSlide className={style.slide_item}><img alt="slide 7" src={slideImg7} /></SwiperSlide>
        <SwiperSlide className={style.slide_item}><img alt="slide 8" src={slideImg8} /></SwiperSlide>
        <SwiperSlide className={style.slide_item}><img alt="slide 9" src={slideImg9} /></SwiperSlide>
        <SwiperSlide className={style.slide_item}><img alt="slide 10" src={slideImg10} /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slides;