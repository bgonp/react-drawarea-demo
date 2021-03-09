import Button from "./Button";

import styles from "../styles/Info.module.css";

const PACKAGE_URL = "https://github.com/bgonp/react-drawarea#readme";
const SOURCE_URL = "https://github.com/bgonp/react-drawarea-demo";

const Info = () => (
  <div className={styles.info}>
    <Button href={PACKAGE_URL}>
      package <strong>react-drawarea</strong> demo
    </Button>
    <Button href={SOURCE_URL}>source code</Button>
  </div>
);

export default Info;
