import { useContext } from "react";
import { DrawContext } from "react-drawarea";

import styles from "../styles/DrawMessage.module.css";

const DrawMessage = () => {
  const { lines } = useContext(DrawContext);

  if (lines.length > 0) return null;

  return (
    <div className={styles.message}>
      <span>Draw!</span>
    </div>
  );
};

export default DrawMessage;
