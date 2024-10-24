import style from "./index.module.scss";

function ShapeImg ({imgSrc, title, subTitle}) {
    return (
        <div className={style.shape_wrap}>
            <img alt="shape img" src={imgSrc} />
            <div className={style.text_box}>
                {title && <h3>{title}</h3>}
                <p>{subTitle}</p>
            </div>
        </div>
    )
}

export default ShapeImg;