import { Fragment } from "react";
import styles from "./ImageUI.module.css";
import mailOpened from "../../Images/opened.svg";
import SocialMedia from "../HomeCompoents/SocialMedia.js";

export default function ImageUI(props) {
  return (
    <Fragment>
      <div className={styles.UIMain}>
        <div className={styles.imageMain}>
          <img src={mailOpened} alt="mail-opened" />
        </div>
        <div className={styles.informationMain}>
          <span className={styles.information}>
            <h1>Lets Chat</h1>
            lorem Ipsum is Lorem Ipsum and Lorem Ipsum is a utility for
            maintaining lorem ipsum. Lorem Ipsum is a utility for maintaining
            lorem ipsum. Lorem Ipsum is a utility for maintaining lorem ipsum.
            Lorem Ipsum is a utility for maintaining lore mipsum. Lorem Ipsum
            Ips
          </span>
        </div>
        <div className={styles.socialMediaInfo}>
          <SocialMedia />
        </div>
      </div>
    </Fragment>
  );
}
