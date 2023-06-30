
import styles from './index.module.scss'

export default function CenterCard({name}){


  return (
    <>
      {name ? (
        <div className={styles.cardbox}>
          <div className={styles.title}>与 {name} 进行视频通话：</div>
          <button className={styles.btn}>点击邀请</button>
        </div>
      ) : (
        <div className={styles.title}>选择用户开始聊天</div>
      )}
    </>
  );
}