import style from "./index.module.css";
import MobileHeader from "./MobileHeader";
import PcHeader from "./PcHeader";
import useResponsive from "../../../hook/Responsive";

function Header () {
  const innerWidth = useResponsive();

  return (
    <header className={style.container}>
      {innerWidth >= 1024 ? <PcHeader /> : <MobileHeader />}
    </header>
  )
}

export default Header;