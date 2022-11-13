import { Fragment } from "react";
import styles from "../HomeCompoents/SocialMedia.module.css";
import GithubIcon from "../SVG components/GithubIcon";
import LinkedInIcon from "../SVG components/LinkedInIcon";
import TwitterIcon from "../SVG components/TwitterIcon";

export default function SocialMedia(props) {
  return (
    <Fragment>
      <div className={styles.socialMediaMain}>
        <span className={styles.gitHub}>
          <GithubIcon />
        </span>
        <span className={styles.linkedIn}>
          <LinkedInIcon />
        </span>
        <span className={styles.twitter}>
          <TwitterIcon />
        </span>
      </div>
    </Fragment>
  );
}
