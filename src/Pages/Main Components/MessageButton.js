import messageIcon from "../../Images/icons8-message-64.png";
import MBstyles from "../Main Components/MessageButton.module.css";

export default function MessageButton() {
  return (
    <>
      <button className={MBstyles.MBbutton}>
        <img
          className={MBstyles.MBimg}
          alt="message button"
          src={messageIcon}
        />
      </button>
    </>
  );
}
