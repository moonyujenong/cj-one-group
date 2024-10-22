import style from "./index.module.css";
import Layouts from '../../comoon/components/Layouts';
// import visualImg from "../../assets/images/about/visual-banner-mobile.png";
// import visualImgPc from "../../assets/images/about/visual-banner-pc.png";
import useResponsive from "../../comoon/hook/Responsive";
import visualImgTest from "../../assets/images/about/about-visual-banner.png";
import missionImg1 from "../../assets/images/about/mission-img-1.png";
import missionImg2 from "../../assets/images/about/mission-img-2.png";
import missionImg2Mobile from "../../assets/images/about/mission-img-2-mobile.png";
import guidelineMobile from "../../assets/images/about/logo-guideline-mobile.png";
import guidelinePc from "../../assets/images/about/logo-guideline-pc.png";
import lineBannerMobile from "../../assets/images/about/line-banner-mobile.png";
import lineBannerPc from "../../assets/images/about/line-banner-pc.png";
import taglineImg1 from "../../assets/images/about/tagline-img-1.png";
import taglineImg2 from "../../assets/images/about/tagline-img-2.png";
import taglineImg3 from "../../assets/images/about/tagline-img-3.png";
import storyBg from "../../assets/images/about/story-bg.png";
import cLogo1 from "../../assets/images/about/c-logo-1.svg";
import cLogo2 from "../../assets/images/about/c-logo-2.svg";
import cLogo3 from "../../assets/images/about/c-logo-3.svg";
import cLogo4 from "../../assets/images/about/c-logo-4.svg";
import cLogo5 from "../../assets/images/about/c-logo-5.svg";
import cLogo6 from "../../assets/images/about/c-logo-6.svg";
import sloganImg from "../../assets/images/about/slogan-img.png";
import ShapeImg from "../../comoon/components/ShapeImg";

