import { Fragment } from "react";
import styles from './Message.module.css'


export default function Message(props){

    return(
        <Fragment>
            <div className={styles.messageMain}>
                <button className={styles.messageButton}>Message Me</button>
            </div>
        </Fragment>
    )
}