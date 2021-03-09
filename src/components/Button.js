import styles from "../styles/Button.module.css";

const Button = ({ onClick, children, href }) =>
  href ? (
    <a className={styles.button} href={href} rel="noreferrer" target="_blank">
      {children}
    </a>
  ) : (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );

export default Button;
