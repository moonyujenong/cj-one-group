import Layouts from "../../comoon/components/Layouts";
import style from "./index.module.css";
import visualBanner from "../../assets/images/branch/branch-visual-banner.png";
import { branchData } from "./data";
import { useRef } from "react";

function Branch () {
    const scrollRef = useRef([]);
    const scrollToSection = (index) => {
        scrollRef.current[index].scrollIntoView({ behavior: 'smooth' });
      };

    const branchSectionList = [
        {
            id:0,
            name:'Chungdam',
        },
        {
            id:3,
            name:'Majangdong',
        },
        {
            id:2,
            name:'SHIbuya SOHO',
        },
        {
            id:1,
            name:'Hongdae pocha',
        },
        {
            id:4,
            name:'Ssal factory',
        }
    ]

    return (
        <Layouts>
            <div className={style.container}>
                <div className={style.visual_banner}>
                    <img alt="visual img" src={visualBanner} />
                    <ul className={style.section_list}>
                        {branchSectionList.map((item, index) => (
                            <li key={index} onClick={() => scrollToSection(index)} className={index === 0 ? style.active : ''}>{item.name}</li>
                        ))}
                    </ul>
                </div>

                <div className={style.brunch_list}>
                    {branchData.map((item, index) => (
                        <div className={style.items} key={item.id} ref={(el) => (scrollRef.current[index] = el)}>
                            <div className={style.left}>
                                <div className={style.names}>
                                    <h3>{item.area}</h3>
                                    <p className={style.category}>{item.category}</p>
                                </div>
                                <div className={style.contents}>
                                    <a href="#!" className={style.link}>Go to web</a>
                                    <p className={style.address}>{item.address}</p>
                                    <p className={style.call}>TEL : {item.call}</p>
                                    <p className={style.intro}>{item.explain}</p>
                                </div>
                            </div>
                            <div className={style.right}>
                                {item.img && <img alt="market img" src={item.img} />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layouts>
    )
}

export default Branch;