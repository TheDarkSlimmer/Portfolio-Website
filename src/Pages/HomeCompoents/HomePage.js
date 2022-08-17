import homeStyles from "../HomeCompoents/HomePage.module.css";
import myself from "../../Images/Me/SocialBook Cartoonizer Baby 3.jpeg";
import MessagePop from "../Main Components/MessagePop";
import MessageButton from "../Main Components/MessageButton";

function HomePage(props) {
  return (
    <>
      <MessagePop />

      <div className={homeStyles.homeContainer}>
        <img
          src={myself}
          className={homeStyles.myself}
          alt="Ama Odoom cartoon"
        />
        <div className={homeStyles.homeInfo}>
          <h1>
            Hi, <br /> I'm Ama Odoom
          </h1>
          <h1>A Web Designer and a Front End Developer</h1>
        </div>
        <MessageButton />
      </div>
    </>
  );
}
export default HomePage;
