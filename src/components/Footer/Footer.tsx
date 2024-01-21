import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import ELEMENTS from "../../assets/icon/ELEMENTS.svg";
import phone from "../../assets/icon/phone.svg";
import mail from "../../assets/icon/mail.svg";
import Group10731 from "../../assets/images/Group10731.svg";
import Group10732 from "../../assets/images/Group10732.svg";
import FB from "../../assets/icon/FB.svg";
import insta from "../../assets/icon/insta.svg";
import lingdin from "../../assets/icon/lingdin.svg";
import tel from "../../assets/icon/tel.svg";
import wats from "../../assets/icon/wats.svg";

export const Footer = () => {
  return (
    <div className={styles["container"]}>
      <div data-space></div>
      <div className={styles["wrapper-container"]}>
        <div className={styles["colum-container"]}>
          <h3>OUR ECOSYSTEM</h3>
          <p>Sage</p>
          <div className={styles["link-container"]}>
            <Link to="">Club 301</Link>
            <Link to="">Ambassadors</Link>
            <Link to="">Volunteers</Link>
            <Link to="">Experts</Link>
            <Link to="">Partners</Link>
            <Link to="">Fund friends</Link>
          </div>
        </div>
        <div className={styles["colum-container"]}>
          <h3>OUR ECOSYSTEM</h3>
          <p>Projects</p>
          <div className={styles["link-container"]}>
            <Link to="">Media</Link>
            <Link to="">Calendar</Link>
            <Link to="">About us</Link>
            <Link to="">Contact</Link>
          </div>
        </div>
        <div className={styles["item-container"]}>
          <div className={styles["item"]}>
            <img src={ELEMENTS} alt="" />
            <p>Ереван, ул. Московяна 24</p>
          </div>
          <div className={styles["item"]}>
            <img src={phone} alt="" />
            <p>+374 567890</p>
          </div>
          <div className={styles["item"]}>
            <img src={mail} alt="" />
            <p>301@loftpineapple.com</p>
          </div>
        </div>
        <div className={styles["Follow-container"]}>
          <p className="desktop">Follow Us</p>
          <span className="desktop"></span>
          <Link to="">
            <img src={FB} alt="" />
          </Link>
          <Link to="">
            <img src={insta} alt="" />
          </Link>
          <Link to="">
            <img src={lingdin} alt="" />
          </Link>
          <Link to="">
            <img src={tel} alt="" />
          </Link>
          <Link to="">
            <img src={wats} alt="" />
          </Link>
        </div>
        <div className={styles["background"]}>
          <img className="desktop" src={Group10731} alt="" />
          <img className="mobile" src={Group10732} alt="" />
        </div>
      </div>
    </div>
  );
};
