import { Fragment } from "react";
import styles from "../HomeCompoents/SocialMedia.module.css";
import gitHub from "../.././Images/SocialMedia/github.svg";
import linkedIn from "../.././Images/SocialMedia/linkedin.svg";
import twitter from "../.././Images/SocialMedia/twitter.svg";

export default function SocialMedia(props) {
  return (
    <Fragment>
      <div className={styles.socialMediaMain}>
        <span className={styles.gitHub}>
          <button className={styles.gitHubButton}>
            <img src={gitHub} alt="github-icon" />
          </button>
        </span>
        <span className={styles.linkedIn}>
          <button className={styles.linkedInButton}>
            <img src={linkedIn} alt="linkedin-icon" />
          </button>
        </span>
        <span className={styles.twitter}>
          <button className={styles.twitterButton}>
            <img src={twitter} alt="twitter-icon" />
          </button>
        </span>
      </div>
    </Fragment>
  );
}
