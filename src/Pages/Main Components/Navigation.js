import navStyles from "../Main Components/Navigation.module.css";
import logo from "../../Images/Logo/logo1.png";

function Navigation(props) {
  return (
    <div className={navStyles.navContainer}>
      <img className={navStyles.navImage} src={logo} />
      <div className={navStyles.navButtons}>
        <button className={navStyles.b1}>Home</button>
        <button className={navStyles.b2}>About</button>
        <button className={navStyles.b3}>Work</button>
      </div>
    </div>
  );
}
export default Navigation;
