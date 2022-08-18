import AboutinfoStyles from "../About Components/Aboutinfo.module.css";
import Footer from "../Main Components/Footer";

function Aboutinfo(props) {
  return (
    <>
      <div className={AboutinfoStyles.aboutBody}>
        <h1 className={AboutinfoStyles.header}>About me</h1>
        <div className={AboutinfoStyles.paragraphs}>
          <p>{props.paragraph}</p>
          <button className={AboutinfoStyles.resumeButton}>Resume</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Aboutinfo;
