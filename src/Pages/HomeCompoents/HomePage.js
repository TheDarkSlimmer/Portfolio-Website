import homeStyles from "../HomeCompoents/HomePage.module.css";
import myself from "../../Images/Me/SocialBook Cartoonizer Baby 3.jpeg";

function HomePage(props) {
  return (
    <div className={homeStyles.homeContainer}>
      <img src={myself} className={homeStyles.myself} />
      <div className={homeStyles.homeInfo}>
        <h1>
          Hi, <br /> I'm Ama Odoom
        </h1>
        <h1>A Web Designer and a Front End Developer</h1>
      </div>
    </div>
  );
}
export default HomePage;
