import homeStyles from "../HomeCompoents/HomePage.module.css";
import myself from "../../Images/Me/SocialBook Cartoonizer Baby 3.jpeg";
import Footer from "../Main Components/Footer";
import SocialMedia from "./SocialMedia";

function HomePage(props) {
  return (
    <>
      <div className={homeStyles.homeContainer}>
        <div className={homeStyles.imgContainer}>
          <img
            src={myself}
            className={homeStyles.myself}
            alt="Ama Odoom cartoon"
          />
        </div>
        <div className={homeStyles.homeInfo}>
          <h1>
            Hi, <br /> I'm Ama Odoom
          </h1>
          <h1>A Web Designer and a Front End Developer</h1>
        </div>
      </div>
      <SocialMedia/>
      <Footer />
    </>
  );
}
export default HomePage;
