import styles from "./WriteToUs.module.scss";
import Group5971 from "../../assets/icon/Group5971.svg";
import { Button } from "../Button/Button";

export const WriteToUs = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["wrapper-container"]}>
        <div className={styles["title"]}>
          <img src={Group5971} alt="" />
          <h2>Напишите нам</h2>
        </div>
        <div className={styles["input-container"]}>
          <div className={styles["up-container"]}>
            <div>
              <h3 className="mobile">Имя</h3>
              <input type="text" placeholder="Ваша имя" />
            </div>
            <div>
              <h3 className="mobile">Эл. почта</h3>
              <input type="email" placeholder="Ваша почта" />
            </div>
          </div>
          <div className={styles["down-container"]}>
            <div>
              <h3 className="mobile">Сообщение</h3>
              <input type="" placeholder="Написать " />
            </div>

            <Button
              data={{
                "data-botton": "button",
                "data-height": "50",
                "data-primary-shadow": true,
              }}
            >
              <span>Send</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