function About () {
    const innerWidth = useResponsive();
    const bannerTextList = [
        {
            id:0,
            title:'True',
            explain:`CJONE always strives to communicate\nwith customers with honesty and sincerity.`
        },
        {
            id:1,
            title:'Consistent',
            explain:`Our brand maintains consistent standards\nacross all locations.`
        },
        {
            id:2,
            title:'Empathetic',
            explain:`Empathy with customers reflects our\npeople-centered values.`
        }
    ]

    const commentsList = [
        {
            id:0,
            img:cLogo1,
            title:'VALUE',
            explain:'Our cuisine reflects essential values and deep flavors. We prioritize recipes and unique tastes, respecting the history and cultural characteristics of each dish. By utilizing meticulously crafted recipes and techniques, we aim to preserve the authenticity and unique flavors of our dishes, delivering the allure of food to our customers. This way, we maintain traditional values while providing an exceptional dining experience.'
        },
        {
            id:1,
            img:cLogo2,
            title:'PRINCIPE',
            explain:'Our brand adheres to strict principles and standards. The "ONE Principle" ensures that every decision and action reflects our core values, providing consistent service. We use fresh, selected ingredients to accurately reproduce the flavors of traditional Korean cuisine, ensuring consistent taste through thorough quality control. In customer service, we prioritize a friendly and professional approach, quickly reflecting customer needs and feedback. Our goal is to provide reliable quality and satisfaction with every visit.'
        },
        {
            id:2,
            img:cLogo3,
            title:'EFFICIENCY',
            explain:'We strive for seamless system operation. Through precise cooking and service procedures, we maintain consistent quality, optimize raw materials and personnel to minimize waste, and ensure a safe dining environment through rigorous hygiene management. We support all employees in understanding clear roles and responsibilities and executing tasks consistently. Regular training and feedback enhance professionalism, while open communication and collaboration foster a positive corporate culture. This allows us to provide the best experience for customers and a satisfying working environment for employees.'
        },
        {
            id:3,
            img:cLogo4,
            title:'REALATIONSHIP',
            explain:"We value relationships, maintaining positive connections with customers based on authenticity and trust. We cherish each customer, forming warm relationships through personalized service and thoughtful consideration. Additionally, we strengthen teamwork based on cooperation and respect among employees, providing sincere hospitality and a comfortable atmosphere for all customers. Our people-centered approach fosters long-term, trustworthy relationships with customers, realizing the brand's values."
        },
        {
            id:4,
            img:cLogo5,
            title:'VISION',
            explain:"Through years of successes and failures, we have confirmed the infinite potential of Korean cuisine. Based on the confidence gained from our dedicated efforts, we plan to expand multiple locations within the UK. Through various sub-brands with unique characteristics, we will showcase the diverse allure and essence of Asian cuisine in the UK. This will enable us to widely promote excellent flavors and provide customers with special and cherished dining experiences."
        },
        {
            id:5,
            img:cLogo6,
            title:'SPIRIT',
            explain:"We aim to preserve the essence of Korean cuisine while combining innovative ideas and a modern sensibility to establish ourselves as a leading Asian food brand in the UK market. Our long-term vision is to enhance the global recognition of Asian cuisine and to widely promote it through sustainable growth and global expansion."
        }
    ]

    return (
        <Layouts>
            <div className={style.container}>
                <div className={style.visual_banner}>
                    {/* <img alt="visual img" src={innerWidth >= 1024 ? visualImgPc : visualImg} /> */}
                    <img alt="visual img" src={visualImgTest} />
                    <div className={style.text_box}>
                        {bannerTextList.map((item) => (
                            <div className={style.item} key={item.id}>
                                <h3 className={style.title}>{item.title}</h3>
                                <p>{item.explain}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={style.mission_section}>
                    <h3 className={style.title}>BRAND MISSION</h3>
                    <p className={style.sub}>We capture the essence of cuisine to offer our customers delicious memories and unique experiences. Grounded in trust and dedication, we provide rich cultural experiences and create moments that leave a lasting impression in the memories of our customers.</p>
                    <div className={style.flex_box}>
                        <img alt="mission img 1" src={missionImg1} />
                        <img alt="mission img 2" src={innerWidth >= 1024 ? missionImg2 : missionImg2Mobile} />
                    </div>
                </div>
                <div className={style.guide_line}>
                    <img alt="logo guide line img" src={innerWidth >= 1024 ? guidelinePc:guidelineMobile} />
                </div>

                <img style={{width:'100%', display:'block', maxHeight:'1000px', objectFit:'cover'}} alt="line banner" src={innerWidth >= 1024 ? lineBannerPc:lineBannerMobile} />

                <div className={style.tagline_section}>
                    <div className={style.img_wrap}>
                        <span>
                            <p>BRAND TAGLINE</p>
                            <img alt="tagline img 1" src={taglineImg1} />
                        </span>
                        <span>
                            <p>Stories In Every Flavor,</p>
                            <img alt="tagline img 2" src={taglineImg2} />
                        </span>
                        <span>
                            <p>Memories In Every Bite</p>
                            <img alt="tagline img 3" src={taglineImg3} />
                        </span>
                    </div>
                    <h3 className={style.title}>BRAND TAGLINE</h3>
                    <p>Stories in Every Flavor,<br />Memories in Every Bite</p>
                </div>

                <div className={style.story_section}>
                    <img alt="brand story bg" src={storyBg} />
                    <div className={style.text_box}>
                        <h3 className={style.title}>BRAND STORY</h3>
                        <div className={style.flex_box}>
                            <h3 className={style.title2}>ONE SPIRIT</h3>
                            <p>We approach everything with the spirit of "ONE." The phrase "to be ONE" represents our commitment to consistency and an integrated approach, striving for the best results in all our activities. It embodies our values of continuously working to meet and exceed customer expectations.</p>
                        </div>
                    </div>
                </div>

                <div className={style.comments_section}>
                    <div className={style.inner}>
                        {commentsList.map((item) => (
                            <div className={style.comments_item}>
                                <img alt="c logo" src={item.img} />
                                <h3 className={style.title}><b>ONE</b> {item.title}</h3>
                                <p>{item.explain}</p>
                            </div>
                        ))}
                    </div>
                </div>
               
               <ShapeImg imgSrc={sloganImg} title={'BRAND SLOGAN'} subTitle={`True Flavors Stay\nIn Your Memory`} />
            </div>
        </Layouts>
    )
}

export default About;