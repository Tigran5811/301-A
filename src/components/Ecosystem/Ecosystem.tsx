import styles from "./Ecosystem.module.scss";
import Group5785 from "../../assets/icon/Group5785.svg";
import Group5850 from "../../assets/icon/Group5850.svg";
import Group6016 from "../../assets/icon/Group6016.svg";
import Group5807 from "../../assets/icon/Group5807.svg";
import Group6017 from "../../assets/icon/Group6017.svg";
import Group5854 from "../../assets/icon/Group5854.svg";
import Group6018 from "../../assets/icon/Group6018.svg";
import Group5975 from "../../assets/icon/Group5975.svg";
import Group10485 from "../../assets/icon/Group10485.svg";
import handshelping from "../../assets/icon/handshelping.svg";
import Group10731 from "../../assets/icon/Group10731.svg";
import Group5976 from "../../assets/icon/Group5976.svg";
import Group10732 from "../../assets/icon/Group10732.svg";
import Group5819 from "../../assets/icon/Group5819.svg";
import download2 from "../../assets/icon/download2.svg";
import digitainLogo2 from "../../assets/icon/digitainLogo2.svg";
import Maskgroup from "../../assets/icon/Maskgroup.svg";
import Vivamtslogo2 from "../../assets/icon/Vivamtslogo2.svg";

import { Button } from "../Button/Button";
import { Link } from "react-router-dom";

