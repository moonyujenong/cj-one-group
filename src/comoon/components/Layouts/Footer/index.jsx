import { Link } from "react-router-dom";
import style from "./index.module.css";
import fullLogo from "../../../../assets/images/logo-text.png";

function Footer () {
  return (
    <footer className={style.container}>
      <div className={style.inner}>
        <div className={style.flex_wrap}>
          <img alt="full logo" src={fullLogo} />
          <ul className={style.terms_list}>
            <li>
              <Link to={'/participation'}>Rules of Participation</Link>
            </li>
            <li>
              <Link to={'/policy'}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={'/temrs'}>Terms and Conditions</Link>
            </li>
          </ul>
        </div>

        <p className={style.info}>
          First floor, 49 Frith street London, W1D 4SG <br/>
          Copyright ©2024. CJONE GROUP. All Rights <br/>Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer;