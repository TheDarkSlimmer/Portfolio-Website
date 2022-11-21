import { Fragment } from "react";
import styles from "./Message.module.css";
import envelope from "../../Images/secured-letter.png";

export default function Message({ openContactBox }) {
  return (
    <Fragment>
      <div className={styles.messageMain}>
        <button
          className={styles.messageButton}
          onClick={openContactBox}
        >
          Contact Me
          <img src={envelope} alt="envelope" className={styles.envelope}></img>
        </button>
      </div>
    </Fragment>
  );
}
