import style from "./index.module.css";
import Layouts from '../../comoon/components/Layouts';
import visualBanner from "../../assets/images/people/people-visual-banner.png";
import ShapeImg from '../../comoon/components/ShapeImg';
import shapeImgItem from "../../assets/images/people/people-shape-img.png";
import ceoImg from "../../assets/images/people/ceo-img.png";
import { memberList } from "./member";

function People () {
    return (
        <Layouts>
            <div className={style.container}>
                <div className={style.visual_banner}>
                    <img alt="visual img" src={visualBanner} />
                    <p>We strengthen internal teamwork and customer relationships based on mutual respect, creating an environment where everyone feels valued and respected.</p>
                </div>

                <div className={style.flex_box}>
                    <div className={style.flex_item}>
                        <h3 className={style.title}>Trust and<br/>Transparency</h3>
                        <p>Trust forms the foundation of teamwork, which is a crucial element that extends to our customers. Through honest and transparent communication, we strengthen the bonds among our staff.</p>
                    </div>
                    <div className={style.flex_item}>
                        <h3 className={style.title}>Growth and<br/>Development</h3>
                        <p>We provide continuous training and education to help everyone reach their full potential and ensure that all employees align with the brand's values and vision.</p>
                    </div>
                    <div className={style.flex_item}>
                        <h3 className={style.title}>Teamwork and<br/>Collaboration</h3>
                        <p>Team collaboration is essential for delivering the best customer experience. We value different ideas and perspectives, working together to find innovative solutions.</p>
                    </div>
                </div>

                <div className={style.shape_box}>
                    <ShapeImg imgSrc={shapeImgItem} subTitle={`OPEN COMMUNICATION,\nSTRONG RELATIONSHIPS`} />
                </div>

                <div className={style.members}>
                    <div className={style.ceo_intro}>
                        <img alt="ceo img" src={ceoImg} />
                        <div className={style.text_box}>
                            <div className={style.message}>
                                <h3>CEO'S MESSAGE</h3>
                                <p>At CJ ONE, our most important asset is our people. We believe that individual growth is closely linked to the success of our brand. By fostering an environment of support and collaboration, we are committed to empowering our employees to thrive both personally and professionally.</p>
                            </div>
                            <span className={style.names}>
                                <b>Jay Choi</b>
                                <p>Chief Executive Officer</p>
                            </span>
                        </div>
                    </div>

                    <div className={style.member_list}>
                        <h3>OUR MEMBER</h3>
                        <ul>
                            {memberList.map((item) => (
                                <li key={item.id}>
                                    <img alt="thumbnail" src={item.img} />
                                    <span>{item.name}</span>
                                    <p>{item.roll}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Layouts>
    )
}

export default People;