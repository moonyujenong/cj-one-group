import style from "./index.module.scss";

function Body ({children}) {
  return (
    <div className={style.container}>{children}</div>
  )
}

export default Body;