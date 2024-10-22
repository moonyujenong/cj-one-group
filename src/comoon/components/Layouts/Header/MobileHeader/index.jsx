import { Link, useLocation } from 'react-router-dom';
import style from "./index.module.css";
import logo from "../../../../../assets/images/logo.svg";
import closeIcon from "../../../../../assets/images/icon-close.svg";
import hamburgerIcon from "../../../../../assets/images/icon-hamburger.svg";
import shapeIcon from "../../../../../assets/images/icon-shape.svg";
import logoFill from "../../../../../assets/images/logo-fill.svg";
import hamburgerFillIcon from "../../../../../assets/images/icon-hamburger-fill.svg"
import { useState } from 'react';

function MobileHeader () {
  const location = useLocation();
  const [isLnbOpen, setIsLnbOpen] = useState(false);
  const handleLnbOpen = () => {
    setIsLnbOpen(!isLnbOpen)
  }

  const menuList = [
    {
      id:0,
      name:'HOME',
      location:'/'
    },
    {
      id:1,
      name:'ONE SPIRIT',
      location:'/about'
    },
    {
      id:2,
      name:'BRANCH',
      location:'/branch'
    },
    {
      id:3,
      name:'PEOPLE',
      location:'/people'
    },
  ]

  return (
    <div className={style.container}>
      <div className={style.inner}>
      {location.pathname === '/about' || location.pathname === '/people' ? 
        <>
          <Link to={'/'} className={style.logo}>
            <img alt="logo" src={logoFill} />
          </Link>
          <button type="button" className={style.open_btn} onClick={handleLnbOpen}>
            <img alt='hamburger icon' src={hamburgerFillIcon} />
          </button>
        </>
        : 
        <>
          <Link to={'/'} className={style.logo}>
            <img alt="logo" src={logo} />
          </Link>
          <button type="button" className={style.open_btn} onClick={handleLnbOpen}>
            <img alt='hamburger icon' src={hamburgerIcon} />
          </button>
        </>
        }
      </div>

      <div className={`${style.lnb} ${isLnbOpen === true ? style.open : ''}`}>
        <button type="button" className={style.close_btn} onClick={handleLnbOpen}>
          <img alt='close icon' src={closeIcon} />
        </button>
        <ul className={style.menu_list}>
          {menuList.map((item) => (
            <li key={item}>
              <Link to={item.location}>{item.name}</Link>
              {location.pathname === item.location && <img alt='shape icon' src={shapeIcon} />}
            </li>
          ))}
        </ul>
        <p className={style.lnb_foot}>
          Stories in Every Flavor, <br />
          Memories in Every Bite
        </p>
      </div>
    </div>
  )
}

export default MobileHeader;