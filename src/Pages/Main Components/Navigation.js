import navStyles from "../Main Components/Navigation.module.css";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div className={navStyles.navContainer}>
      <h1>Ama Odoom</h1>
      <div className={navStyles.navButtons}>
        <Link to='/'>
          <button className={navStyles.b1}>Home</button>
        </Link>
        <Link to="/about">
          <button className={navStyles.b2}>About</button>
        </Link>
        <Link to='/work'>
          <button className={navStyles.b3}>Work</button>
        </Link>
      </div>
    </div>
  );
}
export default Navigation;
