import { Fragment } from "react";
import styles from "../HomeCompoents/SocialMedia.module.css";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

export default function SocialMedia(props) {
  return (
    <Fragment>
      <div className={styles.socialMediaMain}>
        <span className={styles.gitHub}>
          <AiFillGithub className={styles.socialMediaIcons} />
        </span>
        <span className={styles.linkedIn}>
          <FaLinkedinIn className={styles.socialMediaIcons} />
        </span>
        <span className={styles.twitter}>
          <AiOutlineTwitter className={styles.socialMediaIcons} />
        </span>
      </div>
    </Fragment>
  );
}
