import messageStyles from "../Main Components/MessagePop.module.css";
import sendImg from "../../Images/icons8-send-64.png";

export default function MessagePop(props) {
  return (
    <form className={messageStyles.MPform}>
      <h2 className={messageStyles.mHeader}>Get in Touch</h2>
      <input type="text" placeholder="Name" />
      <br />
      <input type="email" placeholder="Email" />
      <br />
      <label>Message</label>
      <br />
      <textarea></textarea>
      <br />
      <button className={messageStyles.mButton}>
        Send <img src={sendImg} className={messageStyles.sendImg} alt="send icon" />
      </button>
    </form>
  );
}
