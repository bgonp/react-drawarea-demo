import { useContext } from "react";
import { DrawContext } from "react-drawarea";

import styles from "../styles/DrawMessage.module.css";

const DrawMessage = ({ paused, hidden }) => {
  const { lines } = useContext(DrawContext);

  let message;
  if (hidden) message = "Hidden";
  else if (paused) message = "Paused";
  else if (lines.length === 0) message = "Draw!";
  else return null;

  return (
    <div className={styles.message}>
      <span>{message}</span>
    </div>
  );
};

export default DrawMessage;
