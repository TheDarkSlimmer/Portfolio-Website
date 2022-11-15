import homeStyles from "../HomeCompoents/HomePage.module.css";
import myself from "../../Images/Me/SocialBook Cartoonizer Baby 3.jpeg";
import Message from "./Message";
import ReactDOM from "react-dom";
import { useState } from "react";
import Modal from "../Main Components/Modal.js";
import Contact from '.././ContactComponents/Contact.js'

function HomePage(props) {
  const [openContact, setOpenContact] = useState(false);
  const [ openModal, setOpenModal ] = useState(false);

  function openModalHandler() {
    setOpenModal(true);
    setOpenContact(true)
  }

  // function closeContactHandler() {
  //   setOpenContact(null);
  //   setOpenModal(null);
  // }

  return (
    <>
      {ReactDOM.createPortal(
        openContact && <Contact/>,
        document.getElementById('contact-root')
      )}
      {ReactDOM.createPortal(
        openModal && <Modal/>,
        document.getElementById('modal-root')
      )}
      <div className={homeStyles.homeContainer}>
        <div className={homeStyles.imgContainer}>
          <img
            src={myself}
            className={homeStyles.myself}
            alt="Ama Odoom cartoon"
            onClick={openModalHandler}
          />
        </div>
        <div className={homeStyles.homeInfo}>
          <h1>
            Hi, <br /> I'm Ama Odoom
          </h1>
          <h1>A Web Designer and a Front End Developer</h1>
        </div>
        <Message openContactBox={openModalHandler} />
      </div>
    </>
  );
}
export default HomePage;
