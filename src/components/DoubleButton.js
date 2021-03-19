import styles from "../styles/DoubleButton.module.css";

const DoubleButton = ({
  leftLabel,
  rightLabel,
  onLeftClick,
  onRightClick,
  background = "",
}) => (
  <div className={styles.buttons}>
    <button
      className={styles.left}
      onClick={onLeftClick}
      style={{ background }}
    >
      {leftLabel}
    </button>
    <button
      className={styles.right}
      onClick={onRightClick}
      style={{ background }}
    >
      {rightLabel}
    </button>
  </div>
);

export default DoubleButton;
