import style from "./index.module.css";

function Lookbook () {
    const loobookList = [
        {
            id:0,
            number:'6',
            title : '6 Sub-Brands Owned',
            subTitle : 'CJONE has successfully launched six sub-brands, including café, dining, cupbap, and barbecue, all centered around Korean cuisine. Through these various concepts, we deliver the charm of a broad range of Asian culinary experiences to our customers.'
        },
        {
            id:1,
            number:'2014',
            title : 'Over 10 Years of Brand Operation',
            subTitle : 'With more than 10 years of experience, CJONE has established a stable operation in the UK restaurant industry, based on accumulated expertise and adherence to strict principles and standards. We ensure consistent quality and reliability in every experience we provide.'
        },
        {
            id:2,
            number:'200+',
            title : 'Over 200 Menu Items',
            subTitle : 'CJONE offers a diverse selection of over 200 menu items, including Korean cuisine, as well as Japanese and Southeast Asian fusion dishes. Each dish is crafted with the passion and expertise that CJONE is known for, guaranteeing a satisfying experience for every customer.'
        },
        {
            id:3,
            number:'50',
            title : 'More than 50 Employees',
            subTitle : 'CJONE employs over 50 staff members, from marketing managers to highly skilled kitchen managers. We are committed to investing in talent, continually supporting the growth and development of our team members to deliver the highest level of service.'
        }
    ]

    return (
        <div className={style.container}>
            <h3 className={style.title}>LOOKBOOK</h3>
            <ul className={style.lookbook_list}>
                {loobookList.map((item) => (
                    <li key={item.id}>
                        <p>{item.number}</p>
                        <div className={style.right}>
                            <span>{item.title}</span>
                            <p>{item.subTitle}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Lookbook;