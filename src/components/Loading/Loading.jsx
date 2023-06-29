import styles from "./index.module.css";
import PropTypes from "prop-types";

const Loading = () => {
  // if (!msg) {
  //   return null;
  // }
  return (
    <div className={styles["t-loading"]}>
      <div className={styles["t-loading__toast"]}>
        <i className={styles["t-loading__icon"]}></i>
        <span className={styles["t-loading__content"]}>{`正在加载...`}</span>
      </div>
    </div>
  );
};
export default Loading;

// Loading.propTypes = {
//   msg: PropTypes.string,
// };

// Loading.defaultProps = {
//   msg: "正在加载...",
// };
