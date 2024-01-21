import styles from "./OurProjects.module.scss";
import Group5963 from "../../assets/icon/Group5963.svg";
import Rectangle5097 from "../../assets/images/Rectangle5097.png";
import Arrow141 from "../../assets/icon/Arrow141.svg";
import Group6011 from "../../assets/icon/Group6011.svg";
import { useState } from "react";

export const OurProjects = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3;
  return (
    <div className={styles["container"]}>
      <div className={styles["wrapper-container"]}>
        <div className={styles["title"]}>
          <img src={Group5963} alt="" />
          <h2>НАШИ ПРОЕКТЫ</h2>
        </div>
        <p className={styles["paragraph"]}>
          За несколько лет работы фонда «301. Земля мудрости» мы запустили ряд
          важных проектов по направлениям образования, культуры, науки и
          инноваций и целостного развития территории.
        </p>
        <div
          className={styles["slider"]}
          style={{ transform: `translateX(${-activeSlide * 100}%)` }}
        >
          <div className={styles["slide"]}>
            <img
              src={Rectangle5097}
              alt=""
              className={styles["project-image"]}
            />
            <div className={styles["box"]}>
              <div className={styles["text-container"]}>
                <h4>Имя проекта</h4>
                <p>Культура</p>
                <p>Виктор Браун </p>
              </div>
              <div className={styles["flag"]}>
                <img src={Group6011} alt="" />
                <p>5</p>
              </div>
            </div>
          </div>
          <div className={styles["slide"]}>
            <img
              src={Rectangle5097}
              alt=""
              className={styles["project-image"]}
            />
            <div className={styles["box"]}>
              <div className={styles["text-container"]}>
                <h4>Имя проекта</h4>
                <p>Культура</p>
                <p>Виктор Браун </p>
              </div>
              <div className={styles["flag"]}>
                <img src={Group6011} alt="" />
                <p>8</p>
              </div>
            </div>
          </div>
          <div className={styles["slide"]}>
            <img
              src={Rectangle5097}
              alt=""
              className={styles["project-image"]}
            />
            <div className={styles["box"]}>
              <div className={styles["text-container"]}>
                <h4>Имя проекта</h4>
                <p>Культура</p>
                <p>Виктор Браун </p>
              </div>
              <div className={styles["flag"]}>
                <img src={Group6011} alt="" />
                <p>15</p>
              </div>
            </div>
          </div>
          <div className={`${styles["slide"]} ${"mobile"}`}>
            <img
              src={Rectangle5097}
              alt=""
              className={styles["project-image"]}
            />
            <div className={styles["box"]}>
              <div className={styles["text-container"]}>
                <h4>Имя проекта</h4>
                <p>Культура</p>
                <p>Виктор Браун </p>
              </div>
              <div className={styles["flag"]}>
                <img src={Group6011} alt="" />
                <p>15</p>
              </div>
            </div>
          </div>
          <div className="desktop">
            <button
              className={styles["left-button"]}
              onClick={() => setActiveSlide(Math.max(activeSlide - 1, 0))}
            >
              <img src={Arrow141} alt="" />
            </button>
            <button
              className={styles["right-button"]}
              onClick={() =>
                setActiveSlide(Math.min(activeSlide + 1, totalSlides - 1))
              }
            >
              <img src={Arrow141} alt="" />
            </button>
          </div>
        </div>
        <div className={styles["other-container"]}>
          <button>Другие проекты</button>
        </div>
      </div>
    </div>
  );
};
