import styles from "./index.module.scss";


function getTypeIcon(type){
  let iconName = ''
  let textColor = ''
  let bgColor = ''
  switch (type) {
    case 'success':
      iconName = "icon-happy2";
      textColor = '#67c23a'
      bgColor = "#e1f3d8";
      break;
    case 'error':
      iconName = "icon-angry";
      textColor = '#f56c6c';
      bgColor = '#fef0f0'
      break
    case 'warning':
      iconName = "icon-rcd-unhappy-circle-f";
      textColor = '#e6a23c'
      bgColor = '#fdf6ec'
      break
    default:
      iconName = "icon-normal-f";
      textColor = '#909399'
      bgColor = '#ebeef5'
      break;
  }
  return [iconName,textColor,bgColor]
}

export default function Message({msg,type}){
  const [iconName,textColor,bgColor] = getTypeIcon(type)
  return (
    <div className={styles["box"]} style={{backgroundColor:bgColor}}>
      <i className={`iconfont ${iconName}`} style={{ color: textColor }}></i>
      <span style={{color:textColor}}>{msg}</span>
    </div>
  );
}