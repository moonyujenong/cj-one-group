import { Link, useLocation } from "react-router-dom";
import style from "./index.module.css";
import logo from "../../../../../assets/images/logo.svg";
import shapeIcon from "../../../../../assets/images/icon-shape.svg";
import logoFill from "../../../../../assets/images/logo-fill.svg";
import { useState } from "react";

function PcHeader () { 
  const menuList = [
    {
      id:0,
      name:'ONE SPIRIT',
      location:'/about',
      twoDepthMenu:[
        {
          id:0,
          name2:'Core value',
        },
        {
          id:1,
          name2:'Mission',
        },
        {
          id:2,
          name2:'Logo',
        },
        {
          id:3,
          name2:'Keyword',
        },
        {
          id:4,
          name2:'Essence',
        },
        {
          id:5,
          name2:'Tagline',
        },
      ]
    },
    {
      id:1,
      name:'BRANCH',
      location:'/branch',
      twoDepthMenu:[
        {
          id:0,
          name2:'Chungdam',
        },
        {
          id:1,
          name2:'Hongdae',
        },
        {
          id:2,
          name2:'Sybuya',
        },
        {
          id:3,
          name2:'Majangdong',
        },
        {
          id:4,
          name2:'Ssal factory',
        },
      ]
    },
    {
      id:2,
      name:'PEOPLE',
      location:'/people',
      twoDepthMenu:[
        {
          id:0,
          name2:'We Are',
        },
        {
          id:1,
          name2:'One Chick',
        },
        {
          id:2,
          name2:'We Want',
        },
      ]
    },
  ]

  const location = useLocation();

  const [isLnbOpen, setIsLnbOpen] = useState(false);
  const handleLnbOpen = () => {
    setIsLnbOpen(!isLnbOpen)
  }

  return (
    <div className={style.container}>
      <div className={style.inner} onClick={handleLnbOpen}>
        {location.pathname === '/about' || location.pathname === '/people' ? 
        <Link to={'/'} className={style.logo}>
          <img alt="logo" src={logoFill} />
        </Link>
        : 
        <Link to={'/'} className={style.logo}>
          <img alt="logo" src={logo} />
        </Link>
        }
        

        <ul className={style.menu_list}>
          {menuList.map((item) => (
            <li key={item.id}>
              <Link to={item.location} className={`${location.pathname === item.location && style.border} ${location.pathname === '/about' || location.pathname === '/people' ? style.changeColor : ''}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={`${style.lnb} ${isLnbOpen === true ? style.show : ''}`}>
        <div className={style.lnb_inner} onClick={handleLnbOpen}>
          <Link to={'/'} className={style.logo}>
            <img alt="logo" src={logoFill} />
          </Link>

          <div className={style.lnb_right}>
            <img alt="shape icon" src={shapeIcon} className={style.shape_icon} />
            <ul className={style.menu_list}>
              {menuList.map((item) => (
                <li key={item.id}>
                  <Link to={item.location} className={location.pathname === item.location && style.border}>{item.name}</Link>
                  <ul className={style.depth_menu}>
                    {item.twoDepthMenu.map((item2) => (
                      <li key={item2.id}>
                        {item2.name2}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className={style.lnb_foot}>
          Stories in Every Flavor, <br />
          Memories in Every Bite
        </p>
      </div>
    </div>
  )
}

export default PcHeader;