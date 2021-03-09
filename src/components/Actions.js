import { useContext } from "react";
import { DrawContext } from "react-drawarea";

import Button from "./Button";

import styles from "../styles/Actions.module.css";

const Actions = ({
  toggleBackground,
  togglePaused,
  toggleHidden,
  nextColor,
  nextOpacity,
  nextThickness,
}) => {
  const { reset, undo } = useContext(DrawContext);

  return (
    <div className={styles.actions}>
      <Button onClick={toggleBackground}>BACKGROUND</Button>
      <Button onClick={togglePaused}>PAUSE</Button>
      <Button onClick={toggleHidden}>HIDE</Button>
      <Button onClick={nextColor}>COLOR</Button>
      <Button onClick={nextOpacity}>OPACITY</Button>
      <Button onClick={nextThickness}>THICKNESS</Button>
      <Button onClick={undo}>UNDO</Button>
      <Button onClick={reset}>RESET</Button>
    </div>
  );
};

export default Actions;
