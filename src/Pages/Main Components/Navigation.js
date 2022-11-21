import navStyles from "../Main Components/Navigation.module.css";
import { Link } from "react-router-dom";
import logo from "../../Images/Logo/Logo3.png";

function Navigation(props) {
  return (
    <div className={navStyles.navContainer}>
      <img src={logo} alt="logo" className={navStyles.logo} />
      <div className={navStyles.navButtons}>
        <Link to="/">
          <button className={navStyles.b1}>Home</button>
        </Link>
        <Link to="/about">
          <button className={navStyles.b2}>About</button>
        </Link>
        <Link to="/work">
          <button className={navStyles.b3}>Work</button>
        </Link>
      </div>
    </div>
  );
}
export default Navigation;
