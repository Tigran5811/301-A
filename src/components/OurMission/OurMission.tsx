import { Container } from "../Container/Container";
import styles from "./OurMission.module.scss";
import Group5758 from "../../assets/icon/Group5758.svg";
import { Button } from "../Button/Button";

export const OurMission = () => {
  return (
    <Container>
      <div className={styles["container"]}>
        <div className={styles["wrapper-container"]}>
          <div className={styles["title"]}>
            <img src={Group5758} alt="" />
            <h2>НАША МИССИЯ</h2>
          </div>
          <h3>
            Наша миссия — обеспечить <span>онтологическую безопасность</span>{" "}
            Армении.
          </h3>
          <p>
            Мы запускаем научные проекты, реализовываем культурные инициативы,
            строим образовательную среду, формируем экспертное сообщество — это
            актуализирует систему привычных ценностей и позволяет менять
            сценарий будущего. Мы верим, что именно такой подход сможет укрепить
            место армян как носителей уникального культурного кода в современном
            мире. Мы выстраиваем те границы Армении, которые никому не под силу
            нарушить. Мы создаем будущее, в котором армянская цивилизация
            уникальна и ценна для мира.
          </p>
          <Button
            data={{
              "data-accent-pink": true,
              "data-botton": "button",
              "data-height": "50",
            }}
          >
            Узнать больше
          </Button>
        </div>
      </div>
    </Container>
  );
};
