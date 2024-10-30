import style from "./index.module.scss";
import Layouts from "../../comoon/components/Layouts";
import Slides from "./Slides";
import section2Mobile from "../../assets/images/main/main-essence-bg-mobile.png";
import section2Pc from "../../assets/images/main/main-essence-bg-pc.png";
import Lookbook from "./Lookbook";
import bottomImg1 from "../../assets/images/main/bottom-img-1.png";
import bottomImg2 from "../../assets/images/main/bottom-img-2.png";
import bottomImg3 from "../../assets/images/main/bottom-img-3.png";
import { ParallaxProvider, useParallax } from 'react-scroll-parallax';
import useResponsive from "../../comoon/hook/Responsive";
import { useEffect, useState } from "react";
import shapeImg from "../../assets/images/main/main-visual-shape.png";
import shapeInnerImg from "../../assets/images/main/main-visual-img-inner.png";
import shapeImgMobile from "../../assets/images/main/shape-img-mobile.png";
import logoText from "../../assets/images/logo-text.svg";

function Main () {
  const innerWidth = useResponsive();
  const [parallaxSpeed, setParallaxSpeed] = useState();
  const [parallaxSpeed2, setParallaxSpeed2] = useState();


  useEffect(() => {
    if(innerWidth >= 1024) {
      setParallaxSpeed(-20);
      setParallaxSpeed2(-8);
    } else {
      setParallaxSpeed(-3);
      setParallaxSpeed2(-4);
    }
  }, [innerWidth])

  const parallax = useParallax({
    speed:parallaxSpeed,
  });

  const parallax2 = useParallax({
    speed:parallaxSpeed2,
  });

  return (
    <Layouts>
      <ParallaxProvider>
        <div className={style.container}>
          <section className={style.first_section}>
            {innerWidth < 1024 && <img alt="logo text" className={style.text_logo} src={logoText} />}
            
            <p>CJONE is a Korean cuisine-focused restaurant brand that originated in the UK. We leverage our extensive experience and expertise to deliver the authentic taste and charm of our dishes in diverse ways.</p>
            <div className={style.shape_wrap}>
              <img alt="shape" src={innerWidth >=1024 ? shapeImg : shapeImgMobile} className={style.shape_img} />
              <img alt="shape inner" src={shapeInnerImg} className={style.inner_img} ref={parallax.ref} />
            </div>
          </section>
          <div className={style.vision}>
            <h3 className={style.title}>BRAND VISION</h3>
            <div className={style.vision_text}>
              <p>CJONE aims to introduce the authenticity of Asian cuisine, especially Korean food, to the world. The brand emphasizes its core values of True, Consistent, and Empathetic to build trust with customers, enhance customer experience, and foster genuine relationships.</p>
              <p>Moreover, CJONE strives for sustainable growth that benefits not only the brand but also its customers and the broader community. The vision is to pursue continuous innovation and uphold a people-centered culture while showcasing the unique charm of Korean and Asian cuisine globally.</p>
            </div>
          </div>

          <Slides />
          <section className={style.second_section}>
            <div className={style.parallax_wrap}>
              <img alt="section bg" src={innerWidth >= 800 ? section2Pc : section2Mobile} ref={parallax2.ref} />
            </div>
            <div className={style.text_box} >
              <h3 className={style.title}>BRAND ESSENCE</h3>
              <p>We maintain stable brand operations through strict principles and standards, ensuring consistent quality and service for our customers. We prioritize customer trust, placing the highest importance on people-centered values, and strive to deliver a consistently satisfying experience.</p>
            </div>
          </section>

          <Lookbook />
          <section className={style.end_section}>
            <div className={style.img_wrap}>
              <img alt="bottom img 1" src={bottomImg1} />
              <img alt="bottom img 2" src={bottomImg2} />
              <img alt="bottom img 3" src={bottomImg3} />
            </div>
            <p>The essence of korean cuisine</p>
          </section>
        </div>
      </ParallaxProvider>
    </Layouts>
  )
}

export default Main;