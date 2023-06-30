
import styles from './index.module.scss'

export default function FriendsList({ friendsInfoList,clickFriend }) {
  return (
    <div className={styles["friendsbox"]}>
      {friendsInfoList.map(({ imgUrl, name, status }, idx) => (
        <div className={styles["friend"]} key={idx} onClick={() => clickFriend(name)}>
          <div className={styles["temp"]}>
            <img className={styles["avator"]} src={imgUrl} alt="" />
            <span className={styles["name"]}>{name}</span>
          </div>
          <div className={styles["status"]}>
            <div
              className={styles["circle"]}
              style={{ backgroundColor: status ? "#67c23a" : "#f56c6c" }}
            ></div>
            <span>{status ? "在线" : "离线"}</span>
          </div>
        </div>
      ))}
    </div>
  );
}