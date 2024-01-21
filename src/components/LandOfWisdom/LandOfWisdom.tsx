import styles from "./LandOfWisdom.module.scss";
import pinkLogo from "../../assets/icon/pinkLogo.svg";
import palace from "../../assets/icon/palace.svg";
import naxshuxix from "../../assets/icon/naxshuxix.svg";
import naxsh from "../../assets/icon/naxsh.svg";
import FBB from "../../assets/icon/FBB.svg";
import instaB from "../../assets/icon/instaB.svg";
import lingdinB from "../../assets/icon/lingdinB.svg";
import telB from "../../assets/icon/telB.svg";
import watsB from "../../assets/icon/watsB.svg";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export const LandOfWisdom = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["box"]} data-index="9">
        <div className={styles["text-container"]}>
          <h1>ЗЕМЛЯ МУДРОСТИ</h1>
          <p>
            Изменение сценария будущего Армении путем создания онтологической
            безопасности. В центре нашего внимания Армения — земля многовековой
            культуры и мудрости, которой есть что предложить миру.
          </p>
          <div className={styles["buttons-container"]}>
            <Button
              data={{
                "data-botton": "button",
                "data-height": "50",
                "data-primary": true,
              }}
            >
              <span>Стань одним из 301</span>
            </Button>
            <Button
              data={{
                "data-botton": "button",
                "data-height": "50",
                "data-accent": true,
              }}
            >
              <span>Весь проект</span>
            </Button>
          </div>
        </div>
        <div className={styles["images-container"]}>
          <img src={pinkLogo} alt="" className={styles["pink-logo"]} />
          <div className={`${styles["Follow-container"]} desktop`}>
            <p>Follow Us</p>
            <span></span>
            <Link to="">
              <img src={FBB} alt="" style={{ fill: "red" }} />
            </Link>
            <Link to="">
              <img src={instaB} alt="" />
            </Link>
            <Link to="">
              <img src={lingdinB} alt="" />
            </Link>
            <Link to="">
              <img src={telB} alt="" />
            </Link>
            <Link to="">
              <img src={watsB} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles["naxsh-container"]}>
        <img className={styles["image-palace"]} src={palace} alt="" />
        <img className={styles["image-naxsh"]} src={naxsh} alt="" />
      </div>
      <img
        className={styles["image-naxshuxix"]}
        data-inxex="9"
        src={naxshuxix}
        alt=""
      />
      <img
        className={styles["image-naxshuxix1"]}
        data-inxex="9"
        src={naxshuxix}
        alt=""
      />
    </div>
  );
};
