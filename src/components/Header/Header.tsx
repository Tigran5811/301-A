import { Link } from "react-router-dom";
import logo from "../../assets/icon/logo.svg";
import Group5964 from "../../assets/icon/Group5964.svg";
import Group5972 from "../../assets/icon/Group5972.svg";
import styles from "./Header.module.scss";
import { Button } from "../Button/Button";
import { useState } from "react";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
export const Header = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <div className={styles["header-container"]}>
      <div className={styles["header-wrapper"]}>
        <button
          onClick={() => {
            setActive(!active);
          }}
          className="mobile"
        >
          <img src={Group5972} alt="" />
        </button>
        <Link className={styles["logo"]} to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className={styles["nav-container"]}>
          <div className={cx("nav-links", { active: active })}>
            <Link to="/" className={styles["nav-link"]}>
              Home
            </Link>
            <Link to="/projects" className={styles["nav-link"]}>
              Projects
            </Link>
            <Link to="/media" className={styles["nav-link"]}>
              Media
            </Link>
            <Link to="/calendar" className={styles["nav-link"]}>
              Calendar
            </Link>
            <Link to="/aboutus" className={styles["nav-link"]}>
              About us
            </Link>
            <Link to="/contact" className={styles["nav-link"]}>
              Contact
            </Link>
          </div>
          <div className={styles["buttons-container"]}>
            <Button
              data={{
                "data-primary-micro": true,
              }}
            >
              ENG
            </Button>

            <img className="mobile" src={Group5964} alt="" />

            <Button
              data={{
                "data-primary-small": true,
              }}
            >
              Donate
            </Button>
            <Button
              data={{
                "data-accent-small": true,
              }}
            >
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
