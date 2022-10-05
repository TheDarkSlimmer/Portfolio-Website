import { Fragment } from "react";
import Navigation from "./Main Components/Navigation";
import Projects from "./Work Components/Projects";
import Experience from "./Work Components/Experience";
import Footer from "./Main Components/Footer";

export default function Work(props) {
  return (
    <Fragment>
      <Navigation />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Projects />
        <Experience />
      </div>
      <Footer />
    </Fragment>
  );
}
