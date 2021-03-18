import { useContext } from "react";
import { DrawContext } from "react-drawarea";

import Button from "./Button";
import DoubleButton from "./DoubleButton";

import styles from "../styles/Actions.module.css";

const Actions = ({
  color,
  thickness,
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
      <DoubleButton
        leftLabel="PAUSE"
        rightLabel="HIDE"
        onLeftClick={togglePaused}
        onRightClick={toggleHidden}
      />
      <DoubleButton
        leftLabel="COLOR"
        rightLabel="OPACITY"
        onLeftClick={nextColor}
        onRightClick={nextOpacity}
        background={color}
      />
      <Button onClick={nextThickness}>THICKNESS ({thickness})</Button>
      <Button onClick={toggleBackground}>BACKGROUND</Button>
      <Button onClick={undo}>UNDO</Button>
      <Button onClick={reset}>RESET</Button>
    </div>
  );
};

export default Actions;
