
import styles from './index.module.scss'

export default function NavBar({imgSrc,name}){


  return (
    <div className={styles["navbar"]}>
      <div className={styles["name"]}>你好，{name}</div>
      <div className={styles['temp']}>
        <img className={styles["avator"]} src={imgSrc} alt="" />
        <button className={styles["logout"]}>退出登录</button>
      </div>
    </div>
  );
}