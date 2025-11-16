import { RotatingLines } from "react-loader-spinner";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader}>
      <RotatingLines
        strokeColor="#fe5d42"
        strokeWidth="2"
        animationDuration="0.75"
        width="120"
        visible={true}
      />
    </div>
  );
}

export default Loader;
