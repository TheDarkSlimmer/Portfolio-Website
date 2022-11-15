import { Fragment } from "react";
import styles from "./Contact.module.css";
import { useState, useReducer } from "react";

function errorReducer(state, action) {
  if (action.type === "Name") {
    return {
      nameIsValid: true,
      message: "Name is required",
    };
  } else if (action.type === "Email") {
    return {
      emailIsValid: true,
      message: "Email is required",
    };
  } else if (action.type === "Message") {
    return {
      messageIsValid: true,
      message: "Please type a message",
    };
  }
}

export default function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const errorInitialState = {
    nameIsValid: false,
    emailIsValid: false,
    messageIsValid: false,
    message: "",
  };
  const [errorState, dispatchError] = useReducer(
    errorReducer,
    errorInitialState
  );

  function submitForm(event) {
    event.preventDefault();

    if (!name.length) {
      dispatchError({ type: "Name" });
      return;
    }
    if (!email.length) {
      dispatchError({ type: "Email" });
      return;
    }
    if (!message.length) {
      dispatchError({ type: "Message" });
      return;
    }
    const data = {
      name: name,
      email: email,
      message: message,
    };

    console.log(data);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <Fragment>
      <div className={styles.contactMain}>
        <div className={styles.contactInputs}>
          <form onSubmit={submitForm}>
            <label>Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
            {errorState.nameIsValid && (
              <span className={styles.errorMessage}>{errorState.message}</span>
            )}

            <label>Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
            {errorState.emailIsValid && (
              <span className={styles.errorMessage}>{errorState.message}</span>
            )}
            <label>Message</label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            {errorState.messageIsValid && (
              <span className={styles.errorMessage}>{errorState.message}</span>
            )}
            <button>Send</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
