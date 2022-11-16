import { Fragment } from "react";
import styles from "./Contact.module.css";
import { useState, useReducer } from "react";
import ImageUI from "./ImageUI";

function initializer(errorInitialState) {
  return errorInitialState;
}

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
  } else if (action.type === "reset") {
    return initializer(action.payload);
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
    errorInitialState,
    initializer
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

  function nameInputHnadler(event) {
    setName(event.target.value);
    if (name.length > 4) {
      dispatchError({
        type: "reset",
        payload: errorInitialState,
      });
    }
  }

  function emailInputHandler(event) {
    setEmail(event.target.value);
    if (email.length) {
      dispatchError({
        type: "reset",
        payload: errorInitialState,
      });
    }
  }
  function messageHandler(event) {
    setMessage(event.target.value);
    if (message.length) {
      dispatchError({
        type: "reset",
        payload: errorInitialState,
      });
    }
  }


  return (
    <Fragment>
      <div className={styles.contactMain}>
        <ImageUI/>
        <div className={styles.contactInputs}>
          <form onSubmit={submitForm}>
            <label>Name</label>
            <input
              className={
                errorState.nameIsValid
                  ? `${styles.nameInputInvalid}`
                  : `${styles.nameInput}`
              }
              type="text"
              onChange={nameInputHnadler}
              value={name}
            ></input>
            {errorState.nameIsValid && (
              <span className={styles.errorMessage}>{errorState.message}</span>
            )}

            <label>Email</label>
            <input
              type="email"
              onChange={emailInputHandler}
              value={email}
              className={
                errorState.emailIsValid
                  ? `${styles.emailInputInvalid}`
                  : `${styles.emailInput}`
              }
            ></input>
            {errorState.emailIsValid && (
              <span className={styles.errorMessage}>{errorState.message}</span>
            )}
            <label>Message</label>
            <textarea
              onChange={messageHandler}
              value={message}
              className={
                errorState.messageIsValid
                  ? `${styles.messageInputInvalid}`
                  : `${styles.messageInput}`
              }
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
