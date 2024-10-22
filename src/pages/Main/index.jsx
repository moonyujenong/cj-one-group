import style from "./index.module.css";
import Layouts from "../../comoon/components/Layouts";
import visualImg from "../../assets/images/main/main-visual-img.png";
import Slides from "./Slides";
import section2Pc from "../../assets/images/main/main-essence-bg-pc.png";
import Lookbook from "./Lookbook";
import bottomImg1 from "../../assets/images/main/bottom-img-1.png";
import bottomImg2 from "../../assets/images/main/bottom-img-2.png";
import bottomImg3 from "../../assets/images/main/bottom-img-3.png";
import { ParallaxProvider, useParallax } from 'react-scroll-parallax';

function Main () {
  const parallax = useParallax({
    speed: -7,
  });

  const parallax2 = useParallax({
    speed: -8,
  });

  return (
    <Layouts>
      <ParallaxProvider>
        <div className={style.container}>
          <section className={style.first_section}>
            <p>CJONE is a Korean cuisine-focused restaurant brand that originated in the UK. We leverage our extensive experience and expertise to deliver the authentic taste and charm of our dishes in diverse ways.</p>
            <img alt="visual img" src={visualImg} ref={parallax.ref} />
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
            <img alt="section bg" src={section2Pc} ref={parallax2.ref} />
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