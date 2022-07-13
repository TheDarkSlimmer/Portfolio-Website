import "./Navigation.css";

function Navigation() {
  return (
    <header>
      <img className="logo" src="./Img/Logo/logo1.png"></img>;
      <nav>
        <button className="home">Home</button>
        <button className="about">About</button>
        <button className="work">Work</button>
      </nav>
    </header>
  );
}
export default Navigation;