export const Ecosystem = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["wrapper-container"]}>
        <div className={styles["title"]}>
          <img src={Group5785} alt="" />
          <h2>ЭКОСИСТЕМА Клуб «301»</h2>
        </div>
        <p className={styles["paragraph"]}>
          Мы видим два основный пути развития: с одной стороны — мудрое
          использовании потенциала, знаний и накопленного
          культурно-исторического опыта армянского народа; с другой —
          привлечение нестандартно мыслящих людей, как из Армении, так и из
          других стран, способных по-новому взглянуть на сложившуюся картину
          мира. Поэтому мы интегрируем в свою экосистему всех, кто готов вместе
          с нами строить благополучное будущее Армении.
        </p>
        <div className={`${styles["title"]} ${styles["icon"]}`}>
          <img src={Group5850} alt="" />
          <h2>Мудрецы</h2>
        </div>
        <div className={styles["item-container"]}>
          <div>
            <p className={styles["paragraph"]}>
              В рамках проекта на постоянное жительство в Армению переедет 301
              мудрец. Это люди больше чем просто профессионалы в своей области,
              это мудрецы — мыслители и деятели, люди большого ума с
              нестандартным мышлением и неожиданными взглядами. В Армении будут
              созданы все условия для реализации их идей, что должно привести к
              осуществлению ряда прорывных проектов.На сегодняшний день ядро
              Фонда составляют четыре мудреца, приехавших в Армению из разных
              стан мира и решивших связать свою жизнь с армянской землей.
            </p>
            <div className={styles["button-container"]}>
              <Button
                data={{
                  "data-botton": "button",
                  "data-height": "50",
                  "data-accent-pink": true,
                }}
              >
                <span>Узнать больше</span>
              </Button>
            </div>
          </div>
          <div className={styles["img"]}>
            <img src={Group6016} alt="" />
          </div>
        </div>
        <div
          className={`${styles["title"]} ${styles["icon"]}  ${styles["end"]}`}
        >
          <img src={Group5807} alt="" />
          <h2>доноры «301»</h2>
        </div>
        <div className={styles["item-container"]}>
          <div data-order="1" className={styles["img"]}>
            <img src={Group6017} alt="" />
          </div>
          <div>
            <p className={styles["paragraph"]}>
              В рамках проекта на постоянное жительство в Армению переедет 301
              мудрец. Это люди больше чем просто профессионалы в своей области,
              это мудрецы — мыслители и деятели, люди большого ума с
              нестандартным мышлением и неожиданными взглядами. В Армении будут
              созданы все условия для реализации их идей, что должно привести к
              осуществлению ряда прорывных проектов.На сегодняшний день ядро
              Фонда составляют четыре мудреца, приехавших в Армению из разных
              стан мира и решивших связать свою жизнь с армянской землей.
            </p>
            <div className={styles["button-container"]}>
              <Button
                data={{
                  "data-botton": "button",
                  "data-height": "50",
                  "data-primary-green-shadow": true,
                }}
              >
                <span>Стань одним из 301</span>
              </Button>
              <Button
                data={{
                  "data-botton": "button",
                  "data-height": "50",
                  "data-accent-green": true,
                }}
              >
                <span>Узнать больше</span>
              </Button>
            </div>
          </div>
        </div>
        <div className={`${styles["title"]} ${styles["icon"]}`}>
          <img src={Group5854} alt="" />
          <h2>Амбассадоры</h2>
        </div>
        <div className={styles["item-container"]}>
          <div>
            <p className={styles["paragraph"]}>
              Амбассадоры фонда являются официальными представителями нашего
              фонда в различных странах мира. Основная миссия наших амбассадоров
              — представлять интересы фонда в местах их проживания, доносить
              миссию и ценности фонда «301», искать и находить поддержку среди
              тех, кто разделяет наши взгляды.
            </p>
            <div className={styles["button-container"]}>
              <Button
                data={{
                  "data-botton": "button",
                  "data-height": "50",
                  "data-primary-orange-shadow": true,
                }}
              >
                <span>Стать амбассадором </span>
              </Button>
            </div>
          </div>
          <div className={styles["img"]}>
            <img src={Group6018} alt="" />
          </div>
        </div>
        <div
          className={`${styles["title"]} ${styles["icon"]}  ${styles["end"]}`}
        >
          <img src={Group5975} alt="" />
          <h2>Эксперты</h2>
        </div>
        <div className={styles["item-container"]}>
          <div data-order="1" className={styles["img"]}>
            <img src={Group10485} alt="" />
          </div>
          <div>
            <p className={styles["paragraph"]}>
              Компетентные специалисты в различных отраслях — важное звено
              экосистемы фонда «301». Эксперты подключаются к проектам на разных
              стадиях: помогают проверять гипотезы и реализовывать идеи
              мудрецов. В наших проектах активное участие принимают эксперты в
              области науки, культуры, образования, истории, искусства и многих
              других.
            </p>
            <div className={styles["button-container"]}>
              <Button
                data={{
                  "data-botton": "button",
                  "data-height": "50",
                  "data-primary-lite-blue-shadow": true,
                }}
              >
                <span>Стать экспертом </span>
              </Button>
            </div>
          </div>
        </div>
        <div className={`${styles["title"]} ${styles["icon"]}`}>
          <img src={handshelping} alt="" />
          <h2>Партнеры</h2>
        </div>
        <div className={styles["item-container"]}>
          <div>
            <p className={styles["paragraph"]}>
              Нашими партнерами являются различные организации, а также
              отдельные личности, которые разделяют наши идеи. Наши партнеры
              поддерживают проекты фонда и оказывают содействие и в их
              реализации, предоставляя нам различные ресурсы.
            </p>
            <div className={styles["button-container"]}>
              <Button
                data={{
                  "data-botton": "button",
                  "data-height": "50",
                  "data-primary-purple-shadow": true,
                }}
              >
                <span>Стать партнером</span>
              </Button>
              <Button
                data={{
                  "data-botton": "button",
                  "data-height": "50",
                  "data-accent-purple": true,
                }}
              >
                <span>Все партнеры</span>
              </Button>
            </div>
          </div>
          <div className={styles["img"]}>
            <img src={Group10732} alt="" />
          </div>
        </div>
        <div className={styles["link-container"]}>
          <Link to="">
            <img src={Group5819} alt="" />
          </Link>
          <Link to="">
            <img src={download2} alt="" />
          </Link>
          <Link to="">
            <img src={digitainLogo2} alt="" />
          </Link>
          <Link to="">
            <img src={Maskgroup} alt="" />
          </Link>
          <Link to="">
            <img src={Vivamtslogo2} alt="" />
          </Link>
        </div>
        <div
          className={`${styles["title"]} ${styles["icon"]} ${styles["end"]}`}
        >
          <img src={Group5976} alt="" />
          <h2>Друзья фонда</h2>
        </div>
        <div className={styles["item-container"]}>
          <div className={styles["img"]}>
            <img data-order="1" src={Group10731} alt="" />
          </div>
          <div>
            <p className={styles["paragraph"]}>
              Друзьями фонда являются все, кто помогает: ресурсами, временем,
              поддержкой, идеями, и остается рядом. <br /> <br /> Чужих не
              бывает.
            </p>
            <div className={styles["button-container"]}>
              <Button
                data={{
                  "data-botton": "button",
                  "data-height": "50",
                  "data-primary-blue-shadow": true,
                }}
              >
                <span>Стать экспертом </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
