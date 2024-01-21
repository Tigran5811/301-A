import styles from "./News.module.scss";
import image579 from "../../assets/images/image579.png";
import Arrow140 from "../../assets/icon/Arrow140.svg";
import Group5947 from "../../assets/icon/Group5947.svg";
import { useState } from "react";

export const News = () => {
  const totalSlides = 3;
  const [activeIndex, setActiveIndex] = useState(1);

  const handleButtonClick = (index: number) => {
    let newIndex = index;

    if (newIndex < 0) {
      newIndex = totalSlides - 1;
    } else if (newIndex >= totalSlides) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["wrapper-container"]}>
        <div className={styles["title"]}>
          <img src={Group5947} alt="" />
          <h2>Новости "301"</h2>
        </div>
        <div className={styles["slider"]}>
          <div
            className={`${styles["slide"]} ${
              activeIndex === 0 ? styles["active"] : ""
            }`}
          >
            <img src={image579} alt="" />
            <div>
              <h4>
                Дети из Арцаха отметили новогодние праздники в фонде `301`
              </h4>
              <p>23.03.2023 0</p>
            </div>
          </div>
          <div
            className={`${styles["slide"]} ${
              activeIndex === 1 ? styles["active"] : ""
            }`}
          >
            <img src={image579} alt="" />
            <div>
              <h4>
                Дети из Арцаха отметили новогодние праздники в фонде `301`
              </h4>
              <p>23.03.2023 1</p>
            </div>
          </div>
          <div
            className={`${styles["slide"]} ${
              activeIndex === 2 ? styles["active"] : ""
            }`}
          >
            <img src={image579} alt="" />
            <div>
              <h4>
                Дети из Арцаха отметили новогодние праздники в фонде `301`
              </h4>
              <p>23.03.2023 2</p>
            </div>
          </div>
          <div>
            <button
              className={styles["left-button"]}
              onClick={() => handleButtonClick(activeIndex - 1)}
            >
              <img src={Arrow140} alt="" />
            </button>
            <button
              className={styles["right-button"]}
              onClick={() => handleButtonClick(activeIndex + 1)}
            >
              <img src={Arrow140} alt="" />
            </button>
          </div>
        </div>
        <button className={styles["news-button"]}>
          <h4>Все новости</h4>
        </button>
      </div>
    </div>
  );
};
