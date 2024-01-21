import styles from "./HypothesesOnTheFuture.module.scss";
import Group5963 from "../../assets/icon/Group5963.svg";
import Vector1224 from "../../assets/icon/Vector1224.svg";

import { useState } from "react";
import classNames from "classnames/bind";
import { buttonData, textData } from "./constante/mock";
const cx = classNames.bind(styles);

export const HypothesesOnTheFuture = () => {
  const [active, setActive] = useState<string>("1");
  const [activeContainer, setActiveContainer] = useState<boolean>(false);

  const onClick = (text: string) => {
    setActive(text);
    setActiveContainer(!activeContainer);
  };
  return (
    <div className={styles["container"]}>
      <div className={styles["up-container"]}>
        <div className={styles["title"]}>
          <img src={Group5963} alt="" />
          <h2>ГИПОТЕЗЫ БУДУЩЕГО</h2>
        </div>
        <p className={styles["paragraph"]}>
          Мы разработали четыре основные гипотезы, согласно которым Армения
          может развиваться и позиционировать себя на карте планеты.
        </p>
      </div>
      <div className={styles["down-container"]}>
        <div className={styles["wrapper-container"]}>
          <div
            className={cx("button-container", {
              "active-button-container": activeContainer,
            })}
          >
            {buttonData.map(({ id, text }) => (
              <button
                key={id}
                className={cx({ active: active === id })}
                onClick={() => onClick(id)}
              >
                {text}
                {active === id && (
                  <img className="mobile" src={Vector1224} alt="" />
                )}
              </button>
            ))}
          </div>
          <div className={styles["paragraph-container"]}>
            {textData.map(
              ({ text1, text2, text3 }, index) =>
                index === Number(active) - 1 && (
                  <>
                    <p>{text1}</p>
                    <p>{text2}</p>
                    <p>{text3}</p>
                  </>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
