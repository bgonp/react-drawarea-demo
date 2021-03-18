import { useState } from "react";
import { DrawArea } from "react-drawarea";

import Actions from "./Actions";
import DrawMessage from "./DrawMessage";
import Info from "./Info";

import styles from "../styles/App.module.css";

const COLORS = ["0099ff", "ef476f", "ffd166", "06d6a0", "073b4c"];
const OPACITIES = ["FF", "CC", "88", "44"];
const THICKNESS = [1, 5, 10, 15, 20];

const App = () => {
  const [paused, setPaused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [background, setBackground] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [opacityIndex, setOpacityIndex] = useState(0);
  const [thicknessIndex, setThicknessIndex] = useState(2);

  const togglePaused = () => setPaused((paused) => !paused);
  const toggleHidden = () => setHidden((hidden) => !hidden);
  const toggleBackground = () => setBackground((background) => !background);
  const nextColor = () => setColorIndex((colorIndex + 1) % COLORS.length);
  const nextOpacity = () =>
    setOpacityIndex((opacityIndex + 1) % OPACITIES.length);
  const nextThickness = () =>
    setThicknessIndex((thicknessIndex + 1) % THICKNESS.length);

  const color = `#${COLORS[colorIndex]}${OPACITIES[opacityIndex]}`;

  return (
    <div className={styles.container}>
      <DrawArea
        className={styles.drawarea}
        color={color}
        disabled={paused}
        hidden={hidden}
        thickness={THICKNESS[thicknessIndex]}
      >
        {background && (
          <div className={styles.background}>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              dolore totam nobis, quae corporis earum dolor sed consequatur cum
              nesciunt, similique sapiente, nostrum quas doloremque possimus
              laudantium aliquam dicta deleniti!
            </p>
          </div>
        )}
        <DrawMessage hidden={hidden} paused={paused} />
        <Actions
          color={color}
          thickness={THICKNESS[thicknessIndex]}
          togglePaused={togglePaused}
          toggleHidden={toggleHidden}
          toggleBackground={toggleBackground}
          nextColor={nextColor}
          nextOpacity={nextOpacity}
          nextThickness={nextThickness}
        />
      </DrawArea>
      <Info />
    </div>
  );
};

export default App;
